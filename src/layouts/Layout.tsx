import { usePath } from '@/common/hooks/usePath';
import LayoutHeader from '@/layouts/components/LayoutHeader';
import { Flex } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  usePath('/dashboard');

  return (
    <Flex vertical className='w-screen h-screen' gap={12}>
      <LayoutHeader />

      <Suspense fallback='Loading'>
        <Outlet />
      </Suspense>
    </Flex>
  );
};

export default Layout;
