import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store/store';
import { CartTotalProps } from '../../types/cartSlicesTypes';
import axios from '../../utils/axios';

const CartTotal: React.FC<CartTotalProps> = ({ asUse, cart, isProfileUpdate }) => {
  const user = useSelector((state: RootState) => state.auth.user);
  const total = cart?.reduce((acc, item) => acc + item.total, 0);

  // handle order creation
  const handleOrder = async () => {
    if (!isProfileUpdate) {
      return toast.error('Please fill up your delivery information first');
    }
    try {
      const response = await axios.post('/payment/create-payment', {
        amount: total + 5,
        productName: cart.map((crt) => crt.name).join(', '),
        categories: cart.map((crt) => crt.name).join(', '),
        user,
        userId: cart[0].userId,
        foodsItems: cart.map((crt) => ({
          foodId: crt.foodId,
          quantity: crt.quantity,
        })),
        deliveryFee: 5,
      });
      if (response.status === 200) {
        window.location.href = response.data.paymentUrl;
      }
    } catch (error) {
      toast.error('Something went wrong while placing order');
    }
  };

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
          Proceed to Order
        </Link>
      )}
      {asUse === 'order' && (
        <button onClick={handleOrder} className='bgOrangeBtn mt-5'>
          Place Order
        </button>
      )}
    </div>
  );
};

export default CartTotal;
