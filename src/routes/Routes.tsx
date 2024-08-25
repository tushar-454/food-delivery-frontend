import { createBrowserRouter } from 'react-router-dom';
import AddItem from '../components/dashboard/additem/AddItem';
import ListItems from '../components/dashboard/listitems/ListItems';
import Orders from '../components/dashboard/orders/Orders';
import Admin from '../layout/Admin';
import Root from '../layout/Root';
import Cancel from '../pages/Cancel';
import Cart from '../pages/Cart';
import Failed from '../pages/Failed';
import Home from '../pages/Home';
import MyOrders from '../pages/MyOrders';
import Order from '../pages/Order';
import Search from '../pages/Search';
import Success from '../pages/Success';
import AdminRoute from './AdminRoute';
import NotFound from './NotFound';
import PrivateRoute from './PrivateRoute';

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/cart',
        element: (
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        ),
      },
      {
        path: '/order',
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: '/profile/myorders',
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: '/search',
        element: <Search />,
      },
      {
        path: '/success',
        element: (
          <PrivateRoute>
            <Success />
          </PrivateRoute>
        ),
      },
      {
        path: '/failed',
        element: (
          <PrivateRoute>
            <Failed />
          </PrivateRoute>
        ),
      },
      {
        path: '/cancel',
        element: (
          <PrivateRoute>
            <Cancel />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: '/dashboard',
    element: <Admin />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddItem />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'additem',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AddItem />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'listitems',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ListItems />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: 'orders',
        element: (
          <PrivateRoute>
            <AdminRoute>
              <Orders />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default Routes;
