import { Link } from 'react-router-dom';
import assets from '../assets/assets';

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-5'>
      <img src={assets.notfound} loading='lazy' alt='notfound' className='rotate-180' />
      <p className='text-4xl font-bold'>404 Not Found 😞</p>
      <Link to='/' className='bgBlackBtn'>
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
