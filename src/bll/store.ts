import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userSlice } from 'bll/user-slice';
import { filterSlice } from './filter-slice';
import { apiSlice } from '../dal/api/api-slice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware).prepend(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
