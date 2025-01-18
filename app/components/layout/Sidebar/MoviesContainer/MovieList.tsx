import { FC } from 'react';
import { IMovieList } from '@/shared/types/movie.types';

const MovieList: FC<IMovieList> = ({ movies, title, link }) => {
	return (
		<div>
			<div>{title}</div>
		</div>
	);
};

export default MovieList;
