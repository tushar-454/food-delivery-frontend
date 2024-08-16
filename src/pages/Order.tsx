import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../api/auth';
import CartTotal from '../components/shared/CartTotal';
import Container from '../components/shared/Container';
import { AppDispatch, RootState } from '../store/store';
import { UpdateProfileInitialState } from '../types/authSlicesTypes';

const initialState: UpdateProfileInitialState = {
  fName: '',
  lName: '',
  street: '',
  city: '',
  state: '',
  zip: '',
  country: '',
  place: '',
};

const Order = () => {
  const carts = useSelector((state: RootState) => state.cart.carts);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const [profile, setProfile] = useState({ ...initialState });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleUpdateProfile = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { fName, lName, city, country, place, street, zip, state } = profile;

    const updateData = {
      name: `${fName} ${lName}`,
      city: city,
      country: country,
      place: place,
      street: street,
      zip: zip,
      state: state,
    };
    if (user) await dispatch(updateProfile({ id: user?._id, data: updateData }));
  };

  useEffect(() => {
    if (user) {
      const fName = user?.name.split(' ')[0];
      const lName = user?.name.split(' ')[1];
      if (user.address) {
        const { city, country, place, street, zip, state } = user.address;
        return setProfile({
          ...initialState,
          fName,
          lName,
          city,
          country,
          place,
          street,
          zip,
          state,
        });
      }
      setProfile({ ...initialState, fName, lName });
    }
  }, [user]);

  return (
    <section>
      <Container>
        {/* order wrapper  */}
        <div className='mb-32 mt-20 flex flex-col justify-center gap-10 lg:flex-row'>
          {/* Delivery information  */}
          <div className='w-full lg:w-1/2'>
            <h2 className='mb-5 text-2xl font-semibold'> Delivery Information</h2>
            <form className='space-y-4 lg:w-[500px]' onSubmit={handleUpdateProfile}>
              <div className='flex flex-col gap-4 mmo:flex-row'>
                <input
                  type='text'
                  name='fName'
                  id='fName'
                  placeholder='First name'
                  className='primaryInput'
                  value={profile.fName}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='lName'
                  id='lName'
                  placeholder='Last name'
                  className='primaryInput'
                  value={profile.lName}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email address'
                className='primaryInput'
                disabled
                value={user?.email}
              />
              <input
                type='text'
                name='street'
                id='street'
                placeholder='Street'
                className='primaryInput'
                value={profile.street}
                onChange={handleInputChange}
              />
              <div className='flex flex-col gap-4 mmo:flex-row'>
                <input
                  type='text'
                  name='city'
                  id='city'
                  placeholder='city'
                  className='primaryInput'
                  value={profile.city}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='state'
                  id='state'
                  placeholder='state'
                  className='primaryInput'
                  value={profile.state}
                  onChange={handleInputChange}
                />
              </div>
              <div className='flex flex-col gap-4 mmo:flex-row'>
                <input
                  type='text'
                  name='zip'
                  id='zip'
                  placeholder='zip code'
                  className='primaryInput'
                  value={profile.zip}
                  onChange={handleInputChange}
                />
                <input
                  type='text'
                  name='country'
                  id='country'
                  placeholder='Country'
                  className='primaryInput'
                  value={profile.country}
                  onChange={handleInputChange}
                />
              </div>
              <input
                type='text'
                name='place'
                id='place'
                placeholder='Place'
                className='primaryInput'
                value={profile.place}
                onChange={handleInputChange}
              />
              <button className='bgBlackBtn'>Update Profile</button>
            </form>
          </div>
          {/* cart total  */}
          <CartTotal asUse='order' cart={carts} />
        </div>
      </Container>
    </section>
  );
};

export default Order;
