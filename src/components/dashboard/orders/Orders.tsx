import assets from '../../../assets/assets';
import { MyOrderType } from '../../../types/MyOrderType';
import AdminOrderItem from './AdminOrderItem';

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
    <div>
      <h2 className='text-xl font-semibold'>Orders</h2>
      {/* orders here  */}
      <div className='my-10 w-full overflow-hidden'>
        <div className='w-full overflow-x-auto'>
          {myOrdersData.map((order: MyOrderType) => (
            <AdminOrderItem key={Math.random()} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
