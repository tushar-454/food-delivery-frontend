import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/auth/authSlices';
import categoriseReducers from '../features/categorise/categoriseSlices';
import publicStatesReducers from '../features/publicState/publicStateSlices';

const store = configureStore({
  reducer: {
    publicStates: publicStatesReducers,
    auth: authReducers,
    categorise: categoriseReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
