import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, deleteCart, getCarts, updateCart } from '../../api/cart';
import { AppDispatch, RootState } from '../../store/store';
import { FoodItemProps } from '../../types/foodSlicesTypes';
import Rating from '../../utils/Rating';

const FoodDisplayItem: React.FC<FoodItemProps> = ({ foodItem }) => {
  const { _id, description, image, name, price, rating } = foodItem;
  const user = useSelector((state: RootState) => state.auth.user);
  const [isAdded, setIsAdded] = useState(false);
  const [foodQuantity, setFoodQuantity] = useState(1);
  const [cartId, setCartId] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleFirstAddToCart = async () => {
    try {
      setIsAdded(true);
      const { payload } = await dispatch(
        addToCart({
          userId: user?._id || '',
          foodId: _id,
          image,
          name,
          price: parseFloat(price.toString()),
          quantity: foodQuantity,
          total: parseFloat(price.toString()) * foodQuantity,
        }),
      );
      if (payload.status === 401) {
        toast.error('Please login to add to cart');
        setIsAdded(false);
        return;
      }
      if (payload.status === 201) {
        toast.success('Added to cart');
        if (payload && payload.cart) setCartId(payload.cart._id);
        await dispatch(getCarts(user?._id || ''));
      }
    } catch (error) {
      toast.error('Something went wrong adding to cart');
    }
  };

  const handleAddFood = async (action: string) => {
    try {
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
          await dispatch(getCarts(user?._id || ''));
        }
      }
    } catch (error) {
      toast.error('Something went wrong updating cart');
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
