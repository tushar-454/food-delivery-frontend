import { createAsyncThunk } from '@reduxjs/toolkit';
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
      throw new Error();
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
    throw new Error();
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
      if (res.status === 201) {
        return {
          status: res.status,
        };
      }
    } catch (error) {
      throw new Error();
    }
  },
);

export const logout = createAsyncThunk('auth/logout', async () => {
  try {
    const res = await axios.delete(`/token/delete`);
    if (res.status === 204) {
      return {
        status: res.status,
      };
    }
  } catch (error) {
    throw new Error();
  }
});
