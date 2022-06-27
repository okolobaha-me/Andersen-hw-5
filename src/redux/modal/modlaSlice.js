import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from '../user/userOperations';

const initialState = { content: null };

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal(state, { payload }) {
      state.content = payload;
    },
    closeModal(state) {
      state.content = null;
    },
  },
  extraReducers: {
    [logIn.fulfilled](state) {
      state.content = null;
    },
    [register.fulfilled](state) {
      state.content = null;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
