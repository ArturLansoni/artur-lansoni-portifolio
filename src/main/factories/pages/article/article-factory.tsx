import React from 'react'
import { ArticleModel } from '@/domain/models'
import { makePublishedDateFormatter } from '@/main/factories/formatters'
import { Article } from '@/presentation/pages'

type Props = {
	article: ArticleModel
}

export const makeArticle: React.FC<Props> = ({ article }: Props) => {
	return <Article article={article} publishedDateFormatter={makePublishedDateFormatter()} />
}
