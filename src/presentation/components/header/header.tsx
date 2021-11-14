import { LocaleSwitcher } from '@/presentation/components'
import { Logo } from '@/presentation/icons'
import { Flex, Heading, Link } from '@chakra-ui/react'

function Header() {
	return (
		<Flex
			as='header'
			zIndex={1}
			w='100%'
			h={16}
			pos='fixed'
			px={3}
			py={4}
			align='center'
			justify='center'
			bg='bg.400'
			shadow='custom'
			sx={{ 'backdrop-filter': 'blur(10px)' }}
		>
			<Flex direction='row' w='1152px' align='center' justify='space-between'>
				<Link
					href='/'
					aria-label='Home page link'
					sx={{ textDecoration: 'none !important' }}
				>
					<Flex display='flex' direction='row' align='center' justify='space-between'>
						<Logo />
						<Heading as='h3' size='lg' ml={4}>
							Artur Lansoni
						</Heading>
					</Flex>
				</Link>
				<LocaleSwitcher />
			</Flex>
		</Flex>
	)
}

export default Header
