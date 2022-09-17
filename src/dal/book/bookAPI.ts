import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ALL, GENRE } from '../../utils/constants/endpointConstants';

interface IGenre {
  id: number;
  name: string;
}

export const bookAPI = createApi({
  reducerPath: 'book',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.BACKEND_URL || 'http://localhost:4000',
    credentials: 'include',
    prepareHeaders: (headers) => {
      headers.set('Access-Control-Allow-Origin', process.env.BACKEND_URL || 'http://localhost:4000');
      return headers;
    },
    mode: 'cors',
  }),
  endpoints: (build) => ({
    allGenre: build.query<IGenre[], void>({
      query: () => ({
        url: `/${GENRE}/${ALL}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useAllGenreQuery } = bookAPI;
