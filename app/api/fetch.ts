import axios from 'axios';

type TypeInput = {
	url: string;
	method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
	body?: any;
};

export const api = async ({ url, body, method }: TypeInput) => {
	return axios({
		method,
		url,
		data: body,
	});
};
