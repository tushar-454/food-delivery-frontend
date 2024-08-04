import { Link } from 'react-router-dom';
import assets from '../../assets/assets';
import Container from '../shared/Container';
import Navs from './Navs';

const Header = () => {
  const isUserLogin = false;
  return (
    <header>
      <Container>
        {/* header wrapper component  */}
        <div className='flex items-center justify-between py-4'>
          {/* header component logo  */}
          <div>
            <img src={assets.logo} alt='logo' />
          </div>
          {/* header component nav */}
          <Navs />
          {/* header component search+cart+signin button if user not logged in  */}
          {/* header component search+cart+profile button if user logged in  */}
          <div className='flex items-center justify-center gap-8'>
            <Link to={'/search'}>
              <img src={assets.search} alt='search_icon' />
            </Link>
            <Link to={'/cart'}>
              <img src={assets.cart} alt='cart_icon' />
            </Link>
            {/* conditionally render profile icon or sign in button based on user login status */}
            {isUserLogin ? (
              <Link to={'/profile'}>
                <img src={assets.profile} alt='profile_icon' />
              </Link>
            ) : (
              <button className='primaryBtn'>Sign In</button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
