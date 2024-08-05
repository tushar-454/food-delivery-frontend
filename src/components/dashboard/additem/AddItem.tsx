import assets from '../../../assets/assets';

const AddItem = () => {
  return (
    <form className='w-full space-y-5 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-1/3'>
      <div className='grid gap-2'>
        <label htmlFor='image' className='text-lg text-neutral-500'>
          Upload Image
        </label>
        <input type='file' name='image' id='image' hidden />
        <label htmlFor='image'>
          <img src={assets.addIcon} alt='add icon' className='cursor-pointer' />
        </label>
      </div>
      <div className='grid gap-1'>
        <label htmlFor='name' className='text-lg text-neutral-500'>
          Food Name
        </label>
        <input type='text' name='name' id='name' placeholder='food name' className='primaryInput' />
      </div>
      <div className='grid gap-1'>
        <label htmlFor='desc' className='text-lg text-neutral-500'>
          Food Description
        </label>
        <textarea
          name='desc'
          id='desc'
          placeholder='food description'
          rows={8}
          className='primaryInput'
        ></textarea>
      </div>
      <div className='flex w-full flex-col gap-5 lmo:flex-row'>
        <div className='grid w-full gap-1'>
          <label htmlFor='category' className='text-lg text-neutral-500'>
            Food Category
          </label>
          <select name='category' id='category' className='primaryInput'>
            <option value=''>Select Category</option>
            <option value='salad'>Salad</option>
            <option value='deserts'>Deserts</option>
          </select>
        </div>
        <div className='grid w-full gap-1'>
          <label htmlFor='price' className='text-lg text-neutral-500'>
            Food Price
          </label>
          <input
            type='text'
            name='price'
            id='price'
            placeholder='food price'
            className='primaryInput'
          />
        </div>
      </div>
      <button type='submit' className='bgBlackBtn inline-block px-10'>
        Add
      </button>
    </form>
  );
};

export default AddItem;
