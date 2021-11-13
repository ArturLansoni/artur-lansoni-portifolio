import { ImageModel } from './image-model'

export type ArticleModel = {
	id: string
	slug: string
	title: string
	content: string
	description: string
	readingTime: number
	image: ImageModel
	tags?: string[]
	publishedAt: Date
	translation?: string
}

export type RemoteArticleModel = {
	id: string
	slug: string
	title: string
	content: string
	description: string
	readingTime: number
	image: ImageModel
	tags?: Array<{ name: string; slug: string }>
	published_at: Date
	created_at: Date
	updated_at: Date
	translation?: { slug: string }
}
