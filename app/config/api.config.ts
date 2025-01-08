export const API_URL = `${process.env.MOVIES_API_URL}`

export const getMovies = (string: string) => `v1.4/movie${string}`