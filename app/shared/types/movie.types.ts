import { TypeMaterialIcons } from './icon.types'

export interface IList {
	name: string
	slug: string
}

export interface IParameters {
	year: number
	duration: number
	country: string
}

export interface IActor {
	id: number,
  name: string,
  enName: string,
  photo: string,
  sex: string,
  growth: number,
  birthday: string,
  death: string,
  age: number,
}

export interface IMovie {
	_id: string
	poster: string
	bigPoster: string
	title: string
	parameters: IParameters
	genres: IList[]
	actors: IActor[]
	countOpened: number
	videoUrl: string
	rating: number
	slug: string
}
