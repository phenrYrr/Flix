import { ChangeEvent, FC } from 'react';
import MaterialIcon from '../MaterialIcon';
import styles from './SearchField.module.scss';

interface ISearchField {
	searchTerm?: string;
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchTerm }) => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input
				placeholder="Search"
				value={searchTerm}
				onChange={handleSearch}
			/>
		</div>
	);
};

export default SearchField;
