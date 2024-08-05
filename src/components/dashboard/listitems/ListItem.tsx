import { FoodListProps } from '../../../types/FoodListsTypes';

const ListItem: React.FC<FoodListProps> = ({ foodList }) => {
  const { category, image, name, price } = foodList;
  return (
    <tr className='transition-all hover:bg-neutral-200/50'>
      <td className='min-w-12 border-y border-l p-4'>
        <img src={image} alt={name} className='w-12' />
      </td>
      <td className='min-w-[320px] border-y p-4'>{name}</td>
      <td className='whitespace-nowrap border-y p-4'>{category}</td>
      <td className='border-y p-4'>${price}</td>
      <td className='border-y border-r p-4'>X</td>
    </tr>
  );
};

export default ListItem;
