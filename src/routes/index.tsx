import LayoutAuth from '@/layouts/LayoutAuth';
import About from '@/pages/about/About';
import SignIn from '@/pages/auth/SignIn';
import Dashboard from '@/pages/dashboard/Dashboard';
import ProtectedRoute from '@/routes/ProtectedRoute';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <ProtectedRoute />,
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
  },
  {
    path: '/auth',
    element: <LayoutAuth />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />
      }
    ]
  }
]);

export default router;
