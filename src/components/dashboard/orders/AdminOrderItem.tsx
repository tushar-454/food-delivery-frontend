import assets from '../../../assets/assets';
import { User } from '../../../types/authSlicesTypes';
import { OrderItemProps, OrderItemType } from '../../../types/orderSlicesTypes';

const AdminOrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const { userId, orderItems, total, status } = order;
  const isUserObject = (user: string | User): user is User => {
    return typeof user !== 'string';
  };
  return (
    <div className='mb-5 flex items-start justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4'>
      <div className='flex min-w-40 items-start gap-4'>
        <img src={assets.parcel} alt='parcel icon' />
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
            <span className='font-medium'>{isUserObject(userId) && userId.name}</span>
            <span>
              {isUserObject(userId) &&
                `${userId.address.country}, ${userId.address.state}, ${userId.address.city}`}
            </span>
            <span>
              {isUserObject(userId) &&
                `${userId.address.place}, ${userId.address.state}, ${userId.address.zip}`}
            </span>
            <a href={`tel:${isUserObject(userId) && userId.phone}`} className='mt-2'>
              {isUserObject(userId) && userId.phone}
            </a>
          </div>
        </div>
      </div>
      <div className='min-w-16'>Items: {orderItems.length}</div>
      <div>${total}</div>
      <select className='bgDangerBtn text-left outline-none' defaultValue={status}>
        <option value='pending'>Pending</option>
        <option value='processing'>Food Processing</option>
        <option value='ofd'>Out for delivery</option>
        <option value='delivered'>Delivered</option>
      </select>
    </div>
  );
};

export default AdminOrderItem;
