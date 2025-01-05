import { useRouter } from 'next/router'
import Link from 'next/link'
import { FC } from 'react'
import { IMenuItem } from './menu.interface'
import MaterialIcon from '@/components/ui/MaterialIcons'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	const { asPath } = useRouter()

	return (
		<li>
			<Link href={item.link}>
				<a>
					<MaterialIcon name={item.icon} />
					<span>{item.title}</span>
				</a>
			</Link>
		</li>
	)
}

export default MenuItem
