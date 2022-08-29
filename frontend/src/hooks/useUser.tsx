import { FormikValues } from "formik"
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import { appKeys } from "../config/AppKeys"
import { UserResponseProps, UserSchema } from "../schema/UserSchema"
import { api } from "../services/api"
import { toastError, toastSuccess } from "../utils/toastProvider"

interface UserProviderProps {
    children: ReactNode
}

interface UserContextData {
    user: UserResponseProps | undefined
    isAuthenticated: boolean
    authenticate: (session: Session) => void
    revokeAuthentication: () => void
    updateUserImage: (values: FormikValues) => void
    deleteUserAccount: () => void
}

const userContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider({ children }: UserProviderProps): JSX.Element {

    const [user, setUser] = useState<UserResponseProps | undefined>()
    const router = useRouter()
    const isAuthenticated = !!user

    useEffect(() => {
        const cookies = parseCookies()
        const accessToken = cookies[appKeys.accessTokenKey]
        if (accessToken) {
            api.get('/users/me')
                .then(response => {
                    setUser(response.data)
                })
        }
    }, [])

    function authenticate(session: Session) {
        api.post('session', {
            name: session.user.name,
            providerId: session.user.providerId,
            imageUrl: session.user.image
        }).then(response => {
            setCookie(undefined, appKeys.accessTokenKey, response.data.accessToken, {
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: '/'
            })

            setCookie(undefined, appKeys.refreshTokenKey, response.data.refreshToken.value, {
                maxAge: 60 * 60 * 24 * 7, // 7 days
                path: '/'
            })

            api.defaults.headers['Authorization'] = `Bearer ${response.data.accessToken}`

            setUser(response.data.user)

            router.push('/my-team')
        }).catch(error => {
            console.log(error)
            router.push('/')
        })
    }

    function revokeAuthentication() {
        const cookies = parseCookies()
        api.delete('logout', {
            headers: {
                'x-refresh-token': cookies[appKeys.refreshTokenKey]
            }
        }).then(() => {
            setUser(undefined)
            destroyCookie(undefined, appKeys.refreshTokenKey, { path: '/' })
            destroyCookie(undefined, appKeys.accessTokenKey, { path: '/' })
        }).catch((error) => console.log(error))
            .finally(() => router.push('/'))
    }

    async function updateUserImage(values: FormikValues) {
        try {

            await api.patch('users/update-avatar', { avatar: values.avatar },
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                })

            const response = await api.get('/users/me')
            setUser(response.data)
            toastSuccess('Avatar Picture Updated!')
        } catch (error) {
            console.log(error)
            toastError('It was not possible to update your avatar, please try another image!')
        }
    }

    async function deleteUserAccount() {
        try {
            await api.delete('users/delete')
            toastSuccess('Account Deleted!')
            router.push('/')
        } catch (error) {
            console.log(error)
            toastError('It was not possible to delete your account, please try again later!')
        }
    }

    return (
        <userContext.Provider value={{
            user,
            isAuthenticated,
            authenticate,
            revokeAuthentication,
            updateUserImage,
            deleteUserAccount
        }}
        >
            {children}
        </userContext.Provider>
    )
}

export function useUser() {
    return useContext(userContext)
}