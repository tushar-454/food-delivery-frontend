import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logout } from '../../../api/auth';
import assets from '../../../assets/assets';
import { logoutLocal } from '../../../features/auth/authSlices';
import { AppDispatch } from '../../../store/store';

const AdminHeader = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  // handle logout function
  const handleLogout = async () => {
    try {
      const { payload } = await dispatch(logout());
      if (payload.status === 200) {
        dispatch(logoutLocal());
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
    <header className='border-b-2'>
      <div className='px-4 lg:px-10'>
        {/* header wrapper component  */}
        <div className='flex items-center justify-between py-4'>
          {/* header component logo  */}
          <div>
            <Link to='/'>
              <img src={assets.logo} alt='logo' className='w-24 lmo:w-auto' />
            </Link>
            <span className='mx-2 font-semibold'>Admin Panel</span>
          </div>
          <button className='bgDangerBtn' onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
