import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { userSlice } from 'bll/user-slice';
import { authAPI } from 'dal/auth/authAPI';
import { bookAPI } from 'dal/book/bookAPI';
import { filterSlice } from './filter-slice';
import { searchAPI } from 'dal/search/searchAPI';

export const store = configureStore({
  reducer: {
    user: userSlice,
    filter: filterSlice,
    [authAPI.reducerPath]: authAPI.reducer,
    [bookAPI.reducerPath]: bookAPI.reducer,
    [searchAPI.reducerPath]: searchAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authAPI.middleware)
      .concat(bookAPI.middleware)
      .concat(searchAPI.middleware)
      .prepend(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
