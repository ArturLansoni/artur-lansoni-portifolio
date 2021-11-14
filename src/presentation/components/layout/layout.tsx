import { Footer, Header } from '@/presentation/components'
import { Flex } from '@chakra-ui/react'

type Props = {
	children: React.ReactNode
}

function Layout({ children }: Props) {
	return (
		<Flex minH='100vh' align='center' direction='column' justify='space-between'>
			<Header />
			<Flex as='section' w='100%' maxW='1152px' pt={24} pb={8} px={1}>
				{children}
			</Flex>
			<Footer />
		</Flex>
	)
}

export default Layout
