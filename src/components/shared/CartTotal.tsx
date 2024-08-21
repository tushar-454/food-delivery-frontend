import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteCarts } from '../../api/cart';
import { deleteCartLocalAll } from '../../features/cart/cartSlices';
import { AppDispatch } from '../../store/store';
import { CartTotalProps } from '../../types/cartSlicesTypes';
import axios from '../../utils/axios';

const CartTotal: React.FC<CartTotalProps> = ({ asUse, cart, isProfileUpdate }) => {
  const dispatch = useDispatch<AppDispatch>();
  const total = cart?.reduce((acc, item) => acc + item.total, 0);

  // handle order creation
  const handleOrder = async () => {
    if (!isProfileUpdate) {
      return toast.error('Please update your profile first');
    }
    try {
      const order = {
        userId: cart[0].userId,
        foodsItems: cart.map((crt) => ({
          foodId: crt.foodId,
          quantity: crt.quantity,
        })),
      };
      const res = await axios.post('/user/order', order);
      if (res.status === 201) {
        toast.success('Order placed successfully');
        dispatch(deleteCartLocalAll());
        const cartIds = cart.map((crt) => crt._id);
        await dispatch(deleteCarts(cartIds.join(',')));
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
