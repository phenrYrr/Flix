import { FC } from 'react';
import styles from './Sidebar.module.scss';
import SearchField from '@/components/ui/search-field/SearchField';

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<SearchField />
		</div>
	);
};

export default Sidebar;
