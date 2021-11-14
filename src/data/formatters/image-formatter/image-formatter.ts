/* eslint-disable @typescript-eslint/naming-convention */
import { Formatter } from '@/data/protocols'
import { ImageModel } from '@/domain/models'

export class ImageFormatter implements Formatter<ImageModel, ImageModel> {
	constructor(private readonly baseImageUrl: string) {}

	format(params: ImageModel): ImageModel {
		return {
			...params,
			url: `${this.baseImageUrl}${params.url}`
		}
	}
}
