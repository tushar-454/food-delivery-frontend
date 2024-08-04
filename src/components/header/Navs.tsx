import { NavLink } from 'react-router-dom';
import { NavsType } from '../../types/NavsTypes';

const navs: NavsType[] = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Menu',
    link: '/menu',
  },
  {
    name: 'Mobile App',
    link: '/app',
  },
  {
    name: 'Contact Us',
    link: '/contact',
  },
];

const Navs = () => {
  return (
    <nav>
      <ul className='flex gap-8 text-lg font-semibold'>
        {navs.map((nav: NavsType) => (
          <li>
            <NavLink to={nav.link} className={`text-neutral-500`}>
              {({ isActive }) => <span className={isActive ? 'activeNav' : ''}>{nav.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navs;
