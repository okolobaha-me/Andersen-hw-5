import { createSlice } from '@reduxjs/toolkit';
import { logIn, register } from '../user/userOperations';

export const isSubmittingSlice = createSlice({
  name: 'isSubmittingSlice',
  initialState: { status: false },
  extraReducers: {
    [logIn.pending](state) {
      state.status = true;
    },
    [logIn.fulfilled](state) {
      state.status = false;
    },
    [logIn.rejected](state) {
      state.status = false;
    },
    [register.pending](state) {
      state.status = true;
    },
    [register.fulfilled](state) {
      state.status = false;
    },
    [register.rejected](state) {
      state.status = false;
    },
  },
});
