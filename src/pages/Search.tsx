import { useEffect, useState } from 'react';
import { HiMenu, HiMinusSm } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch, useSelector } from 'react-redux';
import { getCategorise } from '../api/categorise';
import { getSearchFoodsByValue } from '../api/food';
import FoodDisplayItem from '../components/fooddisplay/FoodDisplayItem';
import Container from '../components/shared/Container';
import Loader from '../components/shared/Loader';
import { searchBarAction } from '../features/publicState/publicStateSlices';
import { AppDispatch, RootState } from '../store/store';
import { CategoryItemType } from '../types/categoriseSlicesTypes';
import { FoodsDisplayTypes } from '../types/foodSlicesTypes';

const Search = () => {
  const categorise = useSelector((state: RootState) => state.categorise.categorise);
  const {
    isError,
    isLoading,
    food: FoodsDisplayData,
  } = useSelector((state: RootState) => state.food);
  const searchBar = useSelector((state: RootState) => state.publicStates[3].searchBar);
  const dispatch = useDispatch<AppDispatch>();
  const [categoryStr, setCategoryStr] = useState([] as string[]);
  const [min, setMin] = useState(null as number | null);
  const [max, setMax] = useState(null as number | null);

  const handleCheckboxChange = (category: string) => {
    if (categoryStr.includes(category)) {
      const updatedCategories = categoryStr.filter((item) => item !== category);
      setCategoryStr(updatedCategories);
    } else {
      setCategoryStr([...categoryStr, category]);
    }
  };

  useEffect(() => {
    dispatch(getSearchFoodsByValue({ category: categoryStr.join(','), min: min, max: max }));
  }, [categoryStr, min, max, dispatch]);

  useEffect(() => {
    dispatch(getCategorise());
    dispatch(getSearchFoodsByValue({ category: null, min: null, max: null }));
  }, [dispatch]);

  return (
    <section>
      <Container>
        {/* wrapper  */}
        <div className='flex'>
          {/* search control side  */}
          <div
            className={`absolute top-36 z-50 h-screen min-w-[240px] bg-white px-3 py-5 transition-all lg:relative lg:left-auto lg:top-auto lg:px-0 lg:py-0 ${searchBar ? 'left-0' : '-left-80'}`}
          >
            <ul>
              <li className='mb-3 text-lg font-bold'>Categorise</li>
              {categorise &&
                categorise.length > 0 &&
                categorise?.map((item: CategoryItemType) => {
                  return (
                    <li key={item._id}>
                      <span>
                        <input
                          type='checkbox'
                          id={item.category}
                          name={item.category}
                          className='mr-2 cursor-pointer accent-orange-500'
                          onChange={() => handleCheckboxChange(item.category)}
                        />
                        <label htmlFor={item.category} className='cursor-pointer'>
                          {item.name}
                        </label>
                      </span>
                    </li>
                  );
                })}
            </ul>
            <div>
              <h2 className='my-3 text-lg font-bold'>Price Range</h2>
              <div className='flex items-center'>
                <input
                  type='number'
                  id='min'
                  name='min'
                  placeholder='min'
                  className='max-w-20 border p-2 text-center outline-none'
                  value={min || ''}
                  onChange={(e) => setMin(parseInt(e.target.value))}
                />
                <HiMinusSm className='mx-2' />
                <input
                  type='number'
                  id='max'
                  name='max'
                  placeholder='max'
                  className='max-w-20 border p-2 text-center outline-none'
                  value={max || ''}
                  onChange={(e) => setMax(parseInt(e.target.value))}
                />
              </div>
            </div>
          </div>
          {/* search result side  */}
          <div className='flex-grow'>
            <div className='flex items-center gap-5'>
              {searchBar ? (
                <RxCross2
                  onClick={() => dispatch(searchBarAction())}
                  className='block cursor-pointer text-2xl lg:hidden'
                />
              ) : (
                <HiMenu
                  onClick={() => dispatch(searchBarAction())}
                  className='block cursor-pointer text-2xl lg:hidden'
                />
              )}
              <h2 className='my-3 text-xl font-bold'>Foods</h2>
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
              <div className='my-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
                {FoodsDisplayData.map((foodItem: FoodsDisplayTypes) => (
                  <FoodDisplayItem key={foodItem._id} foodItem={foodItem} />
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Search;
