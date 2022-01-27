import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'
import { Seo } from '@/presentation/components'
import { HomeIcon } from '@/presentation/icons'
import { Flex, Heading, Text } from '@chakra-ui/layout'

const NotFound: React.FC = () => {
	const { t } = useTranslation('common')
	return (
		<>
			<Seo
				params={{
					metaTitle: '404 Not found'
				}}
			/>
			<Flex
				p={6}
				pb={5}
				w='100%'
				bg='bg.500'
				align='center'
				borderRadius='xl'
				direction='column'
			>
				<Image
					src='/illustration/not-found-illustration.svg'
					alt='Not found illustration'
					width={550}
					height={300}
					layout='intrinsic'
					objectFit='cover'
					quality={100}
				/>
				<Heading w='100%' size='lg'>
					{t('not-found.title')}
				</Heading>
				<Flex w='100%' direction='column' mt={8} gap={2}>
					<Link href='/' aria-label='Home page link'>
						<Flex
							w='fit-content'
							color='text.500'
							cursor='pointer'
							textDecoration='none'
							align='center'
						>
							<HomeIcon height={24} width={24} />
							<Text ml={2}>Home</Text>
						</Flex>
					</Link>
				</Flex>
			</Flex>
		</>
	)
}

export default NotFound
