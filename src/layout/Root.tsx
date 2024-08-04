import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <header>Header</header>
      <Outlet />
      <footer>Footer</footer>
    </>
  );
};

export default Root;
