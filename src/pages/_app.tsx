import { AppProps } from 'next/app'
import Head from 'next/head'
import { makeRemoteLoadGlobalData } from '@/main/factories/use-cases'
import { Layout } from '@/presentation/components'
import { GlobalProvider } from '@/presentation/context'
import { theme } from '@/presentation/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
	const { favicon } = pageProps
	return (
		<>
			<Head>
				<link rel='shortcut icon' href={favicon.url} />
				<meta
					name='viewport'
					content='width=device-width, initial-scale=1, maximum-scale=5'
				/>
			</Head>
			<ChakraProvider theme={theme}>
				<GlobalProvider
					initialProps={{ defaultSeo: pageProps.seo, siteName: pageProps.siteName }}
				>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</GlobalProvider>
			</ChakraProvider>
		</>
	)
}

MyApp.getInitialProps = async () => {
	const loadGlobalData = makeRemoteLoadGlobalData()

	let pageProps = null
	try {
		pageProps = await loadGlobalData.load()
	} catch (e) {
		return
	}

	return { pageProps }
}

export default MyApp
