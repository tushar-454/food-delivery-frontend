import assets from '../../assets/assets';

const Loader = () => {
  return (
    <div className='fixed left-1/2 top-1/2 z-[999999] flex h-full w-full -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-black/50'>
      <img src={assets.loader} alt='Loading image' />
    </div>
  );
};

export default Loader;
