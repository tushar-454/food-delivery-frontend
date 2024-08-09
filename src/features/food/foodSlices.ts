import { createSlice } from '@reduxjs/toolkit';
import { createFood, deleteFood, getAdminFoods, getFoods } from '../../api/food';
import { initialStateType } from './../../types/foodSlicesTypes';

const initialState: initialStateType = {
  isLoading: false,
  isError: false,
  food: null,
};

const foodSlices = createSlice({
  name: 'food',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createFood.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.food = null;
      })
      .addCase(createFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.food = action.payload;
      })
      .addCase(createFood.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.food = null;
      });
    builder
      .addCase(getFoods.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.food = null;
      })
      .addCase(getFoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.food = action.payload;
      })
      .addCase(getFoods.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.food = null;
      });
    builder
      .addCase(getAdminFoods.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.food = null;
      })
      .addCase(getAdminFoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.food = action.payload;
      })
      .addCase(getAdminFoods.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.food = null;
      });
    builder
      .addCase(deleteFood.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.food = null;
      })
      .addCase(deleteFood.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.food = action.payload;
      })
      .addCase(deleteFood.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.food = null;
      });
  },
});

export default foodSlices.reducer;
