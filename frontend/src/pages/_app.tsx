import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { CurrentThemeProvider } from '../hooks/useCurrentTheme'
import { UserProvider } from '../hooks/useUser'
import { queryClient } from '../services/queryClient'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CurrentThemeProvider>
			<SessionProvider>
				<UserProvider>
					<QueryClientProvider client={queryClient} >

						<Component {...pageProps} />
						<GlobalStyle />
					</QueryClientProvider>
				</UserProvider>
			</SessionProvider>
		</CurrentThemeProvider>
	)
}

export default MyApp
