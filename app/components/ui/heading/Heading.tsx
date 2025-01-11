import { FC } from 'react';
import { IHeading } from './heading.interface';
import styles from './Heading.module.scss';

const Heading: FC<IHeading> = ({ title, className }) => {
	return (
		<h1
			className={`${styles.heading} ${className?.includes('xl') ? '' : 'text-3xl'}`}
		>
			{title}
		</h1>
	);
};

export default Heading;
