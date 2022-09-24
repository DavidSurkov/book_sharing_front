import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userSlice } from './user-slice';
import { authApi } from '../dal/auth/authAPI';
import { bookAPI } from '../dal/book/bookAPI';

export const store = configureStore({
  reducer: {
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
    [bookAPI.reducerPath]: bookAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(bookAPI.middleware).prepend(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
