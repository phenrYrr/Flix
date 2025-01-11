import { FC } from 'react';
import { ISeo } from './meta.interface';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { titleMerge } from '@/config/seo.config';
import { onlyText } from '../string/clearText';
import { siteName } from '@/config/seo.config';
import logoImage from '@/assets/images/logo.svg';

const Meta: FC<ISeo> = ({ description, image, title, children }) => {
	const { asPath } = useRouter();
	const currentUrl = `${process.env.APP_URL}${asPath}`;

	return (
		<>
			<Head>
				<title itemProp="headline">{titleMerge(title)}</title>
				{description ? (
					<>
						<title itemProp="headline">{titleMerge(title)}</title>
						<meta
							itemProp="description"
							name="description"
							content={onlyText(description, 152)}
						/>
						<link
							rel="canonical"
							href={currentUrl}
						/>
						<meta
							property="og:locale"
							content="en"
						/>
						<meta
							property="og:title"
							content={titleMerge(title)}
						/>
						<meta
							property="og:url"
							content={currentUrl}
						/>
						<meta
							property="og:image"
							content={image || logoImage}
						/>
						<meta
							property="og:site_name"
							content={siteName}
						/>
						<meta
							property="og:description"
							content={onlyText(description, 197)}
						/>
					</>
				) : (
					<meta
						name="robots"
						content="noindex, nofollow"
					/>
				)}
			</Head>
			{children}
		</>
	);
};

export default Meta;
