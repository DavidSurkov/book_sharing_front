import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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

type PayloadType = {
  id: number;
  name: string;
  email: string;
};

const appSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signInUser: (state, { payload }: PayloadAction<PayloadType>): UserStateType => {
      return { ...payload, isAuthorised: true };
    },
    signOutUser: () => initialState,
  },
});

export const userSlice = appSlice.reducer;
export const { signInUser, signOutUser } = appSlice.actions;
