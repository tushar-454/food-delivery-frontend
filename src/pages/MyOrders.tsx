import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchOrders } from '../api/order';
import OrderItem from '../components/myorders/OrderItem';
import Container from '../components/shared/Container';
import { AppDispatch, RootState } from '../store/store';
import { OrderType } from '../types/orderSlicesTypes';

const MyOrders = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { orders, isError, isLoading } = useSelector((state: RootState) => state.order);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (user) dispatch(fetchOrders(user._id));
  }, [dispatch, user]);

  return (
    <section>
      <Container>
        {/* order wrapper  */}
        <div className='mb-32 mt-20'>
          <h2 className='mb-4 text-2xl font-semibold'>My Orders</h2>
          {/* orders here  */}
          <div className='w-full overflow-hidden'>
            {isLoading && <p>Loading...</p>}
            {isError && <p className='text-red-500'>Something went wrong!</p>}
            {!isError && !isLoading && orders && orders.length > 0 && (
              <div className='w-full overflow-x-auto'>
                {orders.map((order: OrderType) => (
                  <OrderItem key={order._id} order={order} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyOrders;
