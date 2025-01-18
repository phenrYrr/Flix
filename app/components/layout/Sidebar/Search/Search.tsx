import { FC } from 'react';
import { useSearch } from './useSearch';
import styles from './Search.module.scss';
import SearchList from './SearchList/SearchList';
import SearchField from '@/components/ui/search-field/SearchField';

const Search: FC = () => {
	const { data, handleSearch, isSuccess, search } = useSearch();

	return (
		<div className={styles.wrapper}>
			<SearchField
				handleSearch={handleSearch}
				searchTerm={search}
			/>
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	);
};

export default Search;
