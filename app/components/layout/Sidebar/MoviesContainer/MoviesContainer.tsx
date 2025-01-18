import { FC } from 'react';
import PopularMovies from './PopularMovies';
import AuthFavorites from '../Favorites/AuthFavorites';

const MoviesContainer: FC = () => {
	return (
		<div>
			<PopularMovies />
			<AuthFavorites />
		</div>
	);
};

export default MoviesContainer;
