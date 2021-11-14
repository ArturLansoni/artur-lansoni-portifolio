import { PublishedDateFormatter } from '@/data/formatters'

export const makePublishedDateFormatter = (): PublishedDateFormatter => {
	return new PublishedDateFormatter()
}
