import { GetStaticPaths, GetStaticProps } from 'next'
import { makeArticle } from '@/main/factories/pages'
import { makeRemoteLoadArticleList, makeRemoteLoadArticleBySlug } from '@/main/factories/use-cases'

export default makeArticle

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const loadArticleBySlug = makeRemoteLoadArticleBySlug()

	const article = await loadArticleBySlug.loadBySlug(params.slug as string)

	return {
		props: { article },
		revalidate: 1800
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	const loadArticleList = makeRemoteLoadArticleList({})
	const articles = await loadArticleList.loadAll()

	return {
		paths: articles.map(article => ({
			params: {
				slug: article.slug
			}
		})),
		fallback: 'blocking'
	}
}
