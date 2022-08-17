import { Session } from "next-auth"
import { destroyCookie, parseCookies, setCookie } from "nookies"
import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { appKeys } from "../config/AppKeys"
import { api } from "../services/api"

interface User {
    name: string
    providerId: string
    imageURL: string
}

interface UserProviderProps {
    children: ReactNode
}

interface UserContextData {
    user: User | undefined
    isAuthenticated: boolean
    authenticate: (session: Session) => void
    revokeAuthentication: () => void
}

const userContext = createContext<UserContextData>({} as UserContextData)

export function UserProvider({ children }: UserProviderProps): JSX.Element {

    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user

    function authenticate(session: Session) {
        api.post('session', {
            name: session.user.name,
            providerId: session.user.providerId
        }).then(response => {
            setCookie(undefined, appKeys.accessTokenKey, response.data.accessToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })

            setCookie(undefined, appKeys.refreshTokenKey, response.data.refreshToken.value, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })

            setUser({
                name: response.data.user.name,
                providerId: session.user.providerId,
                imageURL: session.user.image
            })
        }).catch(error => console.log(error))
    }

    function revokeAuthentication() {
        const cookies = parseCookies()
        api.delete('logout', {
            headers: {
                'x-refresh-token': cookies[appKeys.refreshTokenKey],
                Authorization: `Bearer ${cookies[appKeys.accessTokenKey]}`
            }
        }).then(() => {
            destroyCookie(undefined, appKeys.refreshTokenKey)
            destroyCookie(undefined, appKeys.accessTokenKey)
            setUser({} as User)
        }).catch((error) => console.log(error))
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