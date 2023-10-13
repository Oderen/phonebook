import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filter(state, action) {
      return (state = action.payload);
    },
  },
});
