export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectUser = state => state.auth.user;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectError = (state) => state.contacts.error;
export const selectLoading = (state) => state.contacts.loading;