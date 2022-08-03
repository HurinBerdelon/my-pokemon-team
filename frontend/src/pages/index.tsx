import { GetStaticProps } from "next";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { FilterInput } from "../components/FilterInput";
import { Header } from "../components/Header";
import { Pokemons } from "../components/Pokemons";
import { useCurrentTheme } from "../hooks/useCurrentTheme";
import { PokemonSchema } from "../schema/PokemonSchema";
import { getPaginatedPokemon } from "../services/getPaginatedPokemon";

interface HomeProps {
	data: {
		numberOfPages: number
		next: string | null
		pokemons: PokemonSchema[]
	}
}

export default function Home({ data }: HomeProps) {

	const { currentTheme } = useCurrentTheme()

	return (
		<>
			<Head>
				<title>Home | My Pokemon Team</title>
			</Head>

			<ThemeProvider theme={currentTheme}>
				<Header />
				<FilterInput />
				<Pokemons data={data} />
			</ThemeProvider>
		</>
	)
}


export const getStaticProps: GetStaticProps = async () => {

	const data = await getPaginatedPokemon()

	console.log(data)

	return {
		props: {
			data
		}
	}
}