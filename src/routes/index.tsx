import AppLayout from '@/layouts/Layout';
import About from '@/pages/about/About';
import Dashboard from '@/pages/dashboard/Dashboard';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  }
]);

export default router;
