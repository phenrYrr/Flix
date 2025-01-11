import { API_URL, getMoviesUrl } from "@/config/api.config"
import { IMovie } from "@/shared/types/movie.types"
import { axiosClassic } from "api/interceptors"

export const MovieServices = {
    async getAll(searchTerm?: string) {
        return await axiosClassic.get<IMovie[]>(getMoviesUrl(`${API_URL}v1.4/movies`), {
            params: searchTerm ? {
                searchTerm
            } : {}
        })
    }
}
