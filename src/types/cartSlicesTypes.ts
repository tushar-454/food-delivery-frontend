export type CartSliceinitialStateType = {
  isLoading: boolean;
  isError: boolean;
  cart: CartTypes;
  carts: CartTypes[];
};

export interface CartItemProps {
  cart: CartTypes;
}
export interface CartTotalProps {
  asUse: string;
  cart: CartTypes[];
  isProfileUpdate: boolean;
}

export type CartTypes = {
  _id?: string;
  foodId: string;
  userId: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};
