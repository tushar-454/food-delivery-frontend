import React from 'react';
import assets from '../../../assets/assets';
import { OrderItemProps, OrderItemType } from '../../../types/MyOrderType';

const AdminOrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { orderItems, orderStatus, orderTotal } = order;
  return (
    <div className='mb-5 flex items-start justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4'>
      <div className='flex items-start gap-4'>
        <img src={assets.parcel} alt='parcel icon' />
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            {orderItems.map((item: OrderItemType) => (
              <span key={Math.random()} className='font-medium'>
                {item.name} - {item.quantity}*{item.price},{' '}
              </span>
            ))}
          </div>
          <div className='flex flex-col gap-1'>
            <span className='font-medium'>Tushar Imran </span>
            <span>Greastack wheifeisd</span>
            <span>Banglaore, Karnataka, 409054.,45040</span>
            <span className='mt-2'>09750394543</span>
          </div>
        </div>
      </div>
      <div>Items: {orderItems.length}</div>
      <div>${orderTotal}</div>
      <select className='bgDangerBtn text-left outline-none' defaultValue={orderStatus}>
        <option value='pending'>Pending</option>
        <option value='processing'>Food Processing</option>
        <option value='ofd'>Out for delivery</option>
        <option value='delivered'>Delivered</option>
      </select>
    </div>
  );
};

export default AdminOrderItem;
