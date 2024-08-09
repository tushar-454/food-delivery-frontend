import { createAsyncThunk } from '@reduxjs/toolkit';
import { initialStateType } from '../types/cartSlicesTypes';
import axios from '../utils/axios';

export const addToCart = createAsyncThunk('cart/addToCart', async (cartData: initialStateType) => {
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
