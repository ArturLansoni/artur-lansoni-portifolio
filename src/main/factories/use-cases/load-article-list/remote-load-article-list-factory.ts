import { RemoteLoadArticleList } from '@/data/use-cases'
import { LoadArticleList } from '@/domain/use-cases'
import { makeRemoteArticleResponseFormatter } from '@/main/factories/formatters'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeHttpClient } from '@/main/factories/http/http-client-factory'

type Params = {
	locale?: string
}

export const makeRemoteLoadArticleList = ({ locale }: Params): LoadArticleList => {
	let url = '/articles?_sort=published_at:DESC'
	if (locale) {
		url = `/articles?locale=${locale}&_sort=published_at:DESC`
	}
	return new RemoteLoadArticleList(
		makeApiUrl(url),
		makeHttpClient(),
		makeRemoteArticleResponseFormatter()
	)
}
