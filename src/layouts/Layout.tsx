import { usePath } from '@/common/hooks/usePath';
import LayoutHeader from '@/layouts/components/LayoutHeader';
import { Flex, Spin } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import './styles/layout.scss';

const Layout = () => {
  usePath('/dashboard');

  return (
    <Flex vertical className='layout' gap={12}>
      <LayoutHeader />

      <div className='relative flex-1'>
        <Suspense
          fallback={
            <Spin className='absolute z-[99999] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' spinning />
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </Flex>
  );
};

export default Layout;
