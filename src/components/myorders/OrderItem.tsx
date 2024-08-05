import React from 'react';
import assets from '../../assets/assets';
import { OrderItemProps, OrderItemType } from '../../types/MyOrderType';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { orderItems, orderStatus, orderTotal } = order;
  return (
    <div className='mb-5 flex items-center justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4'>
      <div className='flex items-center gap-2'>
        <img src={assets.parcel} alt='parcel icon' />
        <div className='flex flex-col gap-2'>
          {orderItems.map((item: OrderItemType) => (
            <span key={Math.random()} className='font-medium'>
              {item.name} - {item.quantity}*{item.price}
            </span>
          ))}
        </div>
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
