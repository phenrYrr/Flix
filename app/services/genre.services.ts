import axios from "axios"

export const GenreServices = {
    async getPopularGenres(limit = 4) {
        await axios.get<IGenre[]>()
    }
}