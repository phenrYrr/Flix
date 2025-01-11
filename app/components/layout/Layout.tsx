import { FC } from 'react';
import Navigation from './Navigation/Navigation';
import Sidebar from './Sidebar/Sidebar';
import styles from './Layout.module.scss';
import { ILayout } from './Layout.interface';

const Layout: FC<ILayout> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Navigation />
			<div className={styles.center}>{children}</div>
			<Sidebar />
		</div>
	);
};

export default Layout;
