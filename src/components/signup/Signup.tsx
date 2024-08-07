import { useState } from 'react';
import toast from 'react-hot-toast';
import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { signupUser } from '../../api/auth';
import { login, signup } from '../../features/publicState/publicStateSlices';
import { AppDispatch } from '../../store/store';
import { SignupResponse } from '../../types/authSlicesTypes';

const Signup = () => {
  const [state, setState] = useState({ name: '', email: '', password: '' });
  const dispatch = useDispatch<AppDispatch>();

  // handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // handle user signup function
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await dispatch(
      signupUser({
        name: state.name,
        email: state.email,
        password: state.password,
      }),
    );
    if ((res.payload as SignupResponse).status === 201) {
      toast.success('Signup successful. Login to continue');
      handleGotoLogin();
    }
  };

  const handleGotoLogin = () => {
    dispatch(signup());
    dispatch(login());
  };
  return (
    <section className='fixed left-0 top-0 h-full w-full bg-[#00000099]'>
      <div className='grid w-full place-content-center'>
        {/* Signup divition  */}
        <div className='slowDownToptoBottom mt-32 w-full rounded-lg bg-white p-4 py-5 mmo:w-[375px]'>
          {/* title and cross icon  */}
          <div className='flex w-full items-center justify-between'>
            <h2 className='text-2xl font-bold'>Signup</h2>
            <span>
              <RxCross2 onClick={() => dispatch(signup())} className='cursor-pointer text-2xl' />
            </span>
          </div>
          {/* Signup form  */}
          <form className='my-5 space-y-4' onSubmit={handleSignup}>
            <input
              type='text'
              name='name'
              placeholder='Your name'
              className='primaryInput'
              value={state.name}
              onChange={handleChange}
            />
            <input
              type='email'
              name='email'
              placeholder='Your email'
              className='primaryInput'
              value={state.email}
              onChange={handleChange}
            />
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='primaryInput'
              value={state.password}
              onChange={handleChange}
            />
            <button type='submit' className='bgOrangeBtn my-10 block w-full'>
              Signup
            </button>
            <input
              type='checkbox'
              name='termsCondition'
              id='termsCondition'
              className='cursor-pointer accent-orange-500'
            />
            <label htmlFor='termsCondition' className='ml-2 cursor-pointer select-none'>
              By continuing. I agree to the terms of use & privacy policy
            </label>
          </form>
          <p>
            Already have an account?{' '}
            <span onClick={handleGotoLogin} className='cursor-pointer text-orange-500'>
              Click here
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
