import { Formatter, HttpClient, HttpStatusCode } from '@/data/protocols'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { LoadGlobalData } from '@/domain/use-cases'

export class RemoteLoadGlobalData implements LoadGlobalData {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<LoadGlobalData.Remote>,
		private readonly formatter: Formatter<LoadGlobalData.Remote, LoadGlobalData.Model>
	) {}

	async load(): Promise<LoadGlobalData.Model> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get'
		})
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok:
				return this.formatter.format(httpResponse.body)
			case HttpStatusCode.forbidden:
				throw new AccessDeniedError()
			default:
				throw new UnexpectedError()
		}
	}
}

export namespace RemoteLoadGlobalData {
	export type Model = LoadGlobalData.Model
	export type Remote = LoadGlobalData.Remote
}
