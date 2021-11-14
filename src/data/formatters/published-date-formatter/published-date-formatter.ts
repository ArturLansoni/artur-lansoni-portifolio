import { Formatter } from '@/data/protocols'

export class PublishedDateFormatter implements Formatter<PublishedDateFormatter.Params, string> {
	format({ date, locale = 'en' }: PublishedDateFormatter.Params): string {
		const value = new Date(date)
		const day = value.getDate().toString().padStart(2, '0')
		const month = value.toLocaleString(locale, { month: 'short' }).replace('.', '')
		const year = value.getFullYear()

		if (locale.includes('pt')) return `${day} ${month}, ${year}`

		return `${month} ${day}, ${year}`
	}
}

export namespace PublishedDateFormatter {
	export type Params = {
		date: Date
		locale?: string
	}
}
