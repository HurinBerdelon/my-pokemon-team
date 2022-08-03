import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FilterInput } from "../../components/FilterInput";
import { Header } from "../../components/Header";
import { Pokemons } from "../../components/Pokemons";
import { MyTeam } from "../../components/MyTeam";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { MyTeamPageContainer } from "./style";
import { GetServerSideProps } from "next";
import { getPaginatedPokemon } from "../../services/getPaginatedPokemon";
import { PokemonSchema } from "../../schema/PokemonSchema";
import { ScrollToTop } from "../../components/ScrollToTop";

interface MyTeamProps {
    data: {
        numberOfPages: number
        next: string | null
        pokemons: PokemonSchema[]
    }
}

export default function MyTeamPage({ data }: MyTeamProps): JSX.Element {

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
                        <Pokemons data={data} />
                    </div>
                    <ScrollToTop />
                </MyTeamPageContainer>
            </ThemeProvider>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const data = await getPaginatedPokemon()

    return {
        props: {
            data
        }
    }
}