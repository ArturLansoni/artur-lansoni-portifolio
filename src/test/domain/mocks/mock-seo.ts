import faker from 'faker'
import { RemoteSeoModel, SeoModel } from '../../../domain/models'
import { mockImageModel } from './mock-image'

export const mockSeoModel = (): SeoModel => ({
	id: faker.datatype.uuid(),
	metaTitle: faker.random.words(),
	metaDescription: faker.lorem.sentences(),
	metaImage: mockImageModel()
})

export const mockRemoteSeoModel = (): RemoteSeoModel => ({
	id: faker.datatype.uuid(),
	metaTitle: faker.random.words(),
	metaDescription: faker.lorem.sentences(),
	shareImage: mockImageModel()
})
