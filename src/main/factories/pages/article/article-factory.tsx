import { ArticleModel } from '@/domain/models'
import { makePublishedDateFormatter } from '@/main/factories/formatters'
import { Article } from '@/presentation/pages'

type Props = {
	article: ArticleModel
}

export function makeArticle({ article }: Props) {
	return <Article article={article} publishedDateFormatter={makePublishedDateFormatter()} />
}
