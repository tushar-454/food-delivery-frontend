import AppDownloadLink from '../components/appdownloadlink/AppDownloadLink';
import Carousel from '../components/carousel/Carousel';
import ExploreMenu from '../components/exploremenu/ExploreMenu';
import FoodsDisplay from '../components/fooddisplay/FoodsDisplay';
import Signup from '../components/signup/Signup';

const Home = () => {
  return (
    <>
      <Carousel />
      <ExploreMenu />
      <FoodsDisplay />
      <AppDownloadLink />
      <Signup />
    </>
  );
};

export default Home;
