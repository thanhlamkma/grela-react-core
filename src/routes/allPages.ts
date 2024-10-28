import React from 'react';

export const Dashboard = React.lazy(() => delayForDemo(import('@/pages/dashboard/Dashboard')));
export const About = React.lazy(() => delayForDemo(import('@/pages/about/About')));
export const Setting = React.lazy(() => delayForDemo(import('@/pages/setting/Setting')));

function delayForDemo<T>(promise: Promise<T>) {
  return new Promise((resolve) => {
    setTimeout(resolve, 0);
  }).then(() => promise);
}
