import { HttpClient } from '@/infra'

export const makeHttpClient = (): HttpClient => {
	return new HttpClient()
}
