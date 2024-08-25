import Lottie from 'lottie-react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const Failed = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 4000);
  }, [navigate]);
  return (
    <>
      <div className='absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        <Lottie className='scale-100 md:scale-50' animationData={assets.failed} loop={true} />
      </div>
      <div className='absolute left-1/2 top-1/4 origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        <Lottie animationData={assets.failedText} loop={true} />
      </div>
    </>
  );
};

export default Failed;
