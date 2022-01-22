import { PublishedDateFormatter } from '../../../data/formatters'

const makeSut = (): PublishedDateFormatter => new PublishedDateFormatter()

describe('PublishedDateFormatter', () => {
	test("Should return correctly when locale is 'pt-BR'", () => {
		const sut = makeSut()
		const date = new Date('03/13/2021')
		const locale = 'pt-BR'
		const result = sut.format({ date, locale })

		expect(result).toBe('13 mar, 2021')
	})
	test("Should return correctly when locale is 'en-US'", () => {
		const sut = makeSut()
		const date = new Date('03/13/2021')
		const locale = 'en-US'
		const result = sut.format({ date, locale })

		expect(result).toBe('Mar 13, 2021')
	})
})
