import { RemoteArticleResponseFormatter } from '../../../data/formatters'
import { ImageFormatterSpy, mockDataRemoteArticleModel } from '../../data/mocks'
import { mockImageModel } from '../../domain/mocks'

type SutTypes = {
	sut: RemoteArticleResponseFormatter
	imageFormatterSpy: ImageFormatterSpy
}

const makeSut = (): SutTypes => {
	const imageFormatterSpy = new ImageFormatterSpy()
	const sut = new RemoteArticleResponseFormatter(imageFormatterSpy)
	return {
		sut,
		imageFormatterSpy
	}
}

describe('RemoteArticleResponseFormatter', () => {
	test('Should call ImageFormatter correctly', () => {
		const { sut, imageFormatterSpy } = makeSut()
		const rawValue = mockDataRemoteArticleModel()
		sut.format(rawValue)
		expect(imageFormatterSpy.callsCount).toBe(1)
		expect(imageFormatterSpy.params[0]).toBe(rawValue.image)
	})
	test('Should format an article object correctly', async () => {
		const { sut, imageFormatterSpy } = makeSut()
		const imageResult = mockImageModel()
		imageFormatterSpy.result = imageResult
		const rawValue = mockDataRemoteArticleModel()
		const formattedValue = sut.format(rawValue)
		expect(formattedValue).toEqual({
			id: rawValue.id,
			slug: rawValue.slug,
			title: rawValue.title,
			content: rawValue.content,
			description: rawValue.description,
			readingTime: rawValue.readingTime,
			image: imageResult,
			tags: rawValue.tags.map(tag => tag.slug),
			publishedAt: rawValue.published_at,
			translation: rawValue.translation.slug
		})
	})
})
