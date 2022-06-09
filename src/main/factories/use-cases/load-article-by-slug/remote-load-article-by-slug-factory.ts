import { RemoteLoadArticleBySlug } from '@/data/use-cases'
import { LoadArticleBySlug } from '@/domain/use-cases'
import { makeRemoteArticleResponseFormatter } from '@/main/factories/formatters'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeHttpClient } from '@/main/factories/http/http-client-factory'

export const makeRemoteLoadArticleBySlug = (): LoadArticleBySlug => {
	return new RemoteLoadArticleBySlug(
		makeApiUrl('/articles?slug='),
		makeHttpClient(),
		makeRemoteArticleResponseFormatter()
	)
}
