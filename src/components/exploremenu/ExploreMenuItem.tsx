import { Link, useLocation } from 'react-router-dom';
import { ExploreMenuItemProps } from '../../types/ExploreMenu';

const ExploreMenuItem: React.FC<ExploreMenuItemProps> = ({ menu }) => {
  const { search } = useLocation();
  return (
    <Link
      to={search.includes(menu.category) ? `` : `?category=${menu.category}`}
      className='flex cursor-pointer flex-col items-center gap-2'
    >
      <img src={menu.image} alt={menu.name} className='rounded-full border-4 border-orange-400' />
      <span className='text-lg text-neutral-500'>{menu.name}</span>
    </Link>
  );
};

export default ExploreMenuItem;
