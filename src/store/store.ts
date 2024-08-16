import { configureStore } from '@reduxjs/toolkit';
import authReducers from '../features/auth/authSlices';
import cartReducers from '../features/cart/cartSlices';
import categoriseReducers from '../features/categorise/categoriseSlices';
import foodReducers from '../features/food/foodSlices';
import orderReducers from '../features/order/orderSlices';
import publicStatesReducers from '../features/publicState/publicStateSlices';

const store = configureStore({
  reducer: {
    publicStates: publicStatesReducers,
    auth: authReducers,
    categorise: categoriseReducers,
    food: foodReducers,
    cart: cartReducers,
    order: orderReducers,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
