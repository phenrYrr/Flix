import { IActor, IMovie } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';
import { getActorsUrl, getMoviesUrl } from '@/config/api.config';

export const MovieServices = {
	async getAll(searchTerm?: string) {
		return axiosClassic.get<IMovie[]>(getMoviesUrl(''), {
			params: searchTerm ? { searchTerm } : {},
		});
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl(''),
		);

		return movies;
	},
};
