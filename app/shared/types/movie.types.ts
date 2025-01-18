export interface IListParameters {
	name: string;
	slug: string;
}

export interface IParameters {
	year: number;
	duration: number;
	country: string;
}

export interface IActor {
	id: number;
	name: string;
	enName: string;
	photo: string;
	sex: string;
	growth: number;
	birthday: string;
	death: string;
	age: number;
	birthPlace: Array<{ value: string }>;
	deathPlace: Array<{ value: string }>;
	spouses: Array<{
		id: number;
		name: string;
		divorced: boolean;
		divorcedReason: string;
		sex: string;
		children: number;
		relation: string;
	}>;
	countAwards: number;
	profession: Array<{ value: string }>;
	facts: Array<{ value: string }>;
	movies: Array<{
		id: number;
		name: string;
		alternativeName: string;
		rating: number;
		general: boolean;
		description: string;
		enProfession: string;
	}>;
}

export interface IMovie {
	id: number;
	slug: string;
	name: string;
	alternativeName: string;
	enName: string;
	names: Array<{
		name: string;
		language: string;
		type: string;
	}>;
	type: string;
	year: number;
	description: string;
	shortDescription: string;
	slogan: string;
	status: string;
	facts: Array<{
		value: string;
		type: string;
		spoiler: boolean;
	}>;
	rating: {
		kp: number;
		imdb: number;
		tmdb: number;
		filmCritics: number;
		russianFilmCritics: number;
		await: number;
	};
	movieLength: number;
	ageRating: number;
	logo: {
		url: string;
	};
	poster: {
		url: string;
		previewUrl: string;
	};
	videos: {
		trailers: Array<{
			url: string;
			name: string;
			site: string;
			size: number;
			type: string;
		}>;
	};
	genres: Array<{
		name: string;
	}>;
	countries: Array<{
		name: string;
	}>;
	persons: Array<{
		id: number;
		photo: string;
		name: string;
		enName: string;
		description: string;
		profession: string;
		enProfession: string;
	}>;
	seasonsInfo: Array<{
		number: number;
		episodesCount: number;
	}>;
	budget: {
		value: number;
		currency: string;
	};
	fees: {
		world: {
			value: number;
			currency: string;
		};
		russia: {
			value: number;
			currency: string;
		};
		usa: {
			value: number;
			currency: string;
		};
	};
	premiere: {
		country: string;
		world: string;
		russia: string;
		digital: string;
		cinema: string;
		bluray: string;
		dvd: string;
	};
	releaseYears: Array<{
		start: number;
		end: number;
	}>;
	top10: number;
	top250: number;
	ticketsOnSale: boolean;
	totalSeriesLength: number;
	seriesLength: number;
	isSeries: boolean;
	audience: Array<{
		count: number;
		country: string;
	}>;
}

export interface IMovieList {
	title: string;
	link: string;
	movies: IMovie[];
}
