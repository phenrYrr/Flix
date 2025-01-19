import { MovieServices } from "@/services/movie.services";
import { useQuery } from "@tanstack/react-query";
import { NextPage } from "next";

const TrendingPage: NextPage = () => {

    const {data: trendingMovie} = useQuery({
        queryKey: ['popular movie'],
        queryFn: () => MovieServices.getMostPopularMovies()
    })

    return <div></div>
}

export default TrendingPage