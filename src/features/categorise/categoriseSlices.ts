import { createSlice } from '@reduxjs/toolkit';
import { getAdminCategories, getCategorise } from '../../api/categoriseSlices';
import { CategoriseSlicesState } from '../../types/categoriseSlicesTypes';

const initialState: CategoriseSlicesState = {
  isLoading: false,
  isError: false,
  categorise: null,
};

const categoriseSlices = createSlice({
  name: 'categorise',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategorise.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.categorise = null;
      })
      .addCase(getCategorise.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.categorise = payload;
      })
      .addCase(getCategorise.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.categorise = null;
      });
    builder
      .addCase(getAdminCategories.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.categorise = null;
      })
      .addCase(getAdminCategories.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.categorise = payload;
      })
      .addCase(getAdminCategories.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.categorise = null;
      });
  },
});

export default categoriseSlices.reducer;
