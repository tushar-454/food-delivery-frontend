import { configureStore } from '@reduxjs/toolkit';
import publicStatesReducers from '../features/publicState/publicStateSlices';

const store = configureStore({
  reducer: {
    publicStates: publicStatesReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
