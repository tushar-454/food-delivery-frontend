import { useSelector } from 'react-redux';
import AppDownloadLink from '../components/appdownloadlink/AppDownloadLink';
import Carousel from '../components/carousel/Carousel';
import ExploreMenu from '../components/exploremenu/ExploreMenu';
import FoodsDisplay from '../components/fooddisplay/FoodsDisplay';
import Login from '../components/login/Login';
import Signup from '../components/signup/Signup';
import { RootState } from '../store/store';

const Home = () => {
  const isLogin = useSelector((state: RootState) => state.publicStates[0].login);
  const isSignup = useSelector((state: RootState) => state.publicStates[1].signup);

  return (
    <>
      <Carousel />
      <ExploreMenu />
      <FoodsDisplay />
      <AppDownloadLink />
      {isLogin && <Login />}
      {isSignup && <Signup />}
    </>
  );
};

export default Home;
