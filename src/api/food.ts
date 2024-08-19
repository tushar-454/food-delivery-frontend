import { createAsyncThunk } from '@reduxjs/toolkit';
import { createFoodItemType } from '../types/foodSlicesTypes';
import axios from '../utils/axios';

export const createFood = createAsyncThunk('food/createFood', async (food: createFoodItemType) => {
  try {
    const res = await axios.post('/admin/food', food);
    return res.data;
  } catch (error) {
    throw new Error();
  }
});

export const getFoods = createAsyncThunk('food/getFoods', async (category: string) => {
  try {
    if (category) {
      const res = await axios.get(`/user/foods?category=${category}`);
      return res.data;
    }
    const res = await axios.get('/user/foods');
    return res.data;
  } catch (error) {
    throw new Error();
  }
});

export const getAdminFoods = createAsyncThunk('food/getAdminFoods', async () => {
  try {
    const res = await axios.get('/admin/foods');
    return res.data;
  } catch (error) {
    throw new Error();
  }
});

export const deleteFood = createAsyncThunk('food/deleteFood', async (id: string) => {
  try {
    const res = await axios.delete(`/admin/food/${id}`);
    return res.data;
  } catch (error) {
    throw new Error();
  }
});
