import { RemoteArticleResponseFormatter } from '@/data/formatters'
import { makeImageFormatter } from '@/main/factories/formatters'

export const makeRemoteArticleResponseFormatter = (): RemoteArticleResponseFormatter => {
	return new RemoteArticleResponseFormatter(makeImageFormatter())
}
