import Layout from '@/components/layout/Layout'
import { FC } from 'react'
import { IMainProvider } from './MainProvider.interface'

const MainProvider: FC<IMainProvider> = ({ children }) => {
	return <Layout>{children}</Layout>
}

export default MainProvider
