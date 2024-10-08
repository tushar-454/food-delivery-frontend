import { createAsyncThunk } from '@reduxjs/toolkit';
import { isAxiosError } from 'axios';
import { UpdateProfileData } from '../types/authSlicesTypes';
import axios from '../utils/axios';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }: { email: string; password: string }) => {
    try {
      const res = await axios.post(`/user/login`, {
        email,
        password,
      });
      if (res.status === 200) {
        await axios.post(`/token/create`, {
          email,
        });
        return {
          user: res.data,
          status: res.status,
        };
      }
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
);

export const token = createAsyncThunk('auth/token', async () => {
  try {
    const res = await axios.get(`/token`);
    if (res.status === 200) {
      return {
        user: res.data,
        status: res.status,
      };
    }
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
});

export const signupUser = createAsyncThunk(
  'auth/signupUser',
  async ({ name, email, password }: { name: string; email: string; password: string }) => {
    try {
      const res = await axios.post(`/user`, {
        name,
        email,
        password,
      });
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const res = await axios.delete(`/token/delete`);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.data;
    }
  }
});

export const updateProfile = createAsyncThunk(
  'auth/updateProfile',
  async ({ id, data }: { id: string; data: UpdateProfileData }) => {
    try {
      const res = await axios.put(`/user/${id}`, data);
      return res.data;
    } catch (error) {
      if (isAxiosError(error)) {
        return error.response?.data;
      }
    }
  },
);
