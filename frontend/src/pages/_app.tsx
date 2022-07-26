import type { AppProps } from 'next/app'
import { CurrentThemeProvider } from '../hooks/useCurrentTheme'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CurrentThemeProvider>
			<Component {...pageProps} />
			<GlobalStyle />
		</CurrentThemeProvider>
	)
}

export default MyApp
