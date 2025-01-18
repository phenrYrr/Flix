import { FC } from 'react';
import styles from './Sidebar.module.scss';
import MoviesContainer from './MoviesContainer/MoviesContainer';
import Search from './Search/Search';

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			<MoviesContainer />
		</div>
	);
};

export default Sidebar;
