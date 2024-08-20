import { createSlice } from '@reduxjs/toolkit';
import { fetchOrders, fetchOrdersAdmin } from '../../api/order';
import { OrderInitialState } from '../../types/orderSlicesTypes';

const initialState: OrderInitialState = {
  isLoading: false,
  isError: false,
  orders: null,
};

const orderSlices = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrders.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchOrders.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.orders = payload.orders;
      })
      .addCase(fetchOrders.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(fetchOrdersAdmin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchOrdersAdmin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.orders = payload.orders;
      })
      .addCase(fetchOrdersAdmin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export default orderSlices.reducer;
