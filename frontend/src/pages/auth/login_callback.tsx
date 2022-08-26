import { useSession } from "next-auth/react"
import Head from "next/head"
import { useEffect } from "react"
import { ThemeProvider } from "styled-components"
import { Header } from "../../components/Header"
import { useCurrentTheme } from "../../hooks/useCurrentTheme"
import { useUser } from "../../hooks/useUser"
import { LoginCallbackContainer } from "./style"

import style from './style.module.scss'

export default function LoginCallback() {

    const { currentTheme } = useCurrentTheme()
    const { data: session } = useSession()
    const { authenticate } = useUser()

    useEffect(() => {
        if (session) {
            authenticate(session)
        }
    }, [session])

    return (
        <>
            <Head>
                <title>Home | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <LoginCallbackContainer>
                    <h3>Please await, redirecting ...</h3>
                </LoginCallbackContainer>
            </ThemeProvider>
        </>
    )
}