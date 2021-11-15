import { GetStaticProps } from 'next'
import { makeHome } from '@/main/factories/pages'
import { makeRemoteLoadArticleList, makeRemoteLoadHomepageData } from '@/main/factories/use-cases'

export default makeHome

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const loadArticleList = makeRemoteLoadArticleList({ locale })
	const loadHomepageData = makeRemoteLoadHomepageData()

	let articles = []
	let seo = null
	let error = ''

	try {
		articles = await loadArticleList.loadAll()
		seo = await loadHomepageData.load()
	} catch (err) {
		error = err.message
	}

	return {
		props: { articles, error, seo },
		revalidate: 1800
	}
}
