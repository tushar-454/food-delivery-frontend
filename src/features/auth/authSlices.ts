import { createSlice } from '@reduxjs/toolkit';
import { loginUser, logout, token, updateProfile } from '../../api/auth';
import { initialStateType } from '../../types/authSlicesTypes';

const initialState: initialStateType = {
  isLoading: true,
  isError: false,
  user: null,
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logoutLocal: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = payload && payload.user;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      // logout reducer start
      .addCase(logout.fulfilled, (state) => {
        state.isLoading = false;
        state.isError = false;
        state.user = null;
      })
      // token reducer start
      .addCase(token.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(token.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = payload && payload.user;
      })
      .addCase(token.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.user = payload && payload.user;
      })
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { logoutLocal } = authSlices.actions;
export default authSlices.reducer;
