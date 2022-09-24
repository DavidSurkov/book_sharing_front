import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ALL, BOOK, GENRE } from '../../utils/constants/endpointConstants';
import { IUser } from '../auth/authAPI';

export interface IGenre {
  id: number;
  name: string;
}
interface IBook {
  id: number;
  poster: {
    id: number;
    url: string;
    key: string;
  };
  file: {
    id: number;
    url: string;
    key: string;
  };
  title: string;
  author: string;
  year: number;
  genres: IGenre[];
  description: string;
  created_at: Date;
  user: IUser;
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
  tagTypes: ['Book'],
  endpoints: (build) => ({
    allGenre: build.query<IGenre[], void>({
      query: () => ({
        url: `/${GENRE}/${ALL}`,
        method: 'GET',
      }),
    }),
    postBook: build.mutation<IBook, FormData>({
      query: (arg) => ({
        url: `/${BOOK}`,
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: () => ['Book'],
    }),
    getAllBooks: build.query<IBook[], void>({
      query: () => ({
        url: `/${BOOK}/${ALL}`,
        method: 'GET',
      }),
      providesTags: () => ['Book'],
    }),
    geyOneBook: build.query<IBook, string | undefined>({
      query: (id) => ({
        url: `/${BOOK}/${id}`,
        method: 'GET',
      }),
      providesTags: () => ['Book'],
    }),
    deleteBook: build.mutation<void, number | undefined>({
      query: (id) => ({
        url: `/${BOOK}/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: () => ['Book'],
    }),
  }),
});

export const { useAllGenreQuery, usePostBookMutation, useGetAllBooksQuery, useGeyOneBookQuery, useDeleteBookMutation } =
  bookAPI;
