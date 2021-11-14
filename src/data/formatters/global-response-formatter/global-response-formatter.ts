/* eslint-disable @typescript-eslint/naming-convention */
import { Formatter } from '@/data/protocols'
import { RemoteGlobalDataModel, GlobalDataModel, ImageModel } from '@/domain/models'

export class GlobalResponseFormatter implements Formatter<RemoteGlobalDataModel, GlobalDataModel> {
	constructor(private readonly imageFormatter: Formatter<ImageModel, ImageModel>) {}

	format(params: RemoteGlobalDataModel): GlobalDataModel {
		const { defaultSeo, ...newParam } = params
		const { shareImage, ...seo } = defaultSeo

		return {
			...newParam,
			favicon: this.imageFormatter.format(newParam.favicon),
			seo: {
				...seo,
				metaImage: this.imageFormatter.format(shareImage)
			}
		}
	}
}
