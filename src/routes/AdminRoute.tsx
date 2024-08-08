interface PrivateRouteProps {
  children: React.ReactNode;
}

import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout } from '../api/auth';
import { AppDispatch, RootState } from '../store/store';

const AdminRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isUserLogin = useSelector((state: RootState) => state.auth.user);
  const loading = useSelector((state: RootState) => state.auth.isLoading);
  const dispatch = useDispatch<AppDispatch>();

  if (loading) {
    return <div>Loading...</div>;
  }
  if ((isUserLogin ?? {})?.role !== 'admin' && !loading) {
    toast.error('Nop! You are not an admin');
    dispatch(logout());
    return <Navigate to={'/'} />;
  }
  return children;
};

export default AdminRoute;
