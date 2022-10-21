import React, { useEffect } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { Formatter } from '@/data/protocols'
import { ArticleModel } from '@/domain/models'
import { IconContainer, Markdown, Seo, ShareButton } from '@/presentation/components'
import { useGlobal } from '@/presentation/context'
import { ClockIcon } from '@/presentation/icons'
import { Box, Flex, Heading, Image, ListItem, Text, UnorderedList } from '@chakra-ui/react'

type Props = {
	article: ArticleModel
	publishedDateFormatter: Formatter<{ date: Date; locale?: string }, string>
}

const Article: React.FC<Props> = ({ article, publishedDateFormatter }: Props) => {
	const { t, lang } = useTranslation('article')
	const { setTranslationUrl } = useGlobal()

	useEffect(() => {
		if (article.translation) {
			setTranslationUrl(article.translation)
		}
		return () => setTranslationUrl(null)
	}, [article.translation, setTranslationUrl])

	if (!article) return <h1>erro</h1>
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
				flexDir='column'
				alignItems='center'
				w='100%'
				borderRadius='xl'
				pb={5}
				bg='bg.400'
			>
				<Image
					width='100%'
					maxH='250px'
					objectFit='cover'
					borderTopLeftRadius='xl'
					borderTopRightRadius='xl'
					src={article.image.url}
					alt={article.image.alternativeText}
				/>
				<Box w='100%' maxW='1000px' px={5} mt={6}>
					<Flex flexDir='row' justify='space-between' align='start' wrap='wrap'>
						<Heading as='h1' size='2xl'>
							{article.title}
						</Heading>
						<ShareButton title={article.title} tags={article.tags} />
					</Flex>
					<Heading as='h2' size='xl' mt={4}>
						{article.description}
					</Heading>
					<Flex flexDir='row' align='center' mt={4} mb={6}>
						<Text fontSize='xs'>
							{publishedDateFormatter.format({
								date: article.publishedAt,
								locale: lang
							})}
						</Text>
						<Flex mx={1} h='min-content'>
							<ClockIcon color='#fff' height={14} width={14} />
						</Flex>
						<Text fontSize='xs'>
							{t('reading-time', { minutes: article.readingTime })}
						</Text>
					</Flex>
					<Markdown value={article.content} />
					<Flex flexDir='row' justify='space-between' align='end' mt={6}>
						<UnorderedList
							display='flex'
							flexDir='row'
							justify='space-between'
							wrap='wrap'
							m={0}
						>
							{article.tags.map(slug => (
								<ListItem listStyleType='none' key={slug}>
									<IconContainer>
										<Text fontSize='xs'>#{slug}</Text>
									</IconContainer>
								</ListItem>
							))}
						</UnorderedList>
						<ShareButton title={article.title} tags={article.tags} />
					</Flex>
				</Box>
			</Flex>
		</>
	)
}

export default Article
