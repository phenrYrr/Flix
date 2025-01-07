export interface IMenuItem {
	icon: string
	link: string
	title: string
}

export interface IMenu {
	title: string
	items: IMenuItem[]
}
