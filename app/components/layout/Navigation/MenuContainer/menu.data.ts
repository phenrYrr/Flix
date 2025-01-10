import { link } from 'fs'
import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{
			icon: 'MdHome',
			link: '/',
			title: 'Home',
		},
		{
			icon: 'MdExplore',
			link: '/genres',
			title: 'Discovery',
		},
		{
			icon: 'MdRefresh',
			link: '/fresh',
			title: 'Fresh movies',
		},
		{
			icon: 'MdLocalFireDepartment',
			link: '/trending',
			title: 'Trending now',
		},
	],
}

export const secondMenu: IMenu = {
	title: "Popular genres",
	items: [
		{
			icon: "MdTagFaces",
			link: "/comedy",
			title: "Comedy"
		},
		{
			icon: "MdFamilyRestroom",
			link: "/cartoons",
			title: "Cartoons"
		},
		{
			icon: "MdAutoFixHigh",
			link: "/fantasy",
			title: "Fantasy"
		},
		{
			icon: 'MdOutlineFace',
			link: '/biography',
			title: 'Biography'
		}
	]
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}
