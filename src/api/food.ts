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
