import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import assets from '../../assets/assets';
import Container from '../shared/Container';

const Footer = () => {
  return (
    <>
      <footer className='border-b bg-neutral-900 pb-10 pt-20 text-white'>
        <Container>
          {/* footer wrapper  */}
          <div className='grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3'>
            {/* 1st column */}
            <div>
              {/* footer logo */}
              <div className='space-y-5'>
                <Link to='/' onClick={() => scrollTo(0, 0)}>
                  <img src={assets.logo} alt='logo' />
                </Link>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore voluptates eum
                  velit eius itaque ut, optio id reiciendis magni saepe. Dolorem aperiam quaerat
                  magnam beatae? Soluta doloribus nam facilis, deleniti quae aliquid rem dolorum
                  qui! Placeat eum, ipsum, vero a, aut repellat dolor facilis sint earum quo vitae
                  dicta. Animi, suscipit sit deserunt quasi maxime pariatur obcaecati expedita
                  distinctio aliquam. Aliquam eius accusantium vel molestias, consequuntur, commodi
                  quae laudantium voluptate atque quidem iusto cupiditate illo sapiente officiis
                  tempora perferendis
                </p>
                <div className='my-5 flex items-center gap-6'>
                  <a href='/'>
                    <FaFacebook className='text-3xl' />
                  </a>
                  <a href='/'>
                    <FaTwitter className='text-3xl' />
                  </a>
                  <a href='/'>
                    <FaLinkedin className='text-3xl' />
                  </a>
                </div>
              </div>
            </div>
            {/* 2nd column */}
            <div>
              <h3 className='mb-5 text-2xl font-bold'>Company</h3>
              <ul className='space-y-2'>
                <li className='text-lg'>
                  <a href='/'>Home</a>
                </li>
                <li className='text-lg'>
                  <a href='/'>About Us</a>
                </li>
                <li className='text-lg'>
                  <a href='/'>Delivery</a>
                </li>
                <li className='text-lg'>
                  <a href='/'>Privacy Policy</a>
                </li>
              </ul>
            </div>
            {/* 3rd column */}
            <div>
              <h3 className='mb-5 text-2xl font-bold'>Get In Touch</h3>
              <ul className='space-y-2'>
                <li className='text-lg'>
                  <a href='tel:+934730503954'>+934730503954</a>
                </li>
                <li className='text-lg'>
                  <a href='mailto:example@gmail.com'>example@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </footer>
      <footer>
        {/* copyright text */}
        <div className='bg-neutral-900 py-5 text-center text-neutral-400'>
          <p>&copy; 2024 All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
