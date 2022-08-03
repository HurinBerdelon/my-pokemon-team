import Head from "next/head"
import { ThemeProvider } from "styled-components"
import { Header } from "../components/Header"
import { UpdateProfile } from "../components/UpdateProfile"
import { useCurrentTheme } from "../hooks/useCurrentTheme"

export default function UserSettings(): JSX.Element {

    const { currentTheme } = useCurrentTheme()

    return (
        <>
            <Head>
                <title>My Team | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <UpdateProfile />
            </ThemeProvider>
        </>
    )
}