export const getMovieUrl = (slug: string) => `/movie/${slug}`
export const getActorsUrl = (slug: string) => `/actor/${slug}`
export const getGenreUrl = (slug: string) => `/genre/${slug}`

export const getAdminUrl = (url: string) => `/manage/${url}`
export const getAdminHomeUrl = () => getAdminUrl('').slice(0, -1)