import { Formatter } from '@/data/protocols'
import { SeoModel } from '@/domain/models'
import { LoadArticleList } from '@/domain/use-cases'
import { Error, Seo, ArticleCard } from '@/presentation/components'
import { Flex, Grid } from '@chakra-ui/react'

type Props = {
	articles: LoadArticleList.Model[]
	error?: string
	seo: SeoModel
	publishedDateFormatter: Formatter<{ date: Date; locale?: string }, string>
}

function Home({ articles = [], error, seo, publishedDateFormatter }: Props) {
	function ShowCurrentState() {
		if (error) return <Error error={error} />
		return (
			<Grid as='ul' w='100%' templateColumns='repeat(auto-fit, minmax(320px, 1fr))' gap={5}>
				{articles.map((article: LoadArticleList.Model) => (
					<Flex as='li' listStyleType='none' key={article.id}>
						<ArticleCard
							article={article}
							publishedDateFormatter={publishedDateFormatter}
						/>
					</Flex>
				))}
			</Grid>
		)
	}

	return (
		<>
			<Seo params={seo} isArticle={false} />
			<ShowCurrentState />
		</>
	)
}

export default Home
