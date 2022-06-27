import { createSlice } from '@reduxjs/toolkit';
import { logIn } from './userOperations';

const initialState = {
  user: { name: null, avatar: null, id: null },
  token: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [logIn.fulfilled](state, { payload }) {
      const { id, name, avatar } = payload;
      state.user = { name, avatar, id };
      state.isLoggedIn = true;
    },
  },
});
