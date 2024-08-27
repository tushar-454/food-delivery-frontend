import { createSlice } from '@reduxjs/toolkit';

const publicStatesInitialState = [
  {
    login: false,
  },
  {
    signup: false,
  },
  {
    cartItem: 0,
  },
  {
    searchBar: false,
  },
  { isEditFormVisible: false },
];

const publicStates = createSlice({
  name: 'publicStates',
  initialState: publicStatesInitialState,
  reducers: {
    login: (state) => {
      state[0].login = !state[0].login;
    },
    signup: (state) => {
      state[1].signup = !state[1].signup;
    },
    cartItem: (state, action) => {
      state[2].cartItem = action.payload;
    },
    searchBarAction: (state) => {
      state[3].searchBar = !state[3].searchBar;
    },
    setIsEditFormVisible: (state) => {
      state[4].isEditFormVisible = !state[4].isEditFormVisible;
    },
  },
});

export default publicStates.reducer;
export const { login, signup, cartItem, searchBarAction, setIsEditFormVisible } =
  publicStates.actions;
