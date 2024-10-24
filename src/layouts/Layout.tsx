import CoreLoading from '@/core/components/CoreLoading';
import LayoutFooter from '@/layouts/components/LayoutFooter';
import LayoutHeader from '@/layouts/components/LayoutHeader';
import { Flex } from 'antd';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const AppLayout = () => {
  return (
    <Flex vertical className='w-screen h-screen' gap={30}>
      <LayoutHeader />

      <Suspense fallback={<CoreLoading />}>
        <Outlet />
      </Suspense>

      <LayoutFooter />
    </Flex>
  );
};

export default AppLayout;
