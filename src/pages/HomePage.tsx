import { useTranslation } from 'react-i18next';

export const HomePage = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {t('welcome')}
        </h1>
        <p className="text-lg text-gray-600 mb-6">{t('description')}</p>

        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-900 mb-2">
              Technologies
            </h2>
            <ul className="list-disc list-inside text-blue-800 space-y-1">
              <li>Vite - Fast build tool</li>
              <li>Tailwind CSS - Utility-first CSS framework</li>
              <li>React Router - Client-side routing</li>
              <li>TanStack React Query - Data fetching and caching</li>
              <li>react-i18next - Internationalization</li>
              <li>TypeScript - Type safety</li>
            </ul>
          </div>

          <div className="bg-indigo-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold text-indigo-900 mb-2">
              Architecture
            </h2>
            <p className="text-indigo-800">
              This project follows Feature Sliced Design (FSD) architecture for
              better scalability and maintainability.
            </p>
          </div>

          <button
            onClick={toggleLanguage}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-md hover:shadow-lg"
          >
            Switch Language ({i18n.language === 'en' ? 'Korean' : 'English'})
          </button>
        </div>
      </div>
    </div>
  );
};
