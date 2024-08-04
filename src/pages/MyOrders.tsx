import assets from '../assets/assets';
import OrderItem from '../components/myorders/OrderItem';
import Container from '../components/shared/Container';
import { MyOrderType } from '../types/MyOrderType';

const myOrdersData: MyOrderType[] = [
  {
    orderDate: '2021-09-01',
    orderNumber: '123456',
    orderStatus: 'Delivered',
    orderTotal: 100,
    orderItems: [
      {
        image: assets.salad,
        name: 'Product 1',
        price: 20,
        quantity: 2,
      },
      {
        image: assets.salad,
        name: 'Product 1',
        price: 20,
        quantity: 2,
      },
    ],
  },
  {
    orderDate: '2021-09-01',
    orderNumber: '123456',
    orderStatus: 'Food Processing',
    orderTotal: 100,
    orderItems: [
      {
        image: assets.salad,
        name: 'Product 1',
        price: 20,
        quantity: 2,
      },
    ],
  },
];

const MyOrders = () => {
  return (
    <section>
      <Container>
        {/* order wrapper  */}
        <div className='mb-32 mt-20'>
          <h2 className='mb-4 text-2xl font-semibold'>My Orders</h2>
          {/* orders here  */}
          <div className='w-full overflow-hidden'>
            <div className='w-full overflow-x-auto'>
              {myOrdersData.map((order: MyOrderType) => (
                <OrderItem key={Math.random()} order={order} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyOrders;
