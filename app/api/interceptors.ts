import { API_KEY, API_URL } from '@/config/api.config';
import axios from 'axios';

export const axiosClassic = axios.create({
	baseURL: API_URL,
	headers: {
		'X-API-KEY': API_KEY,
		'Content-Type': 'application/json',
	},
});
