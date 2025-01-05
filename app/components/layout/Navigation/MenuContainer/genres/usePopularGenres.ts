import { GenreServices } from '@/services/genre.services'
import {useQuery} from '@tanstack/react-query'

export const usePopularGenres = () => {

    const queryData = useQuery('popular genre menu', () => GenreServices.getPopularGenres(), {
        select: ({data}) => data.map((genre) => ({
            icon: genre.icon,
            link: 
        }))
    })

    return queryData
}
