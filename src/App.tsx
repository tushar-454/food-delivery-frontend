import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import Routes from './routes/Routes';
import store from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Routes} />
    </Provider>
  );
};

export default App;
