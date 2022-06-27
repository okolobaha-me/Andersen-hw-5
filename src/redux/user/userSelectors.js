export const getIsLoggedIn = state => state.user.isLoggedIn;

export const getUserData = state => state.user.user;

export const getUserId = state => getUserData(state).id;
