import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FilterInput } from "../../components/FilterInput";
import { Header } from "../../components/Header";
import { Pokemons } from "../../components/Pokemons";
import { MyTeam } from "../../components/MyTeam";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { MyTeamPageContainer } from "./style";

export default function MyTeamPage(): JSX.Element {

    const { currentTheme } = useCurrentTheme()

    return (
        <>
            <Head>
                <title>My Team | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <MyTeamPageContainer>
                    <MyTeam />
                    <div className="pokemons">
                        <FilterInput />
                        <Pokemons />
                    </div>
                </MyTeamPageContainer>
            </ThemeProvider>
        </>
    )
}