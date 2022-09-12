import { createSlice } from '@reduxjs/toolkit';

const initState = {};

const appSlice = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {},
});

export const userReducer = appSlice.reducer;
