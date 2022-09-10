import { createSlice } from '@reduxjs/toolkit';

const initState = {};

const appSlice = createSlice({
  name: 'app',
  initialState: initState,
  reducers: {},
});

export const appReducer = appSlice.reducer;
