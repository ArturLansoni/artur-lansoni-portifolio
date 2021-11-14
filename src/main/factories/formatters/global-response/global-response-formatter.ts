import { GlobalResponseFormatter } from '@/data/formatters'
import { makeImageFormatter } from '@/main/factories/formatters'

export const makeGlobalResponseFormatter = (): GlobalResponseFormatter => {
	return new GlobalResponseFormatter(makeImageFormatter())
}
