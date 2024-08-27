import { createSlice } from '@reduxjs/toolkit';
import {
  createFood,
  deleteFood,
  getAdminFoods,
  getFoods,
  getSearchFoodsByValue,
} from '../../api/food';
import { initialStateType } from './../../types/foodSlicesTypes';

const initialState: initialStateType = {
  isLoading: false,
  isError: false,
  food: null,
};

const foodSlices = createSlice({
  name: 'food',
  initialState,
  reducers: {
    deleteFoodLocal: (state, { payload }) => {
      if (Array.isArray(state.food)) {
        state.food = state.food?.filter((item) => item._id !== payload);
      }
    },
    updateFoodLocal: (state, { payload }) => {
      if (Array.isArray(state.food)) {
        state.food = state.food?.map((item) => {
          if (item._id === payload._id) {
            return payload.food;
          }
          return item;
        });
      }
    },
  },
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
        state.isLoading = false;
        state.isError = false;
        state.food = null;
      })
      .addCase(getFoods.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.food = action.payload.foods;
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
        state.food = action.payload.foods;
      })
      .addCase(getAdminFoods.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.food = null;
      });
    builder
      .addCase(deleteFood.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteFood.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.food = null;
      });
    builder
      .addCase(getSearchFoodsByValue.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.food = null;
      })
      .addCase(getSearchFoodsByValue.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.food = action.payload.foods;
      })
      .addCase(getSearchFoodsByValue.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.food = null;
      });
  },
});

export const { deleteFoodLocal, updateFoodLocal } = foodSlices.actions;
export default foodSlices.reducer;
