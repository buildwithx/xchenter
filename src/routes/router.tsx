import Home from '@/app/home/home';
import App from '@/app/shell/app';
import { createBrowserRouter } from 'react-router';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
