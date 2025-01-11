import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';
import logoImage from '@/assets/images/logo.svg';
import styles from './Logo.module.scss';

const Logo: FC = () => {
	return (
		<Link
			href={'/'}
			className={styles.logo}
		>
			<Image
				src={logoImage}
				width={120}
				height={60}
				alt="Online cinema"
				draggable={false}
				priority
			/>
		</Link>
	);
};

export default Logo;
