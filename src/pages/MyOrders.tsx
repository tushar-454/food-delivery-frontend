import OrderItem from '../components/myorders/OrderItem';
import Container from '../components/shared/Container';

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
              {[{}, {}, {}].map(() => (
                <OrderItem key={Math.random()} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default MyOrders;
