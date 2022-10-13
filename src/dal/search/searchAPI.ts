import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTHOR, FILTER, GENRE, TITLE, YEAR } from '../../utils/constants/endpointConstants';

export const searchAPI = createApi({
  reducerPath: 'search',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL || 'http://localhost:4000',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', process.env.BACKEND_URL || 'http://lockalhost:4000');
      return headers;
    },
    mode: 'cors',
  }),
  endpoints: (build) => ({
    filteredTitle: build.query<void, string>({
      query: () => ({
        url: `/${FILTER}/${TITLE}`,
        method: 'GET',
      }),
    }),
    filteredAuthor: build.query<void, string>({
      query: () => ({
        url: `/${FILTER}/${AUTHOR}`,
        method: 'GET',
      }),
    }),
    filteredGenre: build.query<void, number>({
      query: () => ({
        url: `/${FILTER}/${GENRE}`,
        method: 'GET',
      }),
    }),
    filteredYear: build.query<void, number>({
      query: () => ({
        url: `/${FILTER}/${YEAR}`,
        method: 'GET',
      }),
    }),
  }),
});
