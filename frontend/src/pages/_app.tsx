import { QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'
import { CurrentThemeProvider } from '../hooks/useCurrentTheme'
import { queryClient } from '../services/queryClient'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CurrentThemeProvider>
			<QueryClientProvider client={queryClient} >

				<Component {...pageProps} />
				<GlobalStyle />
			</QueryClientProvider>
		</CurrentThemeProvider>
	)
}

export default MyApp
