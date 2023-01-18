import axios from 'axios';
import Toast from 'react-native-toast-message';
import { communicationConfig } from '../configs/communicationConfig';

const headers = {
	accept: 'application/json',
	'content-type': 'application/json',
};
// we only have one endpoint for this test, however i thought maybe would be good to define the baseUrl
export const http = axios.create({
	baseURL: communicationConfig.baseUrl,
	headers,
	method: 'GET',
});

export async function fetchData(query, page) {
	let url = `api/?key=${communicationConfig.apiKey}&q=${encodeURIComponent(
		query.replace(' ', '+'),
	)}`;
	if (page) url += `&page=${page}`;
	try {
		const resp = await http({
			url,
		});
		return resp.data;
	} catch (error) {
		if (error.response) {
			/*
			 * The request was made and the server responded with a
			 * status code that falls out of the range of 2xx
			 */
			const { status } = error.response;
			Toast.show({
				type: 'error',
				text1:
					rror?.response?.data?.message ||
					error?.response?.data?.error ||
					'Unknown error',
				text2: '',
			});
			console.warn(
				status,
				error?.response?.data?.message ||
					error?.response?.data?.error ||
					'Unknown error',
			);
		} else if (error.request) {
			/*
			 * The request was made but no response was received, `error.request`
			 * is an instance of XMLHttpRequest in the browser and an instance
			 * of http.ClientRequest in Node.js
			 */
			Toast.show({
				type: 'error',
				text1: 'Network error',
				text2: 'Check your network and retry!',
			});
			console.warn('Network error');
		} else {
			Toast.show({
				type: 'error',
				text1: 'Unknown error',
				text2: '',
			});
			console.warn('Connection error');
		}
		return false;
	}
}
