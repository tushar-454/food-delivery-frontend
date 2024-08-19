import { useDispatch } from 'react-redux';
import { deleteCart } from '../../api/cart';
import { deleteCartLocal } from '../../features/cart/cartSlices';
import { AppDispatch } from '../../store/store';
import { CartItemProps } from '../../types/cartSlicesTypes';

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
  const { _id, image, name, price, quantity, total } = cart;
  const dispatch = useDispatch<AppDispatch>();

  const handleDeleteCart = async () => {
    if (_id) await dispatch(deleteCart(_id));
    dispatch(deleteCartLocal(_id));
  };

  return (
    <tr className='border-b-2'>
      <td className='p-2'>
        <img src={image} alt={name} className='h-20 min-w-20 rounded-lg object-cover' />
      </td>
      <td className='p-2 text-lg'>{name}</td>
      <td className='p-2 text-lg'>${price}</td>
      <td className='p-2 text-lg'>{quantity}</td>
      <td className='p-2 text-lg font-medium'>${total}</td>
      <td onClick={handleDeleteCart} className='cursor-pointer p-2 text-center text-lg'>
        X
      </td>
    </tr>
  );
};

export default CartItem;
