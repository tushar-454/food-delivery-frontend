import { useEffect, useState } from 'react';
import { RiArrowRightWideFill } from 'react-icons/ri';
import assets from '../../assets/assets';
import { CarouselTypes } from '../../types/CarouselTypes';
import Container from '../shared/Container';
import CarouselItem from './CarouselItem';

const carouselsData: CarouselTypes[] = [
  {
    buttonLink: '/',
    buttonText: 'View Menu',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, nam veritatis aliquid aperiam aspernatur iure architecto, neque eaque aut beatae quasi. Suscipit aspernatur error quasi commodi placeat non dolore libero.',
    image: assets.carouselImg,
    title: 'Order your favourite food here',
  },
  {
    buttonLink: '',
    buttonText: '',
    description: '',
    image: assets.slider1,
    title: '',
  },
  {
    buttonLink: '',
    buttonText: '',
    description: '',
    image: assets.slider2,
    title: '',
  },
  {
    buttonLink: '',
    buttonText: '',
    description: '',
    image: assets.slider3,
    title: '',
  },
  {
    buttonLink: '',
    buttonText: '',
    description: '',
    image: assets.slider4,
    title: '',
  },
  {
    buttonLink: '',
    buttonText: '',
    description: '',
    image: assets.slider5,
    title: '',
  },
  {
    buttonLink: '',
    buttonText: '',
    description: '',
    image: assets.slider6,
    title: '',
  },
  {
    buttonLink: '',
    buttonText: '',
    description: '',
    image: assets.slider7,
    title: '',
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // carousel control function
  const handleCarousel = (action: string) => {
    const totalSlides = carouselsData.length - 1;
    if (action === 'next') {
      if (currentSlide === totalSlides) {
        return setCurrentSlide(0);
      }
      setCurrentSlide((prev) => prev + 1);
    }
    if (action === 'prev') {
      if (currentSlide === 0) {
        return setCurrentSlide(totalSlides);
      }
      setCurrentSlide((prev) => prev - 1);
    }
  };
  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((currentSlider) =>
        currentSlider === carouselsData.length - 1 ? 0 : currentSlider + 1,
      );
    }, 1000 * 3);
    return () => clearInterval(interval);
  }, []);

  return (
    <section>
      <Container>
        {/* Carousel wrapper  */}
        <div className='relative my-8 overflow-hidden'>
          <div
            className='ease-[cubic-bezier(0.81, 0.01, 0, 0.28)] flex duration-500'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {carouselsData.map((carousel: CarouselTypes) => (
              <CarouselItem key={Math.random()} carousel={carousel} />
            ))}
          </div>

          {/* slider controls */}
          {carouselsData.length > 1 && (
            <div className='absolute top-1/2 z-50 flex w-full -translate-y-1/2 items-center justify-between'>
              <span onClick={() => handleCarousel('prev')}>
                <RiArrowRightWideFill className='rotate-180 cursor-pointer text-4xl text-white' />
              </span>
              <span onClick={() => handleCarousel('next')}>
                <RiArrowRightWideFill className='cursor-pointer text-4xl text-white' />
              </span>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Carousel;
