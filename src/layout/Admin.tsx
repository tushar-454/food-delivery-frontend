import { Outlet } from 'react-router-dom';
import AdminHeader from '../components/dashboard/adminheader/AdminHeader';
import AdminSidebar from '../components/dashboard/adminsidebar/AdminSidebar';

const Admin = () => {
  return (
    <>
      <AdminHeader />
      <div className='flex'>
        <AdminSidebar />
        <div className='h-screen w-screen flex-grow bg-neutral-100 p-10'>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
