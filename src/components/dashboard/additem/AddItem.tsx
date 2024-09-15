import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminCategories } from '../../../api/categorise';
import { createFood } from '../../../api/food';
import assets from '../../../assets/assets';
import { updateFoodLocal } from '../../../features/food/foodSlices';
import { setIsEditFormVisible } from '../../../features/publicState/publicStateSlices';
import { AppDispatch, RootState } from '../../../store/store';
import { CategoryItemType } from '../../../types/categoriseSlicesTypes';
import { createFoodItemType } from '../../../types/foodSlicesTypes';
import axios from '../../../utils/axios';
import Rating from '../../../utils/Rating';
import { uploadImage } from '../../../utils/uploadImg';
import Spinner from '../../shared/Spinner';

interface AddItemProps {
  responsible: string;
  id?: string;
}

const initialState: createFoodItemType = {
  image: '',
  name: '',
  description: '',
  category: '',
  price: '',
};

const AddItem: React.FC<AddItemProps> = ({ responsible, id }) => {
  const { isLoading, categorise, isError } = useSelector((state: RootState) => state.categorise);
  const dispatch = useDispatch<AppDispatch>();
  const [state, setState] = useState({ ...initialState });
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [isLPVisible, setIsLPVisible] = useState(false);

  // food item add handle change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
    if (!isLPVisible) setIsLPVisible(true);
  };

  // image handle change
  const imageHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      setImage(files[0]);
      setState({
        ...state,
        image: URL.createObjectURL(files[0]),
      });
    }
  };

  // handle add food item submit
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, category, price } = state;
    if (!name || !description || !category || !price || !image) {
      toast.error('Please fill all the fields');
      return;
    }
    try {
      setLoading(true);
      if (image) {
        const imageUrl = await uploadImage(image);
        const food = { ...state, image: imageUrl };
        const { payload } = await dispatch(createFood(food));
        if (payload.status === 400) {
          toast.error('Please fill all the fields');
          return;
        }
        if (payload.status === 201) {
          setState({ ...initialState });
          setImage(null);
          toast.success('Food item added successfully');
        } else {
          toast.error('Failed to add food item');
        }
      }
    } catch (error) {
      toast.error('Failed to add food item');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // handle food edit
  const handleEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, description, category, price } = state;
    if (!name || !description || !category || !price) {
      toast.error('Please fill all the fields');
      return;
    }
    try {
      setLoading(true);
      let imageUrl = state.image;
      if (image) {
        imageUrl = await uploadImage(image);
      }
      const food = { ...state, image: imageUrl };
      const res = await axios.put(`/admin/food/${id}`, food);
      if (res.status === 400) {
        toast.error('Please fill all the fields');
        return;
      }
      if (res.status === 200) {
        setState({ ...initialState });
        setImage(null);
        dispatch(setIsEditFormVisible());
        dispatch(updateFoodLocal({ _id: id, food }));
        toast.success('Food item update successfully');
      } else {
        toast.error('Failed to update food item');
      }
    } catch (error) {
      toast.error('Failed to add food item');
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (responsible === 'updateFood') {
      const fetchFood = async () => {
        if (id) {
          const res = await axios.get(`/admin/food/${id}`);
          const food = res.data.food;
          setState({
            image: food.image,
            name: food.name,
            description: food.description,
            category: food.category,
            price: food.price,
          });
        }
      };
      fetchFood();
    }
  }, [dispatch, id, responsible]);

  useEffect(() => {
    dispatch(getAdminCategories());
  }, [dispatch]);

  return (
    <div className='flex flex-col gap-10 lg:flex-row'>
      <form
        className='w-full space-y-5 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-1/3'
        onSubmit={(e) => (responsible === 'updateFood' ? handleEdit(e) : handleSubmit(e))}
      >
        <div className='grid gap-2'>
          <label htmlFor='image' className='text-lg text-neutral-500'>
            Upload Image
          </label>
          <input type='file' name='image' id='image' hidden onChange={imageHandleChange} />
          <label htmlFor='image'>
            <img src={assets.addIcon} loading='lazy' alt='add icon' className='cursor-pointer' />
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
        <button type='submit' disabled={loading} className='bgBlackBtn inline-block px-10'>
          {loading ? <Spinner /> : responsible === 'updateFood' ? 'Update Food' : 'Add Food'}
        </button>
      </form>
      {/* live preview here  */}
      {isLPVisible && (
        <div className='w-full p-5 sm:w-[640px]'>
          <h2 className='mb-8 text-2xl font-semibold'>Live Preview</h2>
          <div className='rounded-lg shadow-lg'>
            <div className='relative overflow-hidden'>
              <img
                src={state.image || 'https://via.placeholder.com/640x400'}
                alt={state.name}
                className='h-[300px] w-full rounded-t-lg object-cover transition-all hover:scale-110'
              />
            </div>
            <div className='space-y-2 px-3 py-5'>
              <div className='flex justify-between gap-4'>
                <span className='text-xl font-bold'>{state.name}</span>
                <Rating rating={0} />
              </div>
              <p className='text-neutral-500'>{state.description}</p>
              <p className='text-2xl font-black text-orange-600'>${state.price}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddItem;
