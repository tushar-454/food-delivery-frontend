import Lottie from 'lottie-react';
import assets from '../assets/assets';

const Success = () => {
  return (
    <>
      <div className='absolute left-1/2 top-1/2 h-[500px] origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        <Lottie animationData={assets.success} loop={false} />
      </div>
      <div className='absolute left-1/2 top-1/2 origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        <Lottie animationData={assets.congratulation} loop={true} />
      </div>
    </>
  );
};

export default Success;
