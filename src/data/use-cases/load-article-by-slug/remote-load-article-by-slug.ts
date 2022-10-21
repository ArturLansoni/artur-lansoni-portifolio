import { Formatter, HttpClient, HttpStatusCode } from '@/data/protocols'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { LoadArticleBySlug } from '@/domain/use-cases'

export class RemoteLoadArticleBySlug implements LoadArticleBySlug {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<RemoteLoadArticleBySlug.RemoteArticle[]>,
		private readonly formatter: Formatter<
			LoadArticleBySlug.RemoteArticle,
			LoadArticleBySlug.Model
		>
	) {}

	async loadBySlug(slug: string): Promise<LoadArticleBySlug.Model> {
		const httpResponse = await this.httpClient.request({
			url: `${this.url}${slug}`,
			method: 'get'
		})
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return this.formatter.format(httpResponse.body[0])
			case HttpStatusCode.forbidden:
				throw new AccessDeniedError()
			default:
				throw new UnexpectedError()
		}
	}
}

export namespace RemoteLoadArticleBySlug {
	export type Model = LoadArticleBySlug.Model
	export type RemoteArticle = LoadArticleBySlug.RemoteArticle
}
