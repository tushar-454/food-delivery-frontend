import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Cart from '../pages/Cart';
import Home from '../pages/Home';

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
    ],
  },
]);

export default Routes;
