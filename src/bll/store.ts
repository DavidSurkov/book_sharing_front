import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { appReducer } from './app-reducer';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunk),
});
