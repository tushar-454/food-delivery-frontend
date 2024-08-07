import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/auth/authSlices';
import publicStatesReducers from '../features/publicState/publicStateSlices';

const store = configureStore({
  reducer: {
    publicStates: publicStatesReducers,
    auth: authReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
