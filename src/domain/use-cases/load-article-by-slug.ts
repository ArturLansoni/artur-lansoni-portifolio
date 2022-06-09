import { ArticleModel, RemoteArticleModel } from '@/domain/models'

export interface LoadArticleBySlug {
	loadBySlug: (slug: string) => Promise<LoadArticleBySlug.Model>
}

export namespace LoadArticleBySlug {
	export type Model = ArticleModel
	export type RemoteArticle = RemoteArticleModel
}
