import { RxCross2 } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { login, signup } from '../../features/publicState/publicStateSlices';

const Login = () => {
  const dispatch = useDispatch();
  const handleGotoSignup = () => {
    dispatch(login());
    dispatch(signup());
  };
  return (
    <section className='fixed left-0 top-0 h-full w-full bg-[#00000099]'>
      <div className='grid w-full place-content-center'>
        {/* login divition  */}
        <div className='slowDownToptoBottom mt-32 w-full rounded-lg bg-white p-4 py-5 mmo:w-[375px]'>
          {/* title and cross icon  */}
          <div className='flex w-full items-center justify-between'>
            <h2 className='text-2xl font-bold'>Login</h2>
            <span>
              <RxCross2 onClick={() => dispatch(login())} className='cursor-pointer text-2xl' />
            </span>
          </div>
          {/* login form  */}
          <form className='my-5 space-y-4'>
            <input type='email' name='email' placeholder='Your email' className='primaryInput' />
            <input
              type='password'
              name='password'
              placeholder='Password'
              className='primaryInput'
            />
            <button type='submit' className='bgOrangeBtn my-10 block w-full'>
              Login
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
            Create a new account?{' '}
            <span onClick={handleGotoSignup} className='cursor-pointer text-orange-500'>
              Click here
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
