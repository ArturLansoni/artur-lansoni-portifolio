import { IconContainer } from '@/presentation/components'
import { LinkedInIcon, GmailIcon, GithubIcon, TwitterIcon } from '@/presentation/icons'
import { Flex, Link, Image, Text } from '@chakra-ui/react'

function Footer() {
	return (
		<Flex
			as='footer'
			w='100%'
			h={[20, 16]}
			direction={['column', 'row']}
			align='center'
			justify='center'
			bg='bg.400'
			shadow='custom'
			borderTopLeftRadius='10px'
			borderTopRightRadius='10px'
			backdropFilter='blur(10px)'
		>
			<Flex direction='row'>
				<Image
					src='/profile-picture.jpg'
					alt='Profile picture'
					h={10}
					w={10}
					quality={100}
					objectFit='cover'
					borderRadius='full'
				/>
				<Flex direction='row' ml={8} gridGap={1} align='center'>
					<Link
						isExternal
						href='https://www.linkedin.com/in/arturlansoni/'
						aria-label='LinkedIn profile page'
						target='_blank'
						rel='noopener noreferrer'
						data-testid='linkedin-link'
					>
						<IconContainer h={8}>
							<LinkedInIcon />
						</IconContainer>
					</Link>
					<Link
						isExternal
						href='https://twitter.com/ArturLansoni'
						aria-label='Twitter profile page'
						target='_blank'
						rel='noopener noreferrer'
						data-testid='twitter-link'
					>
						<IconContainer h={8}>
							<TwitterIcon />
						</IconContainer>
					</Link>
					<Link
						isExternal
						href='https://github.com/ArturLansoni'
						aria-label='Github profile page'
						target='_blank'
						rel='noopener noreferrer'
						data-testid='github-link'
					>
						<IconContainer h={8}>
							<GithubIcon />
						</IconContainer>
					</Link>
					<Link
						isExternal
						href='mailto:arturlansoni@gmail.com'
						aria-label='Gmail profile page'
						target='_blank'
						rel='noopener noreferrer'
						data-testid='gmail-link'
					>
						<IconContainer h={8}>
							<GmailIcon />
						</IconContainer>
					</Link>
				</Flex>
			</Flex>

			<Text as='label' mt={[1, 0]} ml={[0, 8]} fontSize='sm'>
				© 2021 Artur Lansoni
			</Text>
		</Flex>
	)
}

export default Footer
