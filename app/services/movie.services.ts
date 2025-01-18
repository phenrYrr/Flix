import { IActor, IMovie } from '@/shared/types/movie.types';
import { axiosClassic } from 'api/interceptors';
import { getActorsUrl, getMoviesUrl } from '@/config/api.config';

export const MovieServices = {
	async getAll() {
		const { data: actors } = await axiosClassic.get<IActor[]>(
			getActorsUrl(''),
		);

		return actors;
	},

	async getMostPopularMovies() {
		const { data: movies } = await axiosClassic.get<IMovie[]>(
			getMoviesUrl(''),
		);

		return movies;
	},
};
