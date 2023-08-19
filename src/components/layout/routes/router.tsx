import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root } from '@/components/layout';
import { BusinessList, BusinessListTwo, ErrorPage } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'business-list',
        element: <BusinessList />,
      },
    ],
  },
  {
    path: 'business-list-two',
    element: <BusinessListTwo />,
  },
]);

const Router = () => {
  return <RouterProvider router={router} />;
};

export default Router;
