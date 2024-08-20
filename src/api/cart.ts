import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartTypes } from '../types/cartSlicesTypes';
import axios from '../utils/axios';

export const addToCart = createAsyncThunk('cart/addToCart', async (cartData: CartTypes) => {
  const response = await axios.post('/user/cart', cartData);
  return response.data;
});

export const updateCart = createAsyncThunk(
  'cart/updateCart',
  async ({ id, quantity }: { id: string; quantity: number }) => {
    const response = await axios.put(`/user/cart/${id}`, { quantity });
    return response.data;
  },
);

export const deleteCart = createAsyncThunk('cart/deleteCart', async (id: string) => {
  const response = await axios.delete(`/user/cart/${id}`);
  return response.data;
});

export const deleteCarts = createAsyncThunk('cart/deleteCarts', async (ids: string) => {
  const response = await axios.delete(`/user/carts?ids=${ids}`);
  return response.data;
});

export const getCarts = createAsyncThunk('cart/getCarts', async (userId: string) => {
  const response = await axios.get(`/user/carts/${userId}`);
  return response.data;
});
