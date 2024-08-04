import { Link } from 'react-router-dom';
import { CarouselProps } from '../../types/CarouselTypes';

const CarouselItem: React.FC<CarouselProps> = ({ carousel }) => {
  const { buttonLink, buttonText, description, image, title } = carousel;
  return (
    <div className='group relative h-full min-w-full'>
      <img src={image} alt={title} />
      <span className='absolute left-0 top-0 block h-full w-full rounded-xl transition-all group-hover:bg-[#00000099]'></span>
      <div className='absolute bottom-0 left-0 w-3/5 space-y-5 px-16 py-5'>
        <h1 className='text-6xl font-bold text-white'>{title}</h1>
        <p className='text-white'>{description}</p>
        <Link to={buttonLink} className='secondaryBtn inline-block'>
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default CarouselItem;
