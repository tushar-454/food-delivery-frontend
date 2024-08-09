import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../utils/axios';

export const getCategorise = createAsyncThunk('categorise/getCategorise', async () => {
  const response = await axios.get('/user/categories');
  return response.data;
});

export const getAdminCategories = createAsyncThunk('categorise/getAdminCategories', async () => {
  const response = await axios.get('/admin/categories?fields=name,category');
  return response.data;
});
