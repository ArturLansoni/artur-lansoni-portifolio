import { ImageModel } from '@/domain/models'

export type SeoModel = {
	id?: string
	metaTitle: string
	metaImage?: ImageModel
	metaDescription?: string
}

export type RemoteSeoModel = {
	id: string
	metaTitle: string
	metaDescription: string
	shareImage: ImageModel
}
