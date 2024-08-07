import { createSlice } from '@reduxjs/toolkit';
import { loginUser, token } from '../../api/auth';
import { initialStateType } from '../../types/authSlicesTypes';

const initialState: initialStateType = {
  isLoading: false,
  isError: false,
  user: null,
};

const authSlices = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
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
  },
});

export default authSlices.reducer;
