import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { AUTH, CHECK, LOGIN, LOGOUT, REFRESH, REGISTER } from 'utils/constants/endpointConstants';
import { signInUser, signOutUser } from 'bll/user-slice';

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

export const authAPI = createApi({
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
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(signInUser(data));
        } catch {
          dispatch(signOutUser());
        }
      },
    }),

    signOut: build.mutation<void, void>({
      query: () => ({
        url: `/${AUTH}/${LOGOUT}`,
        method: 'POST',
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(signOutUser());
        } catch {}
      },
    }),

    authorise: build.query<IUser, void>({
      queryFn: async (args, { dispatch }, extraOptions, baseQuery) => {
        try {
          let result = await baseQuery(`/${AUTH}/${CHECK}`);
          if (result.error && result.error.status === 401) {
            const refreshResult = await baseQuery(`/${AUTH}/${REFRESH}`);
            if (!refreshResult.error) {
              result = await baseQuery(`/${AUTH}/${CHECK}`);
              dispatch(signInUser(result.data as IUser));
              return { data: result.data as IUser };
            } else {
              dispatch(signOutUser());
              return { error: refreshResult.error };
            }
          } else {
            dispatch(signInUser(result.data as IUser));
            return { data: result.data as IUser };
          }
        } catch (error) {
          dispatch(signOutUser());
          return { error: error as FetchBaseQueryError };
        }
      },
    }),
  }),
});

export const { useSignUpMutation, useSignInMutation, useSignOutMutation, useAuthoriseQuery } = authAPI;
