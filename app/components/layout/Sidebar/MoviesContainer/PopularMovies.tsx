import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { MovieServices } from '@/services/movie.services';
import { useQuery } from '@tanstack/react-query';
import styles from './PopularMovies.module.scss';
import { FC } from 'react';
import MovieList from './MovieList';

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['Popular movies in sidebar'],
		queryFn: () => MovieServices.getMostPopularMovies(),
	});

	return isLoading ? (
		<div className={styles.wrapper}>
			<SkeletonLoader
				count={3}
				className={styles.skeleton}
			/>
		</div>
	) : (
		<MovieList
			link="/trending"
			movies={popularMovies || []}
			title="Popular movies"
		/>
	);
};

export default PopularMovies;
