import { createAsyncThunk } from '@reduxjs/toolkit';
import { auth, registerUser } from '../../JS/API';

export const logIn = createAsyncThunk('user/logIn', async credentials => {
  try {
    return await auth(credentials);
  } catch (err) {
    throw err.response.data.message;
  }
});

export const register = createAsyncThunk('user/register', async credentials => {
  try {
    const data = await registerUser(credentials);
    await auth(credentials);
    return data;
  } catch (err) {
    throw err.response.data.message[0];
  }
});
