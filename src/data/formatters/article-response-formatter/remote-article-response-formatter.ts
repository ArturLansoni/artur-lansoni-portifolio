/* eslint-disable @typescript-eslint/naming-convention */
import { Formatter } from '@/data/protocols'
import { RemoteArticleModel, ArticleModel, ImageModel } from '@/domain/models'

export class RemoteArticleResponseFormatter implements Formatter<RemoteArticleModel, ArticleModel> {
	constructor(private readonly imageFormatter: Formatter<ImageModel, ImageModel>) {}

	format(params: RemoteArticleModel): ArticleModel {
		const { published_at, image, tags, translation, ...article } = params
		delete article.created_at
		delete article.updated_at

		return {
			...article,
			publishedAt: published_at,
			image: this.imageFormatter.format(image),
			tags: tags.map(tag => tag.slug),
			translation: translation?.slug || null
		}
	}
}
