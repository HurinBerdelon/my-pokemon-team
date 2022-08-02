import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header";
import { Team } from "../../components/Team";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { TeamsPageContainer } from "./style";

export default function Teams(): JSX.Element {

    const { currentTheme } = useCurrentTheme()

    return (
        <>
            <Head>
                <title>My Team | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <TeamsPageContainer>
                    <Team />
                    <Team />
                    <Team />
                    <Team />
                    <Team />
                </TeamsPageContainer>
            </ThemeProvider>
        </>
    )
}