import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';
import { login } from '../../features/publicState/publicStateSlices';
import Container from '../shared/Container';
import { NavsDesktop, NavsMobile } from './Navs';

const Header = () => {
  const isUserLogin = false;
  const dispatch = useDispatch();
  return (
    <header>
      <Container>
        {/* header wrapper component  */}
        <div className='flex items-center justify-between py-4'>
          {/* header component logo  */}
          <div>
            <img src={assets.logo} alt='logo' className='w-24 lmo:w-auto' />
          </div>
          {/* header component nav */}
          <div className='hidden lg:block'>
            <NavsDesktop />
          </div>
          <div className='block lg:hidden'>
            <NavsMobile />
          </div>
          {/* header component search+cart+signin button if user not logged in  */}
          {/* header component search+cart+profile button if user logged in  */}
          <div className='flex items-center justify-center gap-5 sm:gap-8'>
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
              <button onClick={() => dispatch(login())} className='primaryBtn'>
                Sign In
              </button>
            )}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
