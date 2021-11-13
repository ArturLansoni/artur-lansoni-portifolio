import { GlobalDataModel, RemoteGlobalDataModel } from '@/domain/models'

export interface LoadGlobalData {
	load: () => Promise<LoadGlobalData.Model>
}

export namespace LoadGlobalData {
	export type Model = GlobalDataModel
	export type Remote = RemoteGlobalDataModel
}
