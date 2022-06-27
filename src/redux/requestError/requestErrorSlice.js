import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from '../user/userOperations';
import { closeModal } from '../modal/modlaSlice';

const initialState = { message: null };

export const requestErrorSlice = createSlice({
  name: 'requestError',
  initialState,
  reducers: {
    removeError(state) {
      state.message = null;
    },
  },
  extraReducers: {
    [logIn.rejected](state, { error }) {
      state.message = error.message;
    },
    [logIn.fulfilled](state) {
      state.message = null;
    },
    [register.rejected](state, { error }) {
      state.message = error.message;
    },
    [register.fulfilled](state) {
      state.message = null;
    },
    [closeModal](state) {
      state.message = null;
    },
  },
});

export const { removeError } = requestErrorSlice.actions;
