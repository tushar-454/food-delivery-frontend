import AdminOrderItem from './AdminOrderItem';

const MyOrders = () => {
  return (
    <div>
      <h2 className='text-xl font-semibold'>Orders</h2>
      {/* orders here  */}
      <div className='my-10 w-full overflow-hidden'>
        <div className='w-full overflow-x-auto'>
          {[{}, {}].map(() => (
            <AdminOrderItem key={Math.random()} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
