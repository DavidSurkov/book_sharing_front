import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { UNAUTHORISED_ERROR_STATUS } from '../../utils/constants/errorConatants';
import { AUTH, CHECK, REFRESH } from '../../utils/constants/endpointConstants';
import { signInUser, signOutUser } from '../../bll/user-slice';
import { IUser } from '../auth/authAPI';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.BACKEND_URL || 'http://localhost:4000',
  credentials: 'include',
  prepareHeaders: (headers) => {
    headers.set('Access-Control-Allow-Origin', process.env.BACKEND_URL || 'http://localhost:4000');
    return headers;
  },
  mode: 'cors',
});

const baseQueryWithReauthorise: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  arg,
  api,
  extraOptions,
) => {
  const result = await baseQuery(arg, api, extraOptions);
  if (result.error && result.error.status === UNAUTHORISED_ERROR_STATUS) {
    const refreshResult = await baseQuery(`/${AUTH}/${REFRESH}`, api, extraOptions);
    if (!refreshResult.error) {
      const checkResult = await baseQuery(`/${AUTH}/${CHECK}`, api, extraOptions);
      await baseQuery(arg, api, extraOptions);
      console.log('signIn');
      api.dispatch(signInUser(checkResult.data as IUser));
    } else {
      console.log('signOut');
      api.dispatch(signOutUser());
    }
  }
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauthorise,
  tagTypes: ['Book'],
  endpoints: () => ({}),
});
