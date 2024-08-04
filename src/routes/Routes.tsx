import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Order from '../pages/Order';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: <Cart />,
      },
      {
        path: '/order',
        element: <Order />,
      },
    ],
  },
]);

export default Routes;
