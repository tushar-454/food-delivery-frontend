// import { useState } from 'react';
// import { RiArrowRightWideFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { NavsType } from '../../types/NavsTypes';

const navs: NavsType[] = [
  // {
  //   name: 'Home',
  //   link: '/',
  // },
  // {
  //   name: 'Menu',
  //   link: '/menu',
  // },
  // {
  //   name: 'Mobile App',
  //   link: '/app',
  // },
  // {
  //   name: 'Contact Us',
  //   link: '/contact',
  // },
];

export const NavsDesktop = () => {
  return (
    <nav>
      <ul className='flex gap-8 text-lg font-semibold'>
        {navs.map((nav: NavsType) => (
          <li key={Math.random()}>
            <NavLink to={nav.link} className={`text-neutral-500`}>
              {({ isActive }) => <span className={isActive ? 'activeNav' : ''}>{nav.name}</span>}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// export const NavsMobile = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   return (
//     <nav
//       className={`fixed top-0 z-[99999] min-h-screen w-60 bg-neutral-100 px-5 py-2 transition-all ${isMenuOpen ? 'left-0' : '-left-60'}`}
//     >
//       <span
//         className={`absolute -right-10 top-1/2 -translate-y-1/2 cursor-pointer rounded-r-full bg-neutral-100 p-2 text-3xl text-orange-600`}
//       >
//         <RiArrowRightWideFill
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className={`transition-all ${isMenuOpen ? 'rotate-180' : 'rotate-0'}`}
//         />
//       </span>

//       <ul className='flex flex-col gap-4 text-lg font-semibold'>
//         {navs.map((nav: NavsType) => (
//           <li key={Math.random()} onClick={() => setIsMenuOpen(false)}>
//             <NavLink to={nav.link} className={`text-neutral-500`}>
//               {({ isActive }) => <span className={isActive ? 'activeNav' : ''}>{nav.name}</span>}
//             </NavLink>
//           </li>
//         ))}
//       </ul>
//     </nav>
//   );
// };
