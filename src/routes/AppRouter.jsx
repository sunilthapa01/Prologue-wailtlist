import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import { ROUTES } from './routes';

const WaitlistPage = lazy(() => import('../pages/WaitlistPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: ROUTES.HOME, element: <WaitlistPage /> },
      { path: ROUTES.WAITLIST, element: <WaitlistPage /> },
      { path: ROUTES.PRIVACY, element: <PrivacyPage /> },
      { path: ROUTES.NOT_FOUND, element: <NotFoundPage /> },
    ],
  },
]);

const AppRouter = () => (
  <Suspense fallback={<div />}>
    <RouterProvider router={router} />
  </Suspense>
);

export default AppRouter;
