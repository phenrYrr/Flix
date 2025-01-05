import { FC } from "react";
import { usePopularGenres } from "./usePopularGenres";

const GenreMenu: FC = () => {
    const {isLoading, data, error} = usePopularGenres('', () => {

    })
}