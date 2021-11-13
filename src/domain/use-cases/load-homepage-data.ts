import { RemoteSeoModel, SeoModel } from '@/domain/models'

export interface LoadHomepageData {
	load: () => Promise<LoadHomepageData.Model>
}

export namespace LoadHomepageData {
	export type Model = SeoModel
	export type Remote = {
		seo: RemoteSeoModel
	}
}
