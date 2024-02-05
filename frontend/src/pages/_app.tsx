import { QueryClientProvider } from '@tanstack/react-query'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { CurrentThemeProvider } from '../hooks/useCurrentTheme'
import { TeamProvider } from '../hooks/useTeam'
import { UserProvider } from '../hooks/useUser'
import { queryClient } from '../services/queryClient'
import { GlobalStyle } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<CurrentThemeProvider>
			<SessionProvider>
				<ToastContainer />
				<UserProvider>
					<TeamProvider>
						<QueryClientProvider client={queryClient} >

							<Component {...pageProps} />
							<GlobalStyle />
						</QueryClientProvider>
					</TeamProvider>
				</UserProvider>
			</SessionProvider>
		</CurrentThemeProvider>
	)
}

export default MyApp
