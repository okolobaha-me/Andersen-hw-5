import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { getDefaultMiddleware, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './user/userSlice';
import { requestErrorSlice } from './requestError/requestErrorSlice';
import { modalSlice } from './modal/modlaSlice';
import { isSubmittingSlice } from './isSubmitting/isSubmittingSlice';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    requestError: requestErrorSlice.reducer,
    modal: modalSlice.reducer,
    isSubmitting: isSubmittingSlice.reducer,
  },
  middleware,
});
