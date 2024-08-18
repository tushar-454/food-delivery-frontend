import React from 'react';
import toast from 'react-hot-toast';
import assets from '../../assets/assets';
import { OrderItemProps, OrderItemType } from '../../types/orderSlicesTypes';
import axios from '../../utils/axios';

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { total, orderItems, status } = order;

  // handle user orders update
  const handleUserOrdersUpdate = async (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
    try {
      const res = await axios.put(`/user/order/${id}`, { status: e.target.value });
      if (res.status === 200) {
        toast.success('Order status updated successfully');
      }
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  return (
    <div className='mb-5 flex min-w-[1024px] items-center justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4'>
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
      <div>
        {status === 'pending' ? (
          <select
            name='status'
            id='status'
            className='w-[156px] rounded-lg border p-2 outline-none'
            defaultValue={status}
            onChange={(e) => handleUserOrdersUpdate(e, order._id)}
          >
            <option value='pending'>Pending</option>
            <option value='canceled'>Canceled</option>
          </select>
        ) : (
          <select
            name='status'
            id='status'
            className='rounded-lg border p-2 outline-none disabled:cursor-not-allowed'
            defaultValue={status}
            disabled
          >
            <option value='foodProcessing'>Food Processing</option>
            <option value='ofd'>Out for delivery</option>
            <option value='delivered'>Delivered</option>
            <option value='canceled'>Canceled</option>
          </select>
        )}
      </div>
      <button className='bgDangerBtn' disabled={status === 'delivered'}>
        Track Order
      </button>
    </div>
  );
};

export default OrderItem;
