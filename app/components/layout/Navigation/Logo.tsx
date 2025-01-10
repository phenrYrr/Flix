import Link from 'next/link'
import { FC } from 'react'
import Image from 'next/image'
import logoImage from '@/assets/images/logo.svg'

const Logo: FC = () => {
	return (
		<div className="px-layout mb-10 block">
			<Link href={'/'}>
			<Image
				src={logoImage}
				width={140}
				height={40}
				alt="Online cinema"
				draggable={false}
				priority
			/>
		</Link>
		</div>
	)
}

export default Logo
