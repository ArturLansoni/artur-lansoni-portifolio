import useTranslation from 'next-translate/useTranslation'
import { Formatter } from '@/data/protocols'
import { LoadArticleList } from '@/domain/use-cases'
import { ClockIcon } from '@/presentation/icons'
import { Box, Flex, Image, Heading, Text, Link } from '@chakra-ui/react'

type Props = {
	article: LoadArticleList.Model
	publishedDateFormatter: Formatter<{ date: Date; locale?: string }, string>
}

function ArticleCard({ article, publishedDateFormatter }: Props) {
	const { t, lang } = useTranslation('article')

	return (
		<Link
			href={`/article/${article.slug}`}
			w='100%'
			aria-label={`Article: ${article.title} page link`}
			sx={{ textDecoration: 'none !important' }}
		>
			<Flex
				cursor='pointer'
				pos='relative'
				direction='column'
				w='100%'
				minH={60}
				minW={80}
				borderRadius='xl'
				bg='bg.400'
			>
				<Box
					pos='relative'
					display='inline-block'
					_after={{
						content: `""`,
						position: 'absolute',
						left: 0,
						top: 0,
						width: '100%',
						height: '100%',
						display: 'inline-block',
						bg: 'linear-gradient(to bottom, rgba(33, 33, 33, 0.9) 0%, transparent 100%)',
						borderTopLeftRadius: 8,
						borderTopRightRadius: 8
					}}
				>
					<Image
						src={article.image.url}
						alt={article.image.alternativeText}
						display='block'
						w='100%'
						h='100px'
						objectFit='cover'
						sx={{
							'border-top-left-radius': '10px',
							'border-top-right-radius': '10px'
						}}
					/>
				</Box>
				<Flex h='100%' minH='150px' p={4} direction='column' justify='space-between'>
					<Flex direction='column'>
						<Heading as='h2' size='lg'>
							{article.title}
						</Heading>
						<Flex direction='row' align='center' lineHeight={1} mt={2}>
							<Text fontSize='xs' color='text.600' fontWeight='bold'>
								{publishedDateFormatter.format({
									date: article.publishedAt,
									locale: lang
								})}
							</Text>
							<Flex mx={1}>
								<ClockIcon />
							</Flex>
							<Text fontSize='xs' color='text.600' fontWeight='bold'>
								{t('reading-time', { minutes: article.readingTime })}
							</Text>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Link>
	)
}

export default ArticleCard
