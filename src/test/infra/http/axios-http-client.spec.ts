import axios from 'axios'
import { HttpClient } from '../../../infra'
import { mockHttpRequest } from '../../data/mocks'
import { mockAxios, mockHttpResponse } from '../mocks'

type SutTypes = {
	sut: HttpClient
	mockedAxios: jest.Mocked<typeof axios>
}

const makeSut = (): SutTypes => {
	const mockedAxios = mockAxios()
	const sut = new HttpClient()
	return { sut, mockedAxios }
}

jest.mock('axios')

describe('HttpClient', () => {
	test('Should call axios with correct values', async () => {
		const request = mockHttpRequest()
		const { url, method, body, headers } = request
		const { sut, mockedAxios } = makeSut()
		await sut.request(request)
		expect(mockedAxios.request).toHaveBeenCalledWith({
			url,
			method,
			data: body,
			headers
		})
	})
	test('Should return correct response on axios.post', async () => {
		const { sut, mockedAxios } = makeSut()
		const httpResponse = await sut.request(mockHttpRequest())
		const axiosResponse = await mockedAxios.request.mock.results[0].value
		expect(httpResponse).toEqual({
			statusCode: axiosResponse.status,
			body: axiosResponse.data
		})
	})
	test('Should return correct error on axios.post', () => {
		const { sut, mockedAxios } = makeSut()
		mockedAxios.request.mockRejectedValueOnce({
			response: mockHttpResponse
		})
		const promise = sut.request(mockHttpRequest())
		expect(promise).toEqual(mockedAxios.request.mock.results[0].value)
	})
})
