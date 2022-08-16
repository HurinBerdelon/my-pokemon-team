import { useRouter } from "next/router"
import { useEffect } from "react"
import { useUser } from "../../hooks/useUser"

export default function LogoutCallback() {

    // const { data: session } = useSession()
    const { revokeAuthentication } = useUser()
    const router = useRouter()

    useEffect(() => {
        revokeAuthentication()
        router.push('/')
    }, [])
}