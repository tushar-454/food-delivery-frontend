import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { RatingProps } from '../types/RatingTypes';

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const blankArr = new Array(5).fill('0');
  const ratingArr = new Array(Math.round(rating)).fill('0');
  return (
    <div className='relative mt-1'>
      <div className='flex gap-1'>
        {blankArr.map(() => (
          <span key={Math.random()} className='text-lg'>
            <IoIosStar className='text-neutral-300' />
          </span>
        ))}
      </div>
      <div className='absolute left-0 top-0 flex gap-1'>
        {ratingArr.map(() => (
          <span key={Math.random()} className='text-lg text-orange-500'>
            <IoIosStar />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
