import { useState } from 'react';
import { FoodItemProps } from '../../types/FoodsDisplayTypes';
import Rating from '../../utils/Rating';

const FoodDisplayItem: React.FC<FoodItemProps> = ({ foodItem }) => {
  const { desc, image, name, price, rating } = foodItem;
  const [isAdded, setIsAdded] = useState(false);
  return (
    <div className='rounded-lg shadow-lg'>
      <div className='relative overflow-hidden'>
        <img
          src={image}
          alt={name}
          className='w-full rounded-t-lg transition-all hover:scale-110'
        />
        {/* food item add/remove btn  */}
        {isAdded ? (
          <div className='absolute bottom-2 right-2 flex items-center gap-3 rounded-full bg-white p-1'>
            <span className='flex size-8 cursor-pointer select-none items-center justify-center rounded-full bg-red-200 text-red-600'>
              -
            </span>
            <span>5</span>
            <span className='flex size-8 cursor-pointer select-none items-center justify-center rounded-full bg-green-200 text-green-600'>
              +
            </span>
          </div>
        ) : (
          <div className='absolute bottom-2 right-2 flex items-center gap-3 rounded-full bg-white p-1'>
            <span
              onClick={() => setIsAdded(true)}
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
        <p className='text-neutral-500'>{desc}</p>
        <p className='text-2xl font-black text-orange-600'>${price}</p>
      </div>
    </div>
  );
};

export default FoodDisplayItem;
