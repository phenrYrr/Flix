import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'
import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<Link href={'/'} className="px-layout mb-10 block">
			<Image
				src={logoImage}
				width={160}
				height={60}
				alt="Online cinema"
				draggable={false}
			/>
		</Link>
	)
}

export default Logo
