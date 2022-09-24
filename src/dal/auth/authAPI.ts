import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH, CHECK, LOGIN, LOGOUT, REGISTER } from '../../utils/constants/endpointConstants';

interface ISignUpReq {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
}

interface ISignInReq {
  email: string;
  password: string;
}

export const authApi = createApi({
  reducerPath: 'auth',
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
    signUp: build.mutation<IUser, ISignUpReq>({
      query: (body) => ({
        url: `/${AUTH}/${REGISTER}`,
        method: 'POST',
        body,
      }),
      transformResponse: (baseQueryReturnValue: IUser) => baseQueryReturnValue,
    }),
    signIn: build.mutation<IUser, ISignInReq>({
      query: (body) => ({
        url: `/${AUTH}/${LOGIN}`,
        method: 'POST',
        body,
      }),
    }),
    signOut: build.mutation<void, void>({
      query: () => ({
        url: `/${AUTH}/${LOGOUT}`,
        method: 'POST',
      }),
    }),
    authorise: build.query<IUser, void>({
      query: () => ({
        url: `/${AUTH}/${CHECK}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useAuthoriseQuery } = authApi;
