import assets from '../../../assets/assets';
import { FoodListsTypes } from '../../../types/FoodListsTypes';
import ListItem from './ListItem';

const foodLists: FoodListsTypes[] = [
  {
    category: 'Fast Food Fast Food',
    image: assets.salad,
    name: 'BurgerFast Food Fast Food Fast Food ',
    price: 100,
  },
  {
    category: 'Fast Food',
    image: assets.salad,
    name: 'Burger',
    price: 100,
  },
  {
    category: 'Fast Food',
    image: assets.salad,
    name: 'Burger',
    price: 100,
  },
];

const ListItems = () => {
  return (
    <div>
      <h2 className='text-xl font-semibold'>All Foods List</h2>
      {/* orders here  */}
      <div className='my-10 w-full overflow-x-auto'>
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
          <tbody>
            {foodLists.map((foodList: FoodListsTypes) => (
              <ListItem key={Math.random()} foodList={foodList} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListItems;
