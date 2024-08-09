import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminCategories } from '../../../api/categoriseSlices';
import { createFood } from '../../../api/food';
import assets from '../../../assets/assets';
import { AppDispatch, RootState } from '../../../store/store';
import { CategoryItemType } from '../../../types/categoriseSlicesTypes';
import { createFoodItemType } from '../../../types/foodSlicesTypes';
import { uploadImage } from '../../../utils/uploadImg';
import FoodDisplayItem from '../../fooddisplay/FoodDisplayItem';

const initialState: createFoodItemType = {
  image: 'https://via.placeholder.com/640x400',
  name: '',
  description: '',
  category: '',
  price: '',
};

const AddItem = () => {
  const { isLoading, categorise, isError } = useSelector((state: RootState) => state.categorise);
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState({ ...initialState });
  const [image, setImage] = useState<File | null>(null);

  // food item add handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  // image handle change
  const imageHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files && e.target.files[0]);
    setState({
      ...state,
      image: URL.createObjectURL(e.target.files[0]),
    });
  };

  // handle add food item submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (image) {
      const imageUrl = await uploadImage(image);
      const food = { ...state, image: imageUrl };
      const { payload } = await dispatch(createFood(food));
      if (payload) {
        setState({ ...initialState });
        setImage(null);
        toast.success('Food item added successfully');
      } else {
        toast.error('Failed to add food item');
      }
    }
  };

  useEffect(() => {
    dispatch(getAdminCategories());
  }, [dispatch]);

  return (
    <div className='flex flex-col gap-10 lg:flex-row'>
      <form
        className='w-full space-y-5 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-1/3'
        onSubmit={handleSubmit}
      >
        <div className='grid gap-2'>
          <label htmlFor='image' className='text-lg text-neutral-500'>
            Upload Image
          </label>
          <input type='file' name='image' id='image' hidden onChange={imageHandleChange} />
          <label htmlFor='image'>
            <img src={assets.addIcon} alt='add icon' className='cursor-pointer' />
          </label>
        </div>
        <div className='grid gap-1'>
          <label htmlFor='name' className='text-lg text-neutral-500'>
            Food Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='food name'
            className='primaryInput'
            value={state.name}
            onChange={handleChange}
          />
        </div>
        <div className='grid gap-1'>
          <label htmlFor='desc' className='text-lg text-neutral-500'>
            Food Description
          </label>
          <textarea
            name='description'
            id='description'
            placeholder='food description'
            rows={8}
            className='primaryInput'
            value={state.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className='flex w-full flex-col gap-5 lmo:flex-row'>
          <div className='grid w-full gap-1'>
            <label htmlFor='category' className='text-lg text-neutral-500'>
              Food Category
            </label>
            {!isError && !isLoading && (categorise || []).length > 0 && (
              <select
                name='category'
                id='category'
                className='primaryInput'
                value={state.category}
                onChange={handleChange}
              >
                <option value=''>Select Category</option>
                {categorise?.map((category: CategoryItemType) => (
                  <option key={category._id} value={category.category}>
                    {category.name}
                  </option>
                ))}
              </select>
            )}
          </div>
          <div className='grid w-full gap-1'>
            <label htmlFor='price' className='text-lg text-neutral-500'>
              Food Price
            </label>
            <input
              type='number'
              name='price'
              id='price'
              placeholder='food price'
              className='primaryInput'
              value={state.price}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type='submit' className='bgBlackBtn inline-block px-10'>
          Add
        </button>
      </form>
      <div className='w-full p-5 sm:w-[640px]'>
        <h2 className='mb-8 text-2xl font-semibold'>Live Preview</h2>
        <FoodDisplayItem foodItem={{ ...state, rating: 0 }} />
      </div>
    </div>
  );
};

export default AddItem;
