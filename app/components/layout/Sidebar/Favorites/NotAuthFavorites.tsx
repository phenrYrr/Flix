import { FC } from 'react';
import styles from './NotAuthFavorites.module.scss';

const NotAuthFavorites: FC = () => {
	return (
		<div className={styles.notAuth}>
			Viewing selected films is available only to authorized users!
		</div>
	);
};

export default NotAuthFavorites;
