import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { token } from '../api/auth';
import AdminHeader from '../components/dashboard/adminheader/AdminHeader';
import AdminSidebar from '../components/dashboard/adminsidebar/AdminSidebar';
import { AppDispatch } from '../store/store';

const Admin = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(token());
  }, [dispatch]);
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
