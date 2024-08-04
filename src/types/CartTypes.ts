export interface CartItemProps {
  cart: CartTypes;
}
export interface CartTotalProps {
  asUse: string;
}

export type CartTypes = {
  image: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
};
