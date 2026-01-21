import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      welcome: 'Welcome to React with TypeScript',
      description:
        'This is a boilerplate with Vite, Tailwind CSS, React Router, React Query, and i18n',
    },
  },
  ko: {
    translation: {
      welcome: 'React TypeScript에 오신 것을 환영합니다',
      description:
        'Vite, Tailwind CSS, React Router, React Query 및 i18n이 포함된 보일러플레이트입니다',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
