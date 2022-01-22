import { GlobalDataModel, RemoteGlobalDataModel } from '../../../domain/models'
import { mockGlobalDataModel, mockRemoteGlobalDataModel } from '../../domain/mocks'

export const mockDataRemoteGlobalDataModel = (): RemoteGlobalDataModel =>
	mockRemoteGlobalDataModel()

export const mockDataGlobalDataModel = (): GlobalDataModel => mockGlobalDataModel()
