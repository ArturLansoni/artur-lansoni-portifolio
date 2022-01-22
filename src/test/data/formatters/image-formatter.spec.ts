import faker from 'faker'
import { ImageFormatter } from '../../../data/formatters'
import { mockRemoteRawImageModel } from '../mocks'

const makeSut = (baseImageUrl = faker.internet.url()): ImageFormatter => {
	return new ImageFormatter(baseImageUrl)
}

describe('ImageFormatter', () => {
	test('Should format an ImageModel object correctly', async () => {
		const baseImageUrl = faker.internet.url()
		const sut = makeSut(baseImageUrl)
		const rawImage = mockRemoteRawImageModel()
		const result = sut.format(rawImage)
		expect(result).toEqual({
			url: `${baseImageUrl}${rawImage.url}`,
			alternativeText: rawImage.alternativeText
		})
	})
})
