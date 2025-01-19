import { FC } from 'react';
import styles from './SearchList.module.scss';
import { IMovie } from '@/shared/types/movie.types';
import Link from 'next/link';
import { getMovieUrl } from '@/config/url.config';
import Image from 'next/image';

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
	return (
		<div className={styles.list}>
			{movies.map((movie) => (
				<Link
					key={movie.id}
					href={`movie/${movie.slug}`}
				>
					<Image
						src={movie.poster.previewUrl}
						width={50}
						height={50}
						alt={movie.name || movie.alternativeName}
						objectFit="cover"
						objectPosition="top"
						draggable={false}
					/>
				</Link>
			))}{' '}
			: (<div>Movies not found!</div>)
		</div>
	);
};

export default SearchList;
