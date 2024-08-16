export type OrderInitialState = {
  isLoading: boolean;
  isError: boolean;
  orders: OrderType[] | null;
};

export type OrderType = {
  _id: string;
  userId: string;
  orderItems: OrderItemType[];
  total: number;
  status: string;
  createdAt: string;
};

export type OrderItemType = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  discount: number;
};

export interface OrderItemProps {
  order: OrderType;
}
