import { CartItemProps } from '../../types/CartTypes';

const CartItem: React.FC<CartItemProps> = ({ cart }) => {
  const { image, title, price, quantity, total } = cart;
  return (
    <tr className='border-b-2'>
      <td className='p-2'>
        <img src={image} alt={title} className='h-20 min-w-20 rounded-lg object-cover' />
      </td>
      <td className='p-2 text-lg'>{title}</td>
      <td className='p-2 text-lg'>${price}</td>
      <td className='p-2 text-lg'>{quantity}</td>
      <td className='p-2 text-lg font-medium'>${total}</td>
      <td className='cursor-pointer p-2 text-center text-lg'>X</td>
    </tr>
  );
};

export default CartItem;
