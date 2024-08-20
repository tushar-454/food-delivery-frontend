import { createSlice } from '@reduxjs/toolkit';
import { addToCart, deleteCart, getCarts, updateCart } from '../../api/cart';
import { CartSliceinitialStateType } from '../../types/cartSlicesTypes';

const initialState: CartSliceinitialStateType = {
  isLoading: false,
  isError: false,
  cart: { userId: '', foodId: '', image: '', name: '', price: 0, quantity: 0, total: 0 },
  carts: [],
};

const cartSlices = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteCartLocal: (state, { payload }) => {
      state.carts = state.carts.filter((cart) => cart._id !== payload);
    },
  },
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
        state.cart = {
          userId: '',
          foodId: '',
          image: '',
          name: '',
          price: 0,
          quantity: 0,
          total: 0,
        };
      })
      .addCase(getCarts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(getCarts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.carts = payload.carts;
      })
      .addCase(getCarts.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { deleteCartLocal } = cartSlices.actions;
export default cartSlices.reducer;
