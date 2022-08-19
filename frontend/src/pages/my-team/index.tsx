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
import { useUser } from "../../hooks/useUser";
import { useRouter } from "next/router";

interface MyTeamProps {
    data: {
        totalCount: number
        next: string | null
        pokemons: PokemonSchema[]
    }
}

export default function MyTeamPage({ data }: MyTeamProps): JSX.Element {

    const { currentTheme } = useCurrentTheme()
    const { user } = useUser()
    const router = useRouter()

    if (!user) {
        router.push('/')
        return <></>
    }

    return (
        <>
            <Head>
                <title>My Team | My Pokemon Team</title>
            </Head>

            <ThemeProvider theme={currentTheme}>
                <Header />
                <MyTeamPageContainer>
                    <MyTeam user={user} />
                    <div className="pokemons">
                        {/* <FilterInput /> */}
                        <Pokemons data={data} />
                    </div>
                    <ScrollToTop />
                </MyTeamPageContainer>
            </ThemeProvider>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {

    const data = await getPaginatedPokemon(1, 20)

    // Redirect to home if not authenticated on serverside

    return {
        props: {
            data
        }
    }
}