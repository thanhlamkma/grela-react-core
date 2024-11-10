import { authStoreState } from '@/common/stores/AuthStore';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

export const usePath = (path: string) => {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const { isAuthenticated } = useRecoilValue(authStoreState);

  useEffect(() => {
    if (isAuthenticated && (pathname === '/auth/sign-in' || pathname === '/')) {
      navigate(path, { replace: true });
    }
  }, [path, isAuthenticated, pathname, navigate]);

  return {
    navigate,
    pathname,
    search,
    isAuthenticated
  };
};
