import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Team } from "../components/Team";
import { useCurrentTheme } from "../hooks/useCurrentTheme";

export default function MyTeam(): JSX.Element {

    const { currentTheme } = useCurrentTheme()

    return (
        <>
            <Head>
                <title>My Team | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <Team />
                <Team />
            </ThemeProvider>
        </>
    )
}