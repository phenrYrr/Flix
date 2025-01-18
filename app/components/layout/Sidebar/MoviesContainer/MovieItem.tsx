import { FC } from 'react';
import { IMovie } from '@/shared/types/movie.types';
import styles from './MovieItem.module.scss';
import Link from 'next/link';
import { getGenreUrl, getMovieUrl } from '@/config/url.config';
import Image from 'next/image';
import { getGenresList } from '@/utils/movie/getGenresList';
import MaterialIcon from '@/components/ui/MaterialIcon';

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
	return (
		<div className={styles.item}>
			<Link href={getMovieUrl(movie.slug)}>
				<Image
					width={65}
					height={97}
					alt={movie.name}
					src={movie.poster.previewUrl}
					draggable={false}
					priority
				/>
			</Link>
			<div className={styles.info}>
				<div className={styles.title}>
					{movie.alternativeName || movie.enName || movie.name}
				</div>
				<div className={styles.genres}>
					{movie.genres.map((genre, index) => (
						<Link
							key={genre.name}
							href={getGenreUrl(genre.name)}
						>
							{getGenresList(
								index,
								movie.genres.length,
								genre.name,
							)}
						</Link>
					))}
				</div>
			</div>
			<div className={styles.rating}>
				<MaterialIcon name="MdStarRate" />
				<span>{movie.rating.tmdb.toFixed(1)}</span>
			</div>
		</div>
	);
};

export default MovieItem;
