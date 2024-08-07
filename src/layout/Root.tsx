import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { token } from '../api/auth';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import { AppDispatch, RootState } from '../store/store';

const Root = () => {
  const isLogin = useSelector((state: RootState) => state.publicStates[0].login);
  const isSignup = useSelector((state: RootState) => state.publicStates[1].signup);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(token());
  }, [dispatch]);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      {isLogin && <Login />}
      {isSignup && <Signup />}
    </>
  );
};

export default Root;
