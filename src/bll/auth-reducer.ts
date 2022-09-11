import { createSlice } from '@reduxjs/toolkit';

const initState = {};

const appSlice = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {},
});

export const authReducer = appSlice.reducer;
