import assets from '../assets/assets';
import CartItem from '../components/cart/CartItem';
import CartTotal from '../components/shared/CartTotal';
import Container from '../components/shared/Container';
import { CartTypes } from '../types/CartTypes';

const cartData: CartTypes[] = [
  {
    image: assets.salad,
    price: 90,
    quantity: 3,
    title: 'Salad',
    total: 270,
  },
  {
    image: assets.salad,
    price: 90,
    quantity: 3,
    title: 'Salad',
    total: 270,
  },
  {
    image: assets.salad,
    price: 90,
    quantity: 3,
    title: 'Salad',
    total: 270,
  },
];

const Cart = () => {
  return (
    <section>
      <Container>
        {/* carts wrapper  */}
        <div className='mb-32 mt-20'>
          {/* table  */}
          <div className='w-full overflow-x-auto'>
            <table className='mb-12 w-full'>
              <thead>
                <tr className='border-b-2'>
                  <td className='p-2 text-xl font-medium text-neutral-500'>Items</td>
                  <td className='p-2 text-xl font-medium text-neutral-500'>Title</td>
                  <td className='p-2 text-xl font-medium text-neutral-500'>Price</td>
                  <td className='p-2 text-xl font-medium text-neutral-500'>Quantity</td>
                  <td className='p-2 text-xl font-medium text-neutral-500'>Total</td>
                  <td className='p-2 text-center text-xl font-medium text-neutral-500'>Remove</td>
                </tr>
              </thead>
              <tbody>
                {cartData.map((cart: CartTypes) => (
                  <CartItem key={Math.random()} cart={cart} />
                ))}
              </tbody>
            </table>
          </div>
          {/* cart total and promo code wrapper  */}
          <div className='mx-auto my-5 flex w-full flex-col justify-center gap-5 sm:my-10 sm:flex-row sm:gap-10 lg:w-[1024px]'>
            {/* cart total  */}
            <CartTotal asUse='cart' />
            {/* promo code  */}
            <div className='w-full lg:w-1/2'>
              <p className='my-4 text-neutral-500'>If you have a promo code. Enter it here</p>
              <form className='flex'>
                <input
                  type='text'
                  name='promo'
                  placeholder='promo code'
                  className='primaryInput pr-8'
                />
                <button className='-ml-5 rounded-r-lg bg-neutral-900 px-8 text-white'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cart;
