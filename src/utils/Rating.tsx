import React from 'react';
import { RatingProps } from '../types/RatingTypes';

const Rating: React.FC<RatingProps> = ({ rating }) => {
  const blankArr = new Array(5).fill('0');
  const ratingArr = new Array(Math.round(rating)).fill('0');
  return (
    <div className='relative'>
      <div className='flex gap-1'>
        {blankArr.map(() => (
          <span key={Math.random()} className='text-4xl'>
            *
          </span>
        ))}
      </div>
      <div className='absolute left-0 top-0 flex gap-1'>
        {ratingArr.map(() => (
          <span key={Math.random()} className='text-4xl text-orange-500'>
            *
          </span>
        ))}
      </div>
    </div>
  );
};

export default Rating;
