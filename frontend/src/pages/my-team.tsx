import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FilterInput } from "../components/FilterInput";
import { Header } from "../components/Header";
import { Pokemons } from "../components/Pokemons";
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
                <FilterInput />
                <Pokemons />
            </ThemeProvider>
        </>
    )
}