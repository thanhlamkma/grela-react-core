import { usePath } from '@/common/hooks/usePath';
import { Outlet } from 'react-router-dom';

const LayoutAuth = () => {
  usePath('/dashboard');

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
