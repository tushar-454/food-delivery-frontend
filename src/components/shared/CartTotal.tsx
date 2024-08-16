import React from 'react';
import { Link } from 'react-router-dom';
import { CartTotalProps } from '../../types/cartSlicesTypes';

const CartTotal: React.FC<CartTotalProps> = ({ asUse, cart }) => {
  const total = cart.reduce((acc, item) => acc + item.total, 0);
  return (
    <div className='w-full lg:w-1/2'>
      <h2 className='text-2xl font-semibold'>Cart Total</h2>
      <div>
        <p className='flex items-center justify-between border-b p-2 text-neutral-500'>
          <span>Subtotal</span>
          <span>${total}</span>
        </p>
        <p className='flex items-center justify-between border-b p-2 text-neutral-500'>
          <span>Delivery fee</span>
          <span>$5</span>
        </p>
        <p className='flex items-center justify-between p-2 font-semibold text-neutral-900'>
          <span>Total</span>
          <span>${total + 5}</span>
        </p>
      </div>
      {asUse === 'cart' && (
        <Link to='/order' className='bgOrangeBtn mt-5 inline-block'>
          Proceed to Checkout
        </Link>
      )}
      {asUse === 'order' && <button className='bgOrangeBtn mt-5'>Proceed to Payment</button>}
    </div>
  );
};

export default CartTotal;
