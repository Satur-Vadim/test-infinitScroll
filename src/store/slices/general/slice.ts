import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 'test',
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {},
});

export default generalSlice.reducer;
