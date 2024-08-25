import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import assets from '../assets/assets';

const Cancel = () => {
  const [render, setRender] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 2000);
    setTimeout(() => {
      navigate('/');
    }, 6000);
  }, [navigate]);
  return (
    <>
      <div className='absolute left-1/2 top-1/2 h-[500px] origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        {render && <Lottie animationData={assets.cancel} loop={true} />}
      </div>
    </>
  );
};

export default Cancel;
