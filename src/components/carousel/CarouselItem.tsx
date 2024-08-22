import { Link } from 'react-router-dom';
import { CarouselProps } from '../../types/CarouselTypes';

const CarouselItem: React.FC<CarouselProps> = ({ carousel }) => {
  const { buttonLink, buttonText, description, image, title } = carousel;
  return (
    <div className='group relative h-full min-w-full'>
      <img src={image} alt={title} className='rounded-2xl' />
      <span className='absolute left-0 top-0 block h-full w-full rounded-xl transition-all group-hover:bg-[#00000099]'></span>
      <div className='lmospace-y-1 absolute bottom-0 left-0 w-full px-2 py-5 sm:px-16 lg:w-3/5 lg:space-y-5'>
        <h1 className='text-xl font-bold text-white sm:text-2xl md:text-4xl lg:text-6xl'>
          {title}
        </h1>
        <p className='hidden text-white lmo:block'>{description}</p>
        <p className='block text-white lmo:hidden'>{description.slice(0, 30)} . . .</p>
        <Link to={buttonLink} className='secondaryBtn inline-block'>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
