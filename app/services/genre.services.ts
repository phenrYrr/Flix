import axios from 'axios'
import { API_URL, getListUrl } from '@/config/api.config'
import { IList } from '@/shared/types/movie.types'

export const ListInfoServices = {
	async getListInfo() {
		await axios.get<IList[]>(getListUrl(`${API_URL}v1/movie/possible-values-by-field`))
	},
}
