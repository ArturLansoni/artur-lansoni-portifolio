import useTranslation from 'next-translate/useTranslation'
import { Button, Flex, Heading, Image as ChakraImage } from '@chakra-ui/react'

type Props = {
	error: string
	reload: () => void
}

function Error({ error, reload }: Props) {
	const { t } = useTranslation('common')

	return (
		<Flex w='400px' p={5} borderRadius='xl' bg='bg.400' mx='auto' direction='column'>
			<Heading as='h3' size='lg' textAlign='center'>
				{error || t('error.default-message')}
			</Heading>
			<ChakraImage
				src='/illustration/error-illustration.svg'
				alt='Error illustration'
				layout='fill'
				quality={100}
				w='100%'
			/>
			<Button
				onClick={reload}
				w='100%'
				p={2}
				borderRadius='xl'
				bg='primary.500'
				color='text.500'
			>
				{t('error.try-again')}
			</Button>
		</Flex>
	)
}

export default Error
