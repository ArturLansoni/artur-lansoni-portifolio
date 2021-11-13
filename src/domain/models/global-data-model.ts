import { ImageModel, SeoModel, RemoteSeoModel } from '@/domain/models'

export type GlobalDataModel = {
	id: string
	siteName: string
	favicon: ImageModel
	seo: SeoModel
}

export type RemoteGlobalDataModel = {
	id: string
	siteName: string
	favicon: ImageModel
	defaultSeo: RemoteSeoModel
}
