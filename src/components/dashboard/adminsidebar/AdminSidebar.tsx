import { useState } from 'react';
import { RiArrowRightWideFill } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';

const AdminSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <aside
      className={`fixed z-[9999] h-screen w-[280px] border-r-2 bg-white transition-all md:static ${isSidebarOpen ? 'left-0' : 'left-[-17.5rem]'}`}
    >
      <span
        className={`absolute -right-10 top-1/2 block -translate-y-1/2 cursor-pointer rounded-r-full bg-white p-2 text-3xl text-orange-600 md:hidden`}
      >
        <RiArrowRightWideFill
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`transition-all ${isSidebarOpen ? 'rotate-180' : 'rotate-0'}`}
        />
      </span>
      <ul className='ml-10 mt-10 flex flex-col gap-5'>
        <NavLink
          to='additem'
          onClick={() => setIsSidebarOpen(false)}
          style={({ isActive }) => (isActive ? { backgroundColor: '#F5F5F5' } : {})}
          className='cursor-pointer border-y border-l py-2 pl-3 text-lg font-medium'
        >
          Add Item
        </NavLink>
        <NavLink
          to='listitems'
          onClick={() => setIsSidebarOpen(false)}
          style={({ isActive }) => (isActive ? { backgroundColor: '#F5F5F5' } : {})}
          className='cursor-pointer border-y border-l py-2 pl-3 text-lg font-medium'
        >
          List Item
        </NavLink>
        <NavLink
          to='orders'
          onClick={() => setIsSidebarOpen(false)}
          style={({ isActive }) => (isActive ? { backgroundColor: '#F5F5F5' } : {})}
          className='cursor-pointer border-y border-l py-2 pl-3 text-lg font-medium'
        >
          Orders
        </NavLink>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
