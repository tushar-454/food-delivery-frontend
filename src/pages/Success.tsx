import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import assets from '../assets/assets';

const Success = () => {
  const [render, setRender] = useState(false);
  const [render2, setRender2] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRender(true);
    }, 1000);
    setTimeout(() => {
      setRender2(true);
    }, 2000);
  }, []);
  return (
    <>
      <div className='absolute left-1/2 top-1/2 h-[500px] origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        {render && <Lottie animationData={assets.success} loop={false} />}
      </div>
      <div className='absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        {render2 && <Lottie animationData={assets.congratulation} loop={true} />}
      </div>
    </>
  );
};

export default Success;
