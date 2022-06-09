import { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Formatter } from '@/data/protocols'
import { ArticleModel } from '@/domain/models'
import { IconContainer, Markdown, Seo, ShareButton } from '@/presentation/components'
import { useGlobal } from '@/presentation/context'
import { ClockIcon } from '@/presentation/icons'
import { Image } from '@chakra-ui/image'
import { Flex, Heading, Text } from '@chakra-ui/layout'

type Props = {
	article: ArticleModel
	publishedDateFormatter: Formatter<{ date: Date; locale?: string }, string>
}

function Article({ article, publishedDateFormatter }: Props) {
	const { t, lang } = useTranslation('article')
	const { setTranslationUrl } = useGlobal()

	useEffect(() => {
		if (article.translation) {
			console.log(article.translation, 'asas')
			setTranslationUrl(article.translation)
		}
		return () => setTranslationUrl(null)
	}, [article.translation])

	return (
		<>
			<Seo
				params={{
					metaTitle: article.title,
					metaDescription: article.description,
					metaImage: article.image
				}}
				isArticle
			/>
			<Flex
				direction='column'
				align='center'
				w='100%'
				borderRadius='xl'
				pb='5'
				bg='bg.400'
				backdropFilter='blur(10px)'
			>
				<Image
					src={article.image.url}
					alt={article.image.alternativeText}
					w='100%'
					maxH='250px'
					fit='cover'
					borderTopLeftRadius='xl'
					borderTopRightRadius='xl'
				/>
				<Flex direction='column' maxW='1000px' w='100%' px={5} mt={6}>
					<Flex direction='row' justify='space-between' align='center' gap={2}>
						<Heading size='2xl'>{article.title}</Heading>
						<ShareButton title={article.title} tags={article.tags} />
					</Flex>
					<Heading size='xl'>{article.description}</Heading>
					<Flex direction='row' align='center' mt={4} mb={6}>
						<Text fontSize='xs'>
							{publishedDateFormatter.format({
								date: article.publishedAt,
								locale: lang
							})}
						</Text>
						<Flex mx={1}>
							<ClockIcon color='#fff' height={14} width={14} />
						</Flex>
						<Text fontSize='xs'>
							{t('reading-time', { minutes: article.readingTime })}
						</Text>
					</Flex>
					<Markdown value={article.content} />
					<Flex direction='row' justify='space-between' mt={6}>
						<Flex direction='row' gap={2}>
							{article.tags.map(slug => (
								<IconContainer key={slug} fontSize='sm'>
									#{slug}
								</IconContainer>
							))}
						</Flex>
						<ShareButton title={article.title} tags={article.tags} />
					</Flex>
				</Flex>
			</Flex>
		</>
	)
}

export default Article
