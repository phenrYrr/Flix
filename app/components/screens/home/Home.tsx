import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { IHome } from './home.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/ui/heading/Heading'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch TV Shows online"
			description="Watch MovieApp movies and TV shows online or stream right tp your browser."
		>
			<Heading
				title="ALL THE TV YOU LOVE"
				className="text-gray-500 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
