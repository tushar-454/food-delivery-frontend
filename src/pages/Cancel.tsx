import Lottie from 'lottie-react';
import assets from '../assets/assets';

const Cancel = () => {
  return (
    <>
      <div className='absolute left-1/2 top-1/2 h-[500px] origin-center -translate-x-1/2 -translate-y-1/2 scale-150 overflow-hidden'>
        <Lottie animationData={assets.cancel} loop={true} />
      </div>
    </>
  );
};

export default Cancel;
