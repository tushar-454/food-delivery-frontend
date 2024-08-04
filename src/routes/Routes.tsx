import { createBrowserRouter } from 'react-router-dom';
import Root from '../layout/Root';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import MyOrders from '../pages/MyOrders';
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
      {
        path: '/myorders',
        element: <MyOrders />,
      },
    ],
  },
]);

export default Routes;
