import { Formatter, HttpClient, HttpStatusCode } from '@/data/protocols'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { LoadArticleList } from '@/domain/use-cases'

export class RemoteLoadArticleList implements LoadArticleList {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<RemoteLoadArticleList.RemoteArticle[]>,
		private readonly formatter: Formatter<
			RemoteLoadArticleList.RemoteArticle,
			RemoteLoadArticleList.Model
		>
	) {}

	async loadAll(): Promise<LoadArticleList.Model[]> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get'
		})
		const remoteArticles = httpResponse.body || []
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return remoteArticles.map(article => this.formatter.format(article))
			case HttpStatusCode.noContent:
				return []
			case HttpStatusCode.forbidden:
				throw new AccessDeniedError()
			default:
				throw new UnexpectedError()
		}
	}
}

export namespace RemoteLoadArticleList {
	export type Model = LoadArticleList.Model
	export type RemoteArticle = LoadArticleList.RemoteArticle
}
