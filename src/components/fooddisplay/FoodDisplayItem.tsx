import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteCart, updateCart } from '../../api/cart';
import { AppDispatch, RootState } from '../../store/store';
import { FoodItemProps } from '../../types/FoodsDisplayTypes';
import Rating from '../../utils/Rating';

const FoodDisplayItem: React.FC<FoodItemProps> = ({ foodItem }) => {
  const { description, image, name, price, rating } = foodItem;
  const user = useSelector((state: RootState) => state.auth.user);
  const [isAdded, setIsAdded] = useState(false);
  const [foodQuantity, setFoodQuantity] = useState(1);
  const [cartId, setCartId] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleFirstAddToCart = async () => {
    setIsAdded(true);
    const { payload } = await dispatch(
      addToCart({
        userId: user?._id || '',
        image,
        name,
        price,
        quantity: foodQuantity,
        total: price * foodQuantity,
      }),
    );
    setCartId(payload._id);
  };

  const handleAddFood = async (action: string) => {
    if (action === 'add') {
      setFoodQuantity(foodQuantity + 1);
      await dispatch(updateCart({ id: cartId, quantity: foodQuantity + 1 }));
    } else {
      if (foodQuantity > 1) {
        setFoodQuantity(foodQuantity - 1);
        await dispatch(updateCart({ id: cartId, quantity: foodQuantity - 1 }));
      } else {
        setIsAdded(false);
        await dispatch(deleteCart(cartId));
      }
    }
  };

  return (
    <div className='rounded-lg shadow-lg'>
      <div className='relative overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='h-[300px] w-full rounded-t-lg object-cover transition-all hover:scale-110'
        />
        {/* food item add/remove btn  */}
        {isAdded ? (
          <div className='absolute bottom-2 right-2 flex items-center gap-3 rounded-full bg-white p-1'>
            <span
              onClick={() => handleAddFood('')}
              className='flex size-8 cursor-pointer select-none items-center justify-center rounded-full bg-red-200 text-red-600'
            >
              -
            </span>
            <span>{foodQuantity}</span>
            <span
              onClick={() => handleAddFood('add')}
              className='flex size-8 cursor-pointer select-none items-center justify-center rounded-full bg-green-200 text-green-600'
            >
              +
            </span>
          </div>
        ) : (
          <div className='absolute bottom-2 right-2 flex items-center gap-3 rounded-full bg-white p-1'>
            <span
              onClick={handleFirstAddToCart}
              className='flex size-8 cursor-pointer select-none items-center justify-center rounded-full bg-white text-black hover:scale-95'
            >
              +
            </span>
          </div>
        )}
      </div>
      <div className='space-y-2 px-3 py-5'>
        <div className='flex justify-between gap-4'>
          <span className='text-xl font-bold'>{name}</span>
          <Rating rating={rating} />
        </div>
        <p className='text-neutral-500'>{description}</p>
        <p className='text-2xl font-black text-orange-600'>${price}</p>
      </div>
    </div>
  );
};

export default FoodDisplayItem;
