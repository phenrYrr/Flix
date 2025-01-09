import { FC } from 'react'
import MaterialIcon from '../MaterialIcon'
import styles from './SearchField.module.scss'

const SearchField: FC = () => {
	return (
		<div className={styles.search}>
			<MaterialIcon name="MdSearch" />
			<input placeholder="Search" type="text" />
		</div>
	)
}

export default SearchField
