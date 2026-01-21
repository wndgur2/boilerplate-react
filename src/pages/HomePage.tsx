import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/app/routes/routes';
import { User, UserCard } from '@/entities/user';
import { Counter } from '@/features/counter';
import { Button } from '@/shared/ui';

export const HomePage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  };

  // Example user entity data
  const exampleUser: User = {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'admin',
    createdAt: new Date('2024-01-01'),
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="w-full max-w-2xl rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          {t('welcome')}
        </h1>
        <p className="mb-6 text-lg text-gray-600">{t('description')}</p>

        <div className="space-y-4">
          <div className="rounded-lg bg-blue-50 p-4">
            <h2 className="mb-2 text-xl font-semibold text-blue-900">
              Technologies
            </h2>
            <ul className="list-inside list-disc space-y-1 text-blue-800">
              <li>Vite - Fast build tool</li>
              <li>Tailwind CSS - Utility-first CSS framework</li>
              <li>React Router - Client-side routing</li>
              <li>TanStack React Query - Data fetching and caching</li>
              <li>react-i18next - Internationalization</li>
              <li>TypeScript - Type safety</li>
              <li>vite-plugin-mock-dev-server - Mock API server</li>
            </ul>
          </div>

          <div className="rounded-lg bg-indigo-50 p-4">
            <h2 className="mb-2 text-xl font-semibold text-indigo-900">
              Architecture
            </h2>
            <p className="text-indigo-800">
              This project follows Feature Sliced Design (FSD) architecture for
              better scalability and maintainability.
            </p>
          </div>

          <div className="rounded-lg bg-green-50 p-4">
            <h2 className="mb-3 text-xl font-semibold text-green-900">
              User Entity Example
            </h2>
            <UserCard user={exampleUser} />
          </div>

          <Counter />

          <div className="rounded-lg bg-purple-50 p-4">
            <h2 className="mb-2 text-xl font-semibold text-purple-900">
              Mock API Example
            </h2>
            <p className="mb-3 text-purple-800">
              Try out the CRUD operations with a mock API server powered by
              vite-plugin-mock-dev-server
            </p>
            <Button
              onClick={() => navigate(ROUTES.POSTS)}
              variant="primary"
              className="w-full"
            >
              View Posts Manager →
            </Button>
          </div>

          <Button
            onClick={toggleLanguage}
            variant="primary"
            size="lg"
            className="w-full shadow-md hover:shadow-lg"
          >
            Switch Language ({i18n.language === 'en' ? 'Korean' : 'English'})
          </Button>
        </div>
      </div>
    </div>
  );
};
