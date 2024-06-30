import { Outlet } from 'react-router-dom';
import StarsBackground from '../../components/Background';

const Layout = () => {
  return (
    <div>
      <StarsBackground />
      <Outlet />
    </div>
  );
};

export default Layout;
