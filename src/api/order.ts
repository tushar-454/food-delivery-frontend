import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';

export const fetchOrders = createAsyncThunk('order/fetchOrders', async (userId: string) => {
  try {
    const res = await axios.get(`/user/orders/${userId}`);
    return res.data;
  } catch (error) {
    throw new Error();
  }
});

export const fetchOrdersAdmin = createAsyncThunk('order/fetchOrdersAdmin', async () => {
  try {
    const res = await axios.get(`/admin/orders`);
    return res.data;
  } catch (error) {
    throw new Error();
  }
});
