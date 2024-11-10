import { usePath } from '@/common/hooks/usePath';
import LayoutHeader from '@/layouts/components/LayoutHeader';
import { Flex, Spin } from 'antd';
import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { darkThemeStoreState } from '@/common/stores/ThemeStore';
import '@/styles/layout.scss';
import classNames from 'classnames';
import { useRecoilValue } from 'recoil';

const Layout = () => {
  usePath('/dashboard');
  const themeStore = useRecoilValue(darkThemeStoreState);

  useEffect(() => {
    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.classList.toggle('dark-theme', themeStore);
      bodyElement.classList.toggle('light-theme', !themeStore);
    }
  }, [themeStore]);

  return (
    <div className={classNames('layout')}>
      <Flex className='w-full h-full' vertical gap={16}>
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
    </div>
  );
};

export default Layout;
