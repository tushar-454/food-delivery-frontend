export interface OrderItemProps {
  order: MyOrderType;
}

export type OrderItemType = {
  name: string;
  price: number;
  quantity: number;
};

export type MyOrderType = {
  _id: string;
  status: string;
  total: number;
  orderItems: OrderItemType[];
};
