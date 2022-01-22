import { ArticleModel, RemoteArticleModel } from '../../../domain/models'
import { mockArticleModel, mockRemoteArticleModel } from '../../domain/mocks'

export const mockDataRemoteArticleModel = (): RemoteArticleModel => mockRemoteArticleModel()

export const mockDataRemoteArticleListModel = (): RemoteArticleModel[] => [
	mockDataRemoteArticleModel(),
	mockDataRemoteArticleModel()
]

export const mockDataArticleModel = (): ArticleModel => mockArticleModel()
