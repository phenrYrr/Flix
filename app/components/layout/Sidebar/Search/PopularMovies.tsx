import SkeletonLoader from '@/components/ui/SkeletonLoader';
import { MovieServices } from '@/services/movie.services';
import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import SearchList from './SearchList/SearchList';

const PopularMovies: FC = () => {
	const { isLoading, data: popularMovies } = useQuery({
		queryKey: ['popular movies'],
		queryFn: () => MovieServices.getMovies(),
	});

	return isLoading ? (
		<SkeletonLoader count={3} />
	) : (
		<SearchList movies={popularMovies || []} />
	);
};

export default PopularMovies;
