import { IMenuItem } from '@/components/layout/Navigation/MenuContainer/menu.interface';
import { API_URL, getListUrl } from '@/config/api.config';
import { IList } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';

export const ListInfoServices = {
	async getListInfo() {
		return await axiosClassic.get<IMenuItem[]>(
			getListUrl(`${API_URL}v1.4/movie`),
		);
	},
};
