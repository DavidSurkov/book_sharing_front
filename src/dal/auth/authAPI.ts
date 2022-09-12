import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AUTH, REGISTER } from '../../utils/constants/endpointConstants';

interface ISignUpRes {
  name: string;
  email: string;
  id: number;
}

interface ISignUpReq {
  name: string;
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
  }),
});

export const { useSignUpMutation } = authApi;
