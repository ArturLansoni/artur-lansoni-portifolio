import { HttpRequest, HttpResponse, HttpClient as AxiosHttpClient } from '@/data/protocols'
import axios, { AxiosResponse } from 'axios'

export class HttpClient implements AxiosHttpClient {
	async request({ url, method, body, headers, params }: HttpRequest): Promise<HttpResponse> {
		let axiosResponse: AxiosResponse
		try {
			axiosResponse = await axios.request({
				url,
				params,
				method,
				data: body,
				headers
			})
		} catch (error) {
			axiosResponse = error.response
		}
		return {
			statusCode: axiosResponse.status || 500,
			body: axiosResponse.data || null
		}
	}
}
