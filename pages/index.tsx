import type { NextPage } from 'next'
import Home from '@/components/screens/home/Home'
import { IHome } from '@/components/screens/home/home.interface'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export default HomePage
