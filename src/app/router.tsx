import { createBrowserRouter } from 'react-router-dom';

import Pages from '@/pages';
import { ROUTES } from './routes';

/**
 * Application router configuration
 * Uses createBrowserRouter for enhanced routing capabilities
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Pages.HomePage />,
  },
]);
