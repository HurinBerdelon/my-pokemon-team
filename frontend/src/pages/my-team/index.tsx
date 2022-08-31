import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Header } from "../../components/Header";
import { Pokemons } from "../../components/Pokemons";
import { MyTeam } from "../../components/MyTeam";
import { useCurrentTheme } from "../../hooks/useCurrentTheme";
import { MyTeamPageContainer } from "./style";
import { GetServerSideProps } from "next";
import { getPaginatedPokemon } from "../../services/getPaginatedPokemon";
import { PokemonSchema } from "../../schema/PokemonSchema";
import { ScrollToTop } from "../../components/ScrollToTop";
import { parseCookies } from "nookies";
import { appKeys } from "../../config/AppKeys";

interface MyTeamProps {
    data: {
        totalCount: number
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
                        {/* <FilterInput /> */}
                        <Pokemons data={data} showAddButton={true} />
                    </div>
                    <ScrollToTop />
                </MyTeamPageContainer>
            </ThemeProvider>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const data = await getPaginatedPokemon(1, 20)

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
        props: {
            data
        }
    }
}