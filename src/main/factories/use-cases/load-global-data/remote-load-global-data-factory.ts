import { RemoteLoadGlobalData } from '@/data/use-cases'
import { LoadGlobalData } from '@/domain/use-cases'
import { makeGlobalResponseFormatter } from '@/main/factories/formatters'
import { makeApiUrl } from '@/main/factories/http/api-url-factory'
import { makeHttpClient } from '@/main/factories/http/http-client-factory'

export const makeRemoteLoadGlobalData = (): LoadGlobalData => {
	return new RemoteLoadGlobalData(
		makeApiUrl('/global'),
		makeHttpClient(),
		makeGlobalResponseFormatter()
	)
}
