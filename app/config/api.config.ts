export const API_URL = `${process.env.API_URL}`;
export const API_KEY = `${process.env.API_KEY}`;

export const getAuthUrl = (string: string) => `/auth/${string}`;
export const getUserUrl = (string: string) => `/users/${string}`;
export const getMoviesUrl = (string: string) => `/movies/${string}`;
export const getListUrl = (string: string) => `/genres/${string}`;
export const getActorsUrl = (string: string) => `/actors/${string}`;
export const getRatingUrl = (string: string) => `/rating/${string}`;
