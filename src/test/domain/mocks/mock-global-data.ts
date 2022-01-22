import faker from 'faker'
import { GlobalDataModel, RemoteGlobalDataModel } from '../../../domain/models'
import { mockSeoModel, mockImageModel, mockRemoteSeoModel } from './'

export const mockGlobalDataModel = (): GlobalDataModel => ({
	id: faker.datatype.uuid(),
	siteName: faker.random.words(),
	favicon: mockImageModel(),
	seo: mockSeoModel()
})

export const mockRemoteGlobalDataModel = (): RemoteGlobalDataModel => ({
	id: faker.datatype.uuid(),
	siteName: faker.random.words(),
	favicon: mockImageModel(),
	defaultSeo: mockRemoteSeoModel()
})
