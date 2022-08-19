import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import { useRouter } from "next/router"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { appKeys } from "../config/AppKeys"
import { UserSchema } from "../schema/UserSchema"
import { api } from "../services/api"

interface UserProviderProps {
    children: ReactNode
}

interface UserContextData {
    user: UserSchema | undefined
    isAuthenticated: boolean
    authenticate: (session: Session) => void
    revokeAuthentication: () => void
}

const userContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider({ children }: UserProviderProps): JSX.Element {

    const [user, setUser] = useState<UserSchema | undefined>()
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

            setUser(response.data.user)
        }).catch(error => {
            console.log(error)
            router.push('/')
        })
    }

    function revokeAuthentication() {
        const cookies = parseCookies()
        api.delete('logout', {
            headers: {
                'x-refresh-token': cookies[appKeys.refreshTokenKey],
                Authorization: `Bearer ${cookies[appKeys.accessTokenKey]}`
            }
        }).then(() => {
            setUser(undefined)
            destroyCookie(undefined, appKeys.refreshTokenKey, { path: '/' })
            destroyCookie(undefined, appKeys.accessTokenKey, { path: '/' })
        }).catch((error) => console.log(error))
            .finally(() => router.push('/'))
    }

    return (
        <userContext.Provider value={{
            user,
            isAuthenticated,
            authenticate,
            revokeAuthentication
        }}
        >
            {children}
        </userContext.Provider>
    )
}

export function useUser() {
    return useContext(userContext)
}