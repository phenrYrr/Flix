import { API_KEY, API_URL } from '@/config/api.config';
import axios from 'axios';
import Cookies from 'js-cookie';
import { errorCatch } from './api.helpers';

const instance = axios.create({
	baseURL: API_URL,
	headers: {
		'X-API-KEY': API_KEY,
		'Content-Type': 'application/json',
	},
});

//@ts-ignore
instance.interceptors.request.use((config) => {
	const accessToken = Cookies.get('access-token');

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`;
	}

	return config;
});

instance.interceptors.response.use(
	(config) => config,
	async (error) => {
		const originalRequest = error.config;

		if (
			(error.response.status === 401 ||
				errorCatch(error) === 'jwt expired' ||
				errorCatch(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		) {
			originalRequest._isRetry = true;
		}
	},
);

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'X-API-KEY': API_KEY,
		'Content-Type': 'application/json',
	},
})
