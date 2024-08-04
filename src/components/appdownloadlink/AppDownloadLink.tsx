import assets from '../../assets/assets';

const AppDownloadLink = () => {
  return (
    <div className='mx-auto my-32'>
      <h2 className='mx-auto w-full text-center text-3xl font-bold mmo:text-4xl md:w-[40rem]'>
        For Better Experience Download Tomato App
      </h2>
      <div className='mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row'>
        <a href='/'>
          <img src={assets.playstore} alt='playstore' className='w-26 md:w-auto' />
        </a>
        <a href='/'>
          <img src={assets.appstore} alt='appstore' className='w-26 md:w-auto' />
        </a>
      </div>
    </div>
  );
};

export default AppDownloadLink;
