import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth } from '../../JS/API';

export const logIn = createAsyncThunk('user/logIn', async credentials => {
  try {
    return await auth(credentials);
  } catch (err) {
    throw err.response.data.message;
  }
});
