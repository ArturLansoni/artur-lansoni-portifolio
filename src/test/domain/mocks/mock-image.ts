import faker from 'faker'
import { ImageModel } from '../../../domain/models'

export const mockImageModel = (): ImageModel => ({
	url: faker.image.imageUrl(),
	alternativeText: faker.lorem.sentences()
})
