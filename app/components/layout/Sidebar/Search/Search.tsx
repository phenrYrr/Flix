import { ChangeEvent, FC, useEffect } from 'react';
import { useSearch } from './useSearch';
import styles from './Search.module.scss';
import SearchList from './SearchList/SearchList';
import SearchField from '@/components/ui/search-field/SearchField';
import { useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import { useQuery } from '@tanstack/react-query';
import { MovieServices } from '@/services/movie.services';

const Search: FC = () => {
	const [searchTerm, setIsSearchTerm] = useState('');
	const debounceSearch = useDebounce(searchTerm, 500);

	const { isSuccess, data: movies } = useQuery({
		queryKey: ['get movies', debounceSearch],
		queryFn: () => MovieServices.getAll(debounceSearch),
		select: ({ data }) => data,
		enabled: !!debounceSearch,
	});

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setIsSearchTerm(e.target.value);
	};

	return (
		<div className={styles.wrapper}>
			<SearchField
				handleSearch={handleSearch}
				searchTerm={searchTerm}
			/>
			{isSuccess && <SearchList movies={movies || []} />}
		</div>
	);
};

export default Search;
