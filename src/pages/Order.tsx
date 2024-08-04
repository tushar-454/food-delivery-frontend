import CartTotal from '../components/shared/CartTotal';
import Container from '../components/shared/Container';

const Order = () => {
  return (
    <section>
      <Container>
        {/* order wrapper  */}
        <div className='mb-32 mt-20 flex flex-col justify-center gap-10 lg:flex-row'>
          {/* Delivery information  */}
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-5 text-2xl font-semibold'> Delivery Information</h2>
            <form className='space-y-4 lg:w-[500px]'>
              <div className='flex flex-col gap-4 mmo:flex-row'>
                <input
                  type='text'
                  name='fName'
                  id='fName'
                  placeholder='First name'
                  className='primaryInput'
                />
                <input
                  type='text'
                  name='lName'
                  id='lName'
                  placeholder='Last name'
                  className='primaryInput'
                />
              </div>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email address'
                className='primaryInput'
              />
              <input
                type='text'
                name='street'
                id='street'
                placeholder='Street'
                className='primaryInput'
              />
              <div className='flex flex-col gap-4 mmo:flex-row'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  placeholder='city'
                  className='primaryInput'
                />
                <input
                  type='text'
                  name='state'
                  id='state'
                  placeholder='state'
                  className='primaryInput'
                />
              </div>
              <div className='flex flex-col gap-4 mmo:flex-row'>
                <input
                  type='text'
                  name='zip'
                  id='zip'
                  placeholder='zip code'
                  className='primaryInput'
                />
                <input
                  type='text'
                  name='country'
                  id='country'
                  placeholder='Country'
                  className='primaryInput'
                />
              </div>
              <input
                type='text'
                name='place'
                id='place'
                placeholder='Place'
                className='primaryInput'
              />
            </form>
          </div>
          {/* cart total  */}
          <CartTotal asUse='order' />
        </div>
      </Container>
    </section>
  );
};

export default Order;
