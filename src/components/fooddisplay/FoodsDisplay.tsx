import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getFoods } from '../../api/food';
import { AppDispatch, RootState } from '../../store/store';
import { FoodsDisplayTypes } from '../../types/foodSlicesTypes';
import Container from '../shared/Container';
import Loader from '../shared/Loader';
import FoodDisplayItem from './FoodDisplayItem';

const FoodsDisplay = () => {
  const {
    isError,
    isLoading,
    food: FoodsDisplayData,
  } = useSelector((state: RootState) => state.food);
  const { search } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (search) dispatch(getFoods(search.split('=')[1]));
    else dispatch(getFoods(''));
  }, [dispatch, search]);
  return (
    <section>
      <Container>
        {/* foods display wrapper  */}
        <div className='w-full space-y-2 lg:w-3/5'>
          <h2 className='text-2xl font-bold'>Top dishes near you</h2>
        </div>
        {/* all foods display here  */}
        {isLoading && <Loader />}
        {isError && (
          <p className='my-10 animate-pulse text-red-500'>Something went wrong getting foods</p>
        )}
        {!isError &&
          !isLoading &&
          Array.isArray(FoodsDisplayData) &&
          FoodsDisplayData.length === 0 && (
            <p className='text-black-500 my-10 animate-pulse'>No foods</p>
          )}
        {!isError && !isLoading && Array.isArray(FoodsDisplayData) && (
          <div className='my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {FoodsDisplayData.map((foodItem: FoodsDisplayTypes) => (
              <FoodDisplayItem key={Math.random()} foodItem={foodItem} />
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};

export default FoodsDisplay;
