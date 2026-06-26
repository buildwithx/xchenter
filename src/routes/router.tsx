import Dashboard from '@/app/dashboard/dashboard';
import App from '@/app/shell/app';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        Component: Dashboard,
      },
    ],
  },
]);
