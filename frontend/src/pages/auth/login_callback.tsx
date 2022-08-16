import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useUser } from "../../hooks/useUser"

export default function LoginCallback() {

    const { data: session } = useSession()
    const { authenticate, isAuthenticated } = useUser()
    const router = useRouter()

    useEffect(() => {
        if (session) {
            authenticate(session)
            isAuthenticated
                ? router.push('/my-team')
                : router.push('/')
        }
    }, [session])
}