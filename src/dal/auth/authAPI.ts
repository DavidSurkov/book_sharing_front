import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH, LOGIN, REGISTER } from '../../utils/constants/endpointConstants';

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
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000' }),
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
  }),
});

export const { useSignUpMutation, useSignInMutation } = authApi;
