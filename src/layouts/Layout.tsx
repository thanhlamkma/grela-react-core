import { usePath } from '@/common/hooks/usePath';
import LayoutHeader from '@/layouts/components/LayoutHeader';
import { Flex, Spin } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { themeStoreState } from '@/common/stores/ThemeStore';
import '@/styles/layout.scss';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';

const Layout = () => {
  usePath('/dashboard');
  const themeStore = useRecoilValue(themeStoreState);

  return (
    <Flex
      vertical
      className={classNames('layout', themeStore ? 'dark-theme' : 'light-theme')}
      gap={16}
    >
      <LayoutHeader />

      <div className='layout-body'>
        <Suspense
          fallback={
            <Spin
              className='absolute z-[99999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '
              spinning
            />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </Flex>
  );
};

export default Layout;
