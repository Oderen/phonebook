import { configureStore } from '@reduxjs/toolkit';

import { filterSlice } from './slices/filterSlice';
import { phonebookSlice } from './slices/phonebookSlice';

export const store = configureStore({
  reducer: {
    contacts: phonebookSlice.reducer,
    filter: filterSlice.reducer,
  },
});
