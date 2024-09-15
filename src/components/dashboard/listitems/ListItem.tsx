import { useState } from 'react';
import toast from 'react-hot-toast';
import { MdDeleteForever, MdModeEditOutline } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFood } from '../../../api/food';
import { deleteFoodLocal } from '../../../features/food/foodSlices';
import { setIsEditFormVisible } from '../../../features/publicState/publicStateSlices';
import { AppDispatch, RootState } from '../../../store/store';
import { FoodListProps } from '../../../types/FoodListsTypes';
import AddItem from '../additem/AddItem';

const ListItem: React.FC<FoodListProps> = ({ foodList }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isEditFormVisible = useSelector(
    (state: RootState) => state.publicStates[4].isEditFormVisible,
  );
  const { _id, category, image, name, price } = foodList;
  const [foodId, setFoodId] = useState('');

  // handle food delete
  const handleDelete = async (id: string) => {
    const confirm = window.confirm('Are you sure you want to delete this food item?');
    try {
      if (confirm) {
        await dispatch(deleteFood(id));
        dispatch(deleteFoodLocal(id));
        toast.success('Food item deleted successfully');
      }
    } catch (error) {
      toast.error('Failed to delete food item');
    }
  };

  return (
    <>
      <tr className='transition-all hover:bg-neutral-200/50'>
        <td className='min-w-12 border-y border-l p-4'>
          <img src={image} loading='lazy' alt={name} className='w-12' />
        </td>
        <td className='border-y p-4'>{name}</td>
        <td className='whitespace-nowrap border-y p-4'>{category}</td>
        <td className='border-y p-4'>${price}</td>
        <td className='cursor-pointer border-y border-r p-4'>
          <span className='flex gap-4'>
            <MdDeleteForever className='text-2xl' onClick={() => handleDelete(_id)} />
            <MdModeEditOutline
              className='text-2xl'
              onClick={() => {
                dispatch(setIsEditFormVisible());
                setFoodId(_id);
              }}
            />
          </span>
        </td>
      </tr>
      {isEditFormVisible && foodId && (
        <div className='absolute left-1/2 top-24 z-[99999999] w-11/12 -translate-x-1/2 rounded-lg bg-white p-10'>
          <button
            onClick={() => dispatch(setIsEditFormVisible())}
            className='absolute right-10 flex size-9 items-center justify-center rounded-full bg-gray-200 p-2'
          >
            X
          </button>

          <AddItem responsible='updateFood' id={foodId} />
        </div>
      )}
    </>
  );
};

export default ListItem;
