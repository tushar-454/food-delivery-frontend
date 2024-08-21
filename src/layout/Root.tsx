import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { token } from '../api/auth';
import { getCarts } from '../api/cart';
import assets from '../assets/assets';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import { AppDispatch, RootState } from '../store/store';

const Root = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const isLogin = useSelector((state: RootState) => state.publicStates[0].login);
  const isSignup = useSelector((state: RootState) => state.publicStates[1].signup);
  const dispatch = useDispatch<AppDispatch>();
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch(token());
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [dispatch]);
  useEffect(() => {
    dispatch(getCarts(user?._id || ''));
  }, [dispatch, user]);
  return (
    <>
      {loader && (
        <div className='fixed left-1/2 top-1/2 z-[999999999] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white'>
          <img src={assets.firstLoader} alt='loader' className='scale-75' />
        </div>
      )}
      <>
        <Header />
        <Outlet />
        <Footer />
        {isLogin && <Login />}
        {isSignup && <Signup />}
      </>
    </>
  );
};

export default Root;
