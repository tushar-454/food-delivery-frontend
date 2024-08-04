import React from 'react';
import { OrderItemProps, OrderItemType } from '../../types/MyOrderType';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { orderItems, orderStatus, orderTotal } = order;
  return (
    <div className='mb-5 flex items-center justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4'>
      <div className='flex flex-col gap-2'>
        {orderItems.map((item: OrderItemType) => (
          <img
            key={Math.random()}
            src={item.image}
            alt={item.name}
            className='h-10 min-w-10 object-cover'
          />
        ))}
      </div>
      <div className='flex flex-col gap-2'>
        {orderItems.map((item: OrderItemType) => (
          <span key={Math.random()}>
            {item.name} - {item.quantity}*{item.price}
          </span>
        ))}
      </div>
      <div>${orderTotal}</div>
      <div>Items: {orderItems.length}</div>
      <div>{orderStatus}</div>
      <button className='bgDangerBtn' disabled={orderStatus === 'Delivered'}>
        Track Order
      </button>
    </div>
  );
};

export default OrderItem;
