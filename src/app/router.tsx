import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages';
import { ROUTES } from './routes';

/**
 * Application router configuration
 * Uses createBrowserRouter for enhanced routing capabilities
 */
export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <HomePage />,
  },
]);
