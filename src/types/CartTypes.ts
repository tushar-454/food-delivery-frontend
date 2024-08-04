export interface CartItemProps {
  cart: CartTypes;
}

export type CartTypes = {
  image: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
};
