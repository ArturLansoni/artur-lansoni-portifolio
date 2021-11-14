import { SeoModel } from '@/domain/models'
import { LoadArticleList } from '@/domain/use-cases'
import { makePublishedDateFormatter } from '@/main/factories/formatters'
import { Home } from '@/presentation/pages'

type Props = {
	articles: LoadArticleList.Model[]
	error?: string
	seo: SeoModel
}

export function makeHome({ articles, error, seo }: Props) {
	return (
		<Home
			articles={articles}
			error={error}
			seo={seo}
			publishedDateFormatter={makePublishedDateFormatter()}
		/>
	)
}
