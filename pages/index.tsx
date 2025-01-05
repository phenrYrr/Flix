import type { NextPage } from 'next'
import Home from '@/components/screens/home/Home'

const HomePage: NextPage<IHome> = (props) => {
	return <Home {...props} />
}

export default HomePage
