import { Formatter, HttpClient, HttpStatusCode } from '@/data/protocols'
import { AccessDeniedError, UnexpectedError } from '@/domain/errors'
import { ImageModel } from '@/domain/models'
import { LoadHomepageData } from '@/domain/use-cases'

export class RemoteLoadHomepageData implements LoadHomepageData {
	constructor(
		private readonly url: string,
		private readonly httpClient: HttpClient<LoadHomepageData.Remote>,
		private readonly imageFormatter: Formatter<ImageModel, ImageModel>
	) {}

	async load(): Promise<LoadHomepageData.Model> {
		const httpResponse = await this.httpClient.request({
			url: this.url,
			method: 'get'
		})
		switch (httpResponse.statusCode) {
			case HttpStatusCode.ok: {
				const { id, metaTitle, metaDescription, shareImage } = httpResponse.body.seo
				return {
					id,
					metaTitle,
					metaDescription,
					metaImage: this.imageFormatter.format(shareImage)
				}
			}
			case HttpStatusCode.forbidden:
				throw new AccessDeniedError()
			default:
				throw new UnexpectedError()
		}
	}
}

export namespace RemoteLoadHomepageData {
	export type Model = LoadHomepageData.Model
	export type Remote = LoadHomepageData.Remote
}
