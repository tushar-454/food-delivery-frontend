import { MdDeleteForever, MdModeEditOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteFood, getAdminFoods } from '../../../api/food';
import { AppDispatch } from '../../../store/store';
import { FoodListProps } from '../../../types/FoodListsTypes';

const ListItem: React.FC<FoodListProps> = ({ foodList }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { _id, category, image, name, price } = foodList;

  // handle food delete
  const handleDelete = async (id: string) => {
    await dispatch(deleteFood(id));
    await dispatch(getAdminFoods());
    return null;
  };

  return (
    <tr className='transition-all hover:bg-neutral-200/50'>
      <td className='min-w-12 border-y border-l p-4'>
        <img src={image} alt={name} className='w-12' />
      </td>
      <td className='border-y p-4'>{name}</td>
      <td className='whitespace-nowrap border-y p-4'>{category}</td>
      <td className='border-y p-4'>${price}</td>
      <td className='cursor-pointer border-y border-r p-4'>
        <span className='flex gap-4'>
          <MdDeleteForever className='text-2xl' onClick={() => handleDelete(_id)} />
          <MdModeEditOutline className='text-2xl' />
        </span>
      </td>
    </tr>
  );
};

export default ListItem;
