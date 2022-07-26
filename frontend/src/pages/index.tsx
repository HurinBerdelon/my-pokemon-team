import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { Header } from "../components/Header";
import { useCurrentTheme } from "../hooks/useCurrentTheme";

export default function Home() {

	const { currentTheme } = useCurrentTheme()

	return (
		<>
			<Head>
				<title>Home | My Pokemon Team</title>
			</Head>

			<ThemeProvider theme={currentTheme}>
				<Header />
			</ThemeProvider>
		</>
	)
}


