import { RemoteLoadHomepageData } from '@/data/use-cases'
import { LoadHomepageData } from '@/domain/use-cases'
import { makeImageFormatter } from '@/main/factories/formatters'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeHttpClient } from '@/main/factories/http/http-client-factory'

export const makeRemoteLoadHomepageData = (): LoadHomepageData => {
	return new RemoteLoadHomepageData(
		makeApiUrl('/homepage'),
		makeHttpClient(),
		makeImageFormatter()
	)
}
