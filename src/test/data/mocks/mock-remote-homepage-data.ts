import { LoadHomepageData } from '../../../domain/use-cases'
import { mockRemoteSeoModel } from '../../domain/mocks'

export const mockDataRemoteHomepageDataModel = (): LoadHomepageData.Remote => ({
	seo: mockRemoteSeoModel()
})
