import { ArticleModel, RemoteArticleModel } from '@/domain/models'

export interface LoadArticleList {
	loadAll: () => Promise<LoadArticleList.Model[]>
}

export namespace LoadArticleList {
	export type Model = ArticleModel
	export type RemoteArticle = RemoteArticleModel
}
