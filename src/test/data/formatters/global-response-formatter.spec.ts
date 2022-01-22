import { GlobalResponseFormatter } from '../../../data/formatters/global-response-formatter/global-response-formatter'
import { mockImageModel } from '../../domain/mocks'
import { mockDataRemoteGlobalDataModel, ImageFormatterSpy } from '../mocks'

type SutTypes = {
	sut: GlobalResponseFormatter
	imageFormatterSpy: ImageFormatterSpy
}

const makeSut = (): SutTypes => {
	const imageFormatterSpy = new ImageFormatterSpy()
	const sut = new GlobalResponseFormatter(imageFormatterSpy)
	return {
		sut,
		imageFormatterSpy
	}
}

describe('GlobalResponseFormatter', () => {
	test('Should call ImageFormatter correctly', () => {
		const { sut, imageFormatterSpy } = makeSut()
		const rawValue = mockDataRemoteGlobalDataModel()
		sut.format(rawValue)
		expect(imageFormatterSpy.callsCount).toBe(2)
		expect(imageFormatterSpy.params[0]).toBe(rawValue.favicon)
		expect(imageFormatterSpy.params[1]).toBe(rawValue.defaultSeo.shareImage)
	})
	test('Should format a global response object correctly', () => {
		const { sut, imageFormatterSpy } = makeSut()
		const imageResult = mockImageModel()
		imageFormatterSpy.result = imageResult
		const rawValue = mockDataRemoteGlobalDataModel()
		const formattedValue = sut.format(rawValue)
		expect(formattedValue).toEqual({
			id: rawValue.id,
			siteName: rawValue.siteName,
			favicon: imageResult,
			seo: {
				id: rawValue.defaultSeo.id,
				metaTitle: rawValue.defaultSeo.metaTitle,
				metaDescription: rawValue.defaultSeo.metaDescription,
				metaImage: imageResult
			}
		})
	})
})
