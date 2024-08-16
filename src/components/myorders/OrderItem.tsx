import React from 'react';
import assets from '../../assets/assets';
import { OrderItemProps, OrderItemType } from '../../types/orderSlicesTypes';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { total, orderItems, status } = order;
  return (
    <div className='mb-5 flex items-center justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4'>
      <div className='flex items-center gap-2'>
        <img src={assets.parcel} alt='parcel icon' />
        <div className='flex flex-col gap-2'>
          {orderItems?.map((orderItem: OrderItemType) => (
            <span key={orderItem._id} className='font-medium'>
              {orderItem.name} - {orderItem.quantity}*{orderItem.price}
            </span>
          ))}
        </div>
      </div>
      <div>${total}</div>
      <div>Items: {orderItems.length}</div>
      <div>{status}</div>
      <button className='bgDangerBtn'>
        {/* disabled={orderStatus === 'Delivered'}> */}
        Track Order
      </button>
    </div>
  );
};

export default OrderItem;
