import { GetServerSideProps } from "next"
import Head from "next/head"
import { parseCookies } from "nookies"
import { ThemeProvider } from "styled-components"
import { Header } from "../components/Header"
import { UpdateProfile } from "../components/UpdateProfile"
import { appKeys } from "../config/AppKeys"
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const cookies = parseCookies(ctx)

    if (!cookies[appKeys.accessTokenKey] || !cookies[appKeys.refreshTokenKey]) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            },
            props: {},
        }
    }

    return {
        props: {}
    }
}