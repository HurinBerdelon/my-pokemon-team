import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { AboutContent } from "../../components/AboutContent";
import { Header } from "../../components/Header";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";

export default function About(): JSX.Element {

    const { currentTheme } = useCurrentTheme()

    return (
        <>
            <Head>
                <title>Teams | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <AboutContent />

            </ThemeProvider>
        </>
    )
}