import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

export const getCategorise = createAsyncThunk('categorise/getCategorise', async () => {
  const response = await axios.get('/user/categories');
  return response.data;
});
