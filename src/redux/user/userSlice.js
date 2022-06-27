import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from './userOperations';
import { tokenOptions } from '../../JS/API';

const initialState = {
  user: { name: null, avatar: null, id: null },
  token: null,
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut(state) {
      state.user = initialState.user;
      state.token = null;
      state.isLoggedIn = false;
      tokenOptions.unset();
    },
  },
  extraReducers: {
    [logIn.fulfilled](state, { payload }) {
      const { id, name, avatar } = payload;
      state.user = { name, avatar, id };
      state.isLoggedIn = true;
      state.token = window.localStorage.getItem('token');
    },
    [register.fulfilled](state, { payload }) {
      const { id, name, avatar } = payload;
      state.user = { name, avatar, id };
      state.isLoggedIn = true;
      state.token = window.localStorage.getItem('token');
    },
  },
});

export const { logOut } = userSlice.actions;
