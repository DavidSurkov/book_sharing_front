import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

type UserStateType = {
  isAuthorised: boolean;
  id: undefined | number;
  name: undefined | string;
  email: undefined | string;
};

const initialState: UserStateType = {
  isAuthorised: false,
  id: undefined,
  name: undefined,
  email: undefined,
};

export type PayloadType = {
  id: number;
  name: string;
  email: string;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state, { payload }: PayloadAction<PayloadType>): UserStateType => {
      return { ...payload, isAuthorised: true };
    },
    signOutUser: () => initialState,
  },
});

export const userPersistedReducer = persistReducer({ key: 'user', storage }, userSlice.reducer);

export const { signInUser, signOutUser } = userSlice.actions;
