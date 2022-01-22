import { Formatter } from '../../../data/protocols'
import {
	ArticleModel,
	GlobalDataModel,
	ImageModel,
	RemoteArticleModel,
	RemoteGlobalDataModel
} from '../../../domain/models'
import { mockArticleModel, mockGlobalDataModel, mockImageModel } from '../../domain/mocks'

export class RemoteArticleResponseFormatterSpy
	implements Formatter<RemoteArticleModel, ArticleModel>
{
	callsCount = 0
	params: RemoteArticleModel[] = []
	result = mockArticleModel()

	format(params: RemoteArticleModel): ArticleModel {
		this.params = [...this.params, params]
		this.callsCount++
		return this.result
	}
}

export class ImageFormatterSpy implements Formatter<ImageModel, ImageModel> {
	callsCount = 0
	params: ImageModel[] = []
	result = mockImageModel()

	format(params: ImageModel): ImageModel {
		this.params = [...this.params, params]
		this.callsCount++
		return this.result
	}
}

export class GlobalResponseFormatterSpy
	implements Formatter<RemoteGlobalDataModel, GlobalDataModel>
{
	callsCount = 0
	params: RemoteGlobalDataModel = null
	result = mockGlobalDataModel()

	format(params: RemoteGlobalDataModel): GlobalDataModel {
		this.params = params
		this.callsCount++
		return this.result
	}
}
