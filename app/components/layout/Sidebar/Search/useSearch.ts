import { useDebounce } from "@/hooks/useDebounce";
import { MovieServices } from "@/services/movie.services";
import { IMovie } from "@/shared/types/movie.types";
import { useQuery } from "@tanstack/react-query";
import { ChangeEvent, useState } from "react";

// interface Movie {
//     _id: string
//     title: string
//     [key: string]: any
// }

// interface UseSearchResult {
//     isSuccess: boolean
//     handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
//     data: Movie[] | undefined
// }

export const useSearch = () => {
    const [search, setSearch] = useState('');
    const debounce = useDebounce(search, 500);

    const { isSuccess, data } = useQuery({
        queryKey: ['search movies', debounce],
        queryFn: () => MovieServices.getAll(debounce),
        enabled: !!debounce, 
        select: (response) => response.data as IMovie[],
    });

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    };

    return {isSuccess, handleSearch, data, search};
};
