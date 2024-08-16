import assets from '../../assets/assets';

const OrderItem = () => {
  console.log('user oder items');
  return (
    <div className='mb-5 flex items-center justify-between space-x-6 whitespace-nowrap rounded-lg border border-orange-500 p-4'>
      <div className='flex items-center gap-2'>
        <img src={assets.parcel} alt='parcel icon' />
        <div className='flex flex-col gap-2'>
          {[{}, {}]?.map(() => (
            <span key={Math.random()} className='font-medium'>
              {'name'} - {12}*{120}
            </span>
          ))}
        </div>
      </div>
      <div>${'orderTotal'}</div>
      <div>Items: {'orderItems.length'}</div>
      <div>{'orderStatus'}</div>
      <button className='bgDangerBtn'>
        {/* disabled={orderStatus === 'Delivered'}> */}
        Track Order
      </button>
    </div>
  );
};

export default OrderItem;
