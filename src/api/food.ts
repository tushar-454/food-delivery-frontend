import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
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

export const getSearchFoodsByValue = createAsyncThunk(
  'food/getSearchFoodsByValue',
  async ({
    category,
    min,
    max,
  }: {
    category: string | null;
    min: number | null;
    max: number | null;
  }) => {
    try {
      if (!category && !min && !max) {
        const res = await axios.get(`/user/searchfoods`);
        return res.data;
      }
      const res = await axios.get(`/user/searchfoods?category=${category}&max=${max}&min=${min}`);
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new Error(error.response?.data);
      }
    }
  },
);
