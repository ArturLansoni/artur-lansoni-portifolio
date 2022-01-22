import faker from 'faker'
import { RemoteArticleModel, ArticleModel } from '../../../domain/models'
import { mockImageModel } from './mock-image'

export const mockArticleModel = (): ArticleModel => ({
	id: faker.datatype.uuid(),
	slug: faker.lorem.slug(),
	tags: [faker.random.arrayElement()],
	title: faker.lorem.sentence(),
	image: mockImageModel(),
	content: faker.lorem.paragraphs(),
	description: faker.lorem.sentences(),
	readingTime: faker.datatype.number(),
	publishedAt: faker.date.recent(),
	translation: faker.lorem.slug()
})

export const mockRemoteArticleModel = (): RemoteArticleModel => ({
	id: faker.datatype.uuid(),
	slug: faker.lorem.slug(),
	tags: [{ name: faker.random.arrayElement(), slug: faker.lorem.slug() }],
	title: faker.lorem.sentence(),
	image: mockImageModel(),
	content: faker.lorem.paragraphs(),
	description: faker.lorem.sentences(),
	readingTime: faker.datatype.number(),
	published_at: faker.date.recent(),
	created_at: faker.date.recent(),
	updated_at: faker.date.recent(),
	translation: { slug: faker.lorem.slug() }
})
