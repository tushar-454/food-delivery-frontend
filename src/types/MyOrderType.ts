export interface OrderItemProps {
  order: MyOrderType;
}

export type OrderItemType = {
  name: string;
  price: number;
  quantity: number;
  image: string;
};

export type MyOrderType = {
  orderNumber: string;
  orderDate: string;
  orderStatus: string;
  orderTotal: number;
  orderItems: OrderItemType[];
};
