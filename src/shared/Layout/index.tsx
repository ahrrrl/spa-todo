import { Outlet } from 'react-router-dom';
import StarsBackground from '../../components/Background';

const Layout = () => {
  return (
    <>
      <div className='stars-container'>
        <StarsBackground />
      </div>
      <div className='content-container'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
