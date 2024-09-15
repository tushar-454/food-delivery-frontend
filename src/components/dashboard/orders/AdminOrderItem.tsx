import toast from 'react-hot-toast';
import assets from '../../../assets/assets';
import { User } from '../../../types/authSlicesTypes';
import { OrderItemProps, OrderItemType } from '../../../types/orderSlicesTypes';
import axios from '../../../utils/axios';

const AdminOrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { userId, orderItems, total, status } = order;

  // handle user orders update
  const handleAdminOrdersUpdate = async (e: React.ChangeEvent<HTMLSelectElement>, id: string) => {
    try {
      const res = await axios.put(`/admin/order/${id}`, { status: e.target.value });
      if (res.status === 200) {
        toast.success('Order status updated successfully');
      }
    } catch (error) {
      toast.error('Failed to update order status');
    }
  };

  const isUserObject = (user: string | User): user is User => {
    return typeof user !== 'string';
  };
  return (
    <div className='mb-5 flex min-w-[1024px] items-start justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4 lg:w-auto'>
      <div className='flex min-w-40 items-start gap-4'>
        <img src={assets.parcel} loading='lazy' alt='parcel icon' />
        <div className='flex flex-col gap-2'>
          <div className='flex gap-2'>
            {orderItems?.map((orderItem: OrderItemType) => (
              <span
                key={orderItem._id}
                className='flex flex-col border-l border-orange-500 pl-2 font-medium'
              >
                <span>{orderItem.name}</span>
                <span>Quantity: {orderItem.quantity}</span>
                <span>Price: {orderItem.price}</span>
              </span>
            ))}
          </div>
          <div className='flex flex-col gap-1'>
            <span className='font-medium'>{isUserObject(userId) && userId?.name}</span>
            <span>
              {isUserObject(userId) &&
                `${userId?.address?.country}, ${userId?.address?.state}, ${userId?.address?.city}`}
            </span>
            <span>
              {isUserObject(userId) &&
                `${userId?.address?.place}, ${userId?.address?.state}, ${userId?.address?.zip}`}
            </span>
            <a href={`tel:${isUserObject(userId) && userId?.phone}`} className='mt-2'>
              {isUserObject(userId) && userId?.phone}
            </a>
          </div>
        </div>
      </div>
      <div className='min-w-16'>Items: {orderItems?.length}</div>
      <div>${total}</div>
      <select
        name='status'
        id='status'
        className='bgDangerBtn text-left outline-none'
        defaultValue={status}
        onChange={(e) => handleAdminOrdersUpdate(e, order._id)}
      >
        <option value='pending'>Pending</option>
        <option value='processing'>Food Processing</option>
        <option value='ofd'>Out for delivery</option>
        <option value='delivered'>Delivered</option>
        <option value='canceled'>Canceled</option>
      </select>
    </div>
  );
};

export default AdminOrderItem;
