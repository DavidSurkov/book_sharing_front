import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userReducer } from './user-reducer';
import { authApi } from '../dal/auth/authAPI';
import { bookAPI } from '../dal/book/bookAPI';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [authApi.reducerPath]: authApi.reducer,
    [bookAPI.reducerPath]: bookAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(bookAPI.middleware).prepend(thunk),
});
