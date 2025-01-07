import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { IHome } from './home.interface'
import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="Watch TV Shows online"
			description="Watch MovieApp movies and TV shows online or stream right tp your browser."
		>
			Home page
		</Meta>
	)
}

export default Home
