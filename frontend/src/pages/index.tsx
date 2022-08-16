import { GetStaticProps } from "next";
import Head from "next/head";
import { useSession } from 'next-auth/react'
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { Pokemons } from "../components/Pokemons";
import { ScrollToTop } from "../components/ScrollToTop";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import { PokemonSchema } from "../schema/PokemonSchema";
import { getPaginatedPokemon } from "../services/getPaginatedPokemon";

interface HomeProps {
	data: {
		totalCount: number
		next: string | null
		pokemons: PokemonSchema[]
	}
}

export default function Home({ data }: HomeProps) {

	const { currentTheme } = useCurrentTheme()
	const { data: session } = useSession()

	return (
		<>
			<Head>
				<title>Home | My Pokemon Team</title>
			</Head>

			<ThemeProvider theme={currentTheme}>
				<Header />
				{/* <FilterInput /> */}
				<Pokemons data={data} />
				<ScrollToTop />
			</ThemeProvider>
		</>
	)
}


export const getStaticProps: GetStaticProps = async () => {

	const data = await getPaginatedPokemon(1, 20)

	return {
		props: {
			data
		}
	}
}