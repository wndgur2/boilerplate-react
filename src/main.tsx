import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { QueryProvider, RouterProvider } from './app/providers';
import './app/styles/index.css';
import './shared/config/i18n';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </QueryProvider>
  </StrictMode>
);
