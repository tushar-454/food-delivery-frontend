import { Link } from 'react-router-dom';
import assets from '../../../assets/assets';

const AdminHeader = () => {
  return (
    <header className='border-b-2'>
      <div className='px-10'>
        {/* header wrapper component  */}
        <div className='flex items-center justify-between py-4'>
          {/* header component logo  */}
          <div>
            <Link to='/'>
              <img src={assets.logo} alt='logo' className='w-24 lmo:w-auto' />
            </Link>
            <span className='mx-2 font-semibold'>Admin Panel</span>
          </div>
          <button className='bgDangerBtn'>Logout</button>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
