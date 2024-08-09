import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminFoods } from '../../../api/food';
import { AppDispatch, RootState } from '../../../store/store';
import { FoodsDisplayTypes } from '../../../types/foodSlicesTypes';
import ListItem from './ListItem';

const ListItems = () => {
  const { food: foodLists, isError, isLoading } = useSelector((state: RootState) => state.food);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAdminFoods());
  }, [dispatch]);

  return (
    <div>
      <h2 className='text-xl font-semibold'>All Foods List</h2>
      {isError && (
        <p className='my-10 animate-pulse text-red-500'>Something went wrong getting food lists</p>
      )}
      {!isLoading && Array.isArray(foodLists) && foodLists.length === 0 && (
        <p className='my-10 animate-pulse text-black'>No Food Item</p>
      )}
      {/* orders here  */}
      <div className='my-10 w-full overflow-x-auto'>
        {!isError && !isLoading && Array.isArray(foodLists) && foodLists.length > 0 && (
          <table className='w-full overflow-x-scroll'>
            <thead>
              <tr className='bg-neutral-200'>
                <td className='min-w-12 p-4 font-bold'>Image</td>
                <td className='min-w-[320px] p-4 font-bold'>Name</td>
                <td className='whitespace-nowrap p-4 font-bold'>Category</td>
                <td className='p-4 font-bold'>Price</td>
                <td className='p-4 font-bold'>Action</td>
              </tr>
            </thead>
            {isLoading && <p>Loading...</p>}
            {!isError && !isLoading && Array.isArray(foodLists) && (
              <tbody>
                {foodLists.map((foodList: FoodsDisplayTypes) => (
                  <ListItem key={Math.random()} foodList={foodList} />
                ))}
              </tbody>
            )}
          </table>
        )}
      </div>
    </div>
  );
};

export default ListItems;
