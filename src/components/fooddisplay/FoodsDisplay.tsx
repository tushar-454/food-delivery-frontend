import assets from '../../assets/assets';
import { FoodsDisplayTypes } from '../../types/FoodsDisplayTypes';
import Container from '../shared/Container';
import FoodDisplayItem from './FoodDisplayItem';

const FoodsDisplayData: FoodsDisplayTypes[] = [
  {
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, officia?',
    image: assets.food,
    name: 'Greek salad',
    price: 12,
    rating: 3,
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, officia?',
    image: assets.food,
    name: 'Greek salad',
    price: 12,
    rating: 5,
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, officia?',
    image: assets.food,
    name: 'Greek salad',
    price: 12,
    rating: 4,
  },
  {
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, officia?',
    image: assets.food,
    name: 'Greek salad',
    price: 12,
    rating: 2,
  },
];

const FoodsDisplay = () => {
  return (
    <section>
      <Container>
        {/* foods display wrapper  */}
        <div className='w-full space-y-2 lg:w-3/5'>
          <h2 className='text-2xl font-bold'>Top dishes near you</h2>
        </div>
        {/* all foods display here  */}
        <div className='my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {FoodsDisplayData.map((foodItem: FoodsDisplayTypes) => (
            <FoodDisplayItem key={Math.random()} foodItem={foodItem} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default FoodsDisplay;
