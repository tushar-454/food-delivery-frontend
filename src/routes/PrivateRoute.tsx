interface PrivateRouteProps {
  children: React.ReactNode;
}

import React from 'react';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { RootState } from '../store/store';

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const isUserLogin = useSelector((state: RootState) => state.auth.user);
  const loading = useSelector((state: RootState) => state.auth.isLoading);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!isUserLogin && !loading) {
    toast.error('You need to login first');
    return <Navigate to={'/'} />;
  }
  return children;
};

export default PrivateRoute;
