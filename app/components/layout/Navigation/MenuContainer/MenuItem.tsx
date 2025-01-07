import cn from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import MaterialIcon from '@/components/ui/MaterialIcon'
import styles from './Menu.module.scss'
import { IMenuItem } from './menu.interface'
import { TypeMaterialIcons } from '@/shared/types/icon.types'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li
			className={cn({
				[styles.active]: asPath === item.link,
			})}
		>
			<Link href={item.link}>
				<MaterialIcon name={item.icon as TypeMaterialIcons} />
				<span>{item.title}</span>
			</Link>
		</li>
	)
}

export default MenuItem
