import { createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteCart, updateCart } from '../../api/cart';
import { CartSliceinitialStateType } from '../../types/cartSlicesTypes';

const initialState: CartSliceinitialStateType = {
  isLoading: false,
  isError: false,
  cart: { userId: '', image: '', name: '', price: 0, quantity: 0, total: 0 },
};

const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addToCart.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addToCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.cart = payload;
      })
      .addCase(addToCart.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(updateCart.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateCart.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.cart = payload;
      })
      .addCase(updateCart.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteCart.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.cart = { userId: '', image: '', name: '', price: 0, quantity: 0, total: 0 };
      });
  },
});

export default cartSlices.reducer;
