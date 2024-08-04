import AppDownloadLink from '../components/appdownloadlink/AppDownloadLink';
import Carousel from '../components/carousel/Carousel';
import ExploreMenu from '../components/exploremenu/ExploreMenu';
import FoodsDisplay from '../components/fooddisplay/FoodsDisplay';
import Login from '../components/login/Login';

const Home = () => {
  return (
    <>
      <Carousel />
      <ExploreMenu />
      <FoodsDisplay />
      <AppDownloadLink />
      <Login />
    </>
  );
};

export default Home;
