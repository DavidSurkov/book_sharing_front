import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH, CHECK, LOGIN, LOGOUT, REGISTER } from '../../utils/constants/endpointConstants';

interface ISignUpRes {
  id: number;
  name: string;
  email: string;
}

interface ISignUpReq {
  name: string;
  email: string;
  password: string;
}

interface ISignInRes {
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
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000', credentials: 'include' }),
  endpoints: (build) => ({
    signUp: build.mutation<ISignUpRes, ISignUpReq>({
      query: (body) => ({
        url: `/${AUTH}/${REGISTER}`,
        method: 'POST',
        body,
      }),
      transformResponse: (baseQueryReturnValue: ISignUpRes) => baseQueryReturnValue,
    }),
    signIn: build.mutation<ISignInRes, ISignInReq>({
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
    authorise: build.query<void, void>({
      query: () => ({
        url: `/${AUTH}/${CHECK}`,
        method: 'GET',
      }),
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useAuthoriseQuery } = authApi;
