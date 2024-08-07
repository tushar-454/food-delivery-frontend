export interface CartItemProps {
  cart: CartTypes;
}
export interface CartTotalProps {
  asUse: string;
}

export type CartTypes = {
  userId: string;
  image: string;
  name: string;
  price: number;
  quantity: number;
  total: number;
};
