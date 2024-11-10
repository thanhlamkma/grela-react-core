import { authStoreState } from '@/common/stores/AuthStore';
import Layout from '@/layouts/Layout';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

const ProtectedRoute = () => {
  const { isAuthenticated } = useRecoilValue(authStoreState);

  if (!isAuthenticated) {
    return <Navigate to='/auth/sign-in' replace />;
  }

  return <Layout />;
};

export default ProtectedRoute;
