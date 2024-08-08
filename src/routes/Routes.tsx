import { createBrowserRouter } from 'react-router-dom';
import AddItem from '../components/dashboard/additem/AddItem';
import ListItems from '../components/dashboard/listitems/ListItems';
import Orders from '../components/dashboard/orders/Orders';
import Admin from '../layout/Admin';
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
        path: '/profile/myorders',
        element: <MyOrders />,
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Admin />,
    children: [
      {
        index: true,
        element: <AddItem />,
      },
      {
        path: 'additem',
        element: <AddItem />,
      },
      {
        path: 'listitems',
        element: <ListItems />,
      },
      {
        path: 'orders',
        element: <Orders />,
      },
    ],
  },
]);

export default Routes;
