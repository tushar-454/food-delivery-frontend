import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { logout } from '../../api/auth';
import assets from '../../assets/assets';
import { login } from '../../features/publicState/publicStateSlices';
import { AppDispatch, RootState } from '../../store/store';
import Container from '../shared/Container';
import { NavsDesktop, NavsMobile } from './Navs';

const Header = () => {
  const isUserLogin = useSelector((state: RootState) => state.auth.user);
  const { carts } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // handle logout function
  const handleLogout = async () => {
    try {
      const { payload } = await dispatch(logout());
      if (payload.status === 200) {
        navigate('/');
        toast.success('Logout successfully');
      } else {
        toast.error('Something went wrong');
      }
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <header>
      <Container>
        {/* header wrapper component  */}
        <div className='flex items-center justify-between py-4'>
          {/* header component logo  */}
          <div>
            <Link to='/'>
              <img src={assets.logo} alt='logo' className='w-24 lmo:w-auto' />
            </Link>
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
            <Link to={'/cart'} className='relative'>
              <img src={assets.cart} alt='cart_icon' />
              <span className='absolute -right-4 -top-2 grid size-6 place-content-center rounded-full bg-orange-500 p-2 text-white'>
                {(carts && Array.isArray(carts) && carts.length) || 0}
              </span>
            </Link>
            {/* conditionally render profile icon or sign in button based on user login status */}
            {isUserLogin ? (
              <>
                {isUserLogin?.role === 'admin' ? (
                  <Link to={'/dashboard'}>
                    <img src={assets.profile} alt='profile_icon' />
                  </Link>
                ) : (
                  <>
                    {pathname.includes('profile') ? (
                      <button onClick={handleLogout}>
                        <img src={assets.logout} alt='logout_icon' />
                      </button>
                    ) : (
                      <Link to={'/profile/myorders'}>
                        <img src={assets.profile} alt='profile_icon' />
                      </Link>
                    )}
                  </>
                )}
              </>
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
