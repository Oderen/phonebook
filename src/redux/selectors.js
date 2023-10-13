export const selectContacts = state => state.contacts.items;
export const selectFilterQuery = state => state.filter;
export const selectIsError = state => state.contacts.error;
export const selectIsLoading = state => state.contacts.isLoading;
