import { useState } from 'react';
import toast from 'react-hot-toast';
import { HiMinusSm, HiPlusSm } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { deleteCart, updateCart } from '../../api/cart';
import { deleteCartLocal, updateCartLocal } from '../../features/cart/cartSlices';
import { AppDispatch } from '../../store/store';
import { CartItemProps } from '../../types/cartSlicesTypes';

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
  const { _id, image, name, price, quantity, total } = cart;
  const dispatch = useDispatch<AppDispatch>();
  const [quantityValue, setQuantityValue] = useState<number>(quantity);

  const addQuantity = () => {
    setQuantityValue(quantityValue + 1);
    handleQuantityUpdate(quantityValue + 1);
    dispatch(updateCartLocal({ _id, quantity: quantityValue + 1 }));
  };
  const removeQuantity = () => {
    if (quantityValue > 1) {
      setQuantityValue(quantityValue - 1);
      handleQuantityUpdate(quantityValue - 1);
      dispatch(updateCartLocal({ _id, quantity: quantityValue - 1 }));
    }
  };

  const handleQuantityUpdate = async (quantity: number) => {
    try {
      if (_id) {
        const { payload } = await dispatch(updateCart({ id: _id, quantity }));
        if (payload.status === 200) {
          toast.success('Quantity updated');
          dispatch(updateCartLocal({ _id, quantity }));
        } else {
          toast.error('Something went wrong updating quantity');
        }
      }
    } catch (error) {
      toast.error('Something went wrong updating quantity');
    }
  };

  const handleDeleteCart = async () => {
    if (_id) {
      const { payload } = await dispatch(deleteCart(_id));
      if (payload.status === 200) {
        dispatch(deleteCartLocal(_id));
        toast.success('Item removed from cart');
      } else {
        toast.error('Something went wrong removing item from cart');
      }
    }
  };

  return (
    <tr className='border-b-2'>
      <td className='p-2'>
        <img
          src={image}
          loading='lazy'
          alt={name}
          className='h-20 min-w-20 rounded-lg object-cover'
        />
      </td>
      <td className='p-2 text-lg'>{name}</td>
      <td className='p-2 text-lg'>${price}</td>
      <td className='p-2 text-lg'>
        <span className='flex max-w-fit items-center gap-2 rounded-lg border px-1 py-2'>
          <span>
            <HiMinusSm
              onClick={removeQuantity}
              className='cursor-pointer select-none transition-all hover:scale-150'
            />
          </span>

          <input
            type='number'
            id='quantity'
            name='quantity'
            className='max-w-10 border-none text-center outline-none'
            value={quantityValue}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuantityValue(+e.target.value)}
            onBlur={() => handleQuantityUpdate(quantityValue)}
          />

          <span>
            <HiPlusSm
              onClick={addQuantity}
              className='cursor-pointer select-none transition-all hover:scale-150'
            />
          </span>
        </span>
      </td>
      <td className='p-2 text-lg font-medium'>${total}</td>
      <td onClick={handleDeleteCart} className='cursor-pointer p-2 text-center text-lg'>
        X
      </td>
    </tr>
  );
};

export default CartItem;
