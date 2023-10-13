import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from '../ApiOperations';

export const phonebookSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], error: null, isLoading: false },
  extraReducers: builder => {
    builder
      // FetchContacts
      .addCase(fetchContacts.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(fetchContacts.fulfilled, (_, action) => {
        return {
          isLoading: false,
          error: null,
          items: action.payload,
        };
      })
      .addCase(fetchContacts.rejected, state => {
        return {
          ...state,
          error: true,
        };
      })
      // AddContact
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        state.items = [...state.items, payload];
      })
      .addCase(addContact.rejected, state => {
        state.error = true;
        state.items = [...state.items];
        state.isLoading = false;
      })
      // DeleteContact
      .addCase(deleteContact.pending, state => {
        return { ...state, isLoading: true };
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        return {
          isLoading: false,
          error: null,
          items: state.items.filter(contact => contact._id !== action.payload),
        };
      })
      .addCase(deleteContact.rejected, state => {
        return {
          ...state,
          error: true,
        };
      })
      .addDefaultCase(state => {
        return state;
      });
  },
});

export const { add, remove } = phonebookSlice.actions;
