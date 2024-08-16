import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrdersAdmin } from '../../../api/order';
import { AppDispatch, RootState } from '../../../store/store';
import { OrderType } from '../../../types/orderSlicesTypes';
import AdminOrderItem from './AdminOrderItem';

const Orders = () => {
  const { orders, isError, isLoading } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchOrdersAdmin());
  }, [dispatch]);
  return (
    <div>
      <h2 className='text-xl font-semibold'>Orders</h2>
      {/* orders here  */}
      <div className='my-10 w-full overflow-hidden'>
        {isLoading && <p>Loading...</p>}
        {isError && <p className='text-red-500'>Something went wrong...</p>}
        {!isError && !isLoading && orders && orders.length > 0 && (
          <div className='w-full overflow-x-auto'>
            {orders.map((order: OrderType) => (
              <AdminOrderItem key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
