export type initialStateType = {
  userId: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};

export type CartSliceinitialStateType = {
  isLoading: boolean;
  isError: boolean;
  cart: initialStateType;
};
