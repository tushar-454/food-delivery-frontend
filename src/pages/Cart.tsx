import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCarts } from '../api/cart';
import CartItem from '../components/cart/CartItem';
import CartTotal from '../components/shared/CartTotal';
import Container from '../components/shared/Container';
import { AppDispatch, RootState } from '../store/store';
import { CartTypes } from '../types/CartTypes';

const Cart = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const { isLoading, isError, carts: cartData } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCarts(user._id || ''));
  }, [dispatch, user]);
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
              {!isError && !isLoading && cartData && Array.isArray(cartData) && (
                <tbody>
                  {cartData.map((cart: CartTypes) => (
                    <CartItem key={Math.random()} cart={cart} />
                  ))}
                </tbody>
              )}
            </table>
          </div>
          {/* cart total and promo code wrapper  */}
          <div className='mx-auto my-5 flex w-full flex-col justify-center gap-5 sm:my-10 sm:flex-row sm:gap-10 lg:w-[1024px]'>
            {/* cart total  */}
            <CartTotal asUse='cart' cart={cartData} />
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
