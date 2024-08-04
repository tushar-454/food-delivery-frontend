import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import { RootState } from '../store/store';

const Root = () => {
  const isLogin = useSelector((state: RootState) => state.publicStates[0].login);
  const isSignup = useSelector((state: RootState) => state.publicStates[1].signup);
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
