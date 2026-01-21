# React + TypeScript Boilerplate

A modern React boilerplate with TypeScript, featuring a clean architecture following Feature Sliced Design principles.

## 🚀 Technologies

- **[Vite](https://vitejs.dev/)** - Fast build tool and development server
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and better developer experience
- **[React 19](https://react.dev/)** - UI library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework with `@tailwindcss/vite`
- **[React Router](https://reactrouter.com/)** - Client-side routing
- **[TanStack React Query](https://tanstack.com/query)** - Data fetching and state management
- **[Axios](https://axios-http.com/)** - HTTP client for API requests
- **[react-i18next](https://react.i18next.com/)** - Internationalization framework
- **[vite-plugin-mock-dev-server](https://vite-plugin-mock-dev-server.netlify.app/)** - Mock API server for development
- **[Prettier](https://prettier.io/)** - Code formatter

## 📁 Project Structure

This project follows **[Feature Sliced Design](https://feature-sliced.design/)** architecture:

```
src/
├── app/                 # Application-wide setup
│   ├── providers/       # Context providers (Query, Router)
│   ├── routes/          # Routing configuration
│   ├── styles/          # Global styles
│   └── App.tsx          # Root component
├── pages/               # Page components
│   ├── HomePage.tsx     # Home page example
│   └── PostsPage.tsx    # Posts management page (CRUD example)
├── features/            # Feature-specific modules
│   ├── counter/         # Example counter feature
│   └── posts/           # Posts management feature (CRUD example)
│       ├── model/       # Business logic (hooks)
│       ├── ui/          # UI components
│       └── index.ts     # Public API
├── entities/            # Business entities
│   ├── user/            # User entity
│   └── post/            # Post entity
└── shared/              # Shared resources
    ├── ui/              # Shared UI components
    ├── api/             # Axios API client & API services
    ├── lib/             # Utility functions
    └── config/          # Configuration (i18n, locales)
        └── locales/     # Translation files (en.json, ko.json)

mock/                    # Mock API definitions
└── posts.mock.ts        # Posts CRUD mock endpoints
```

## ⚙️ Path Alias

The project uses path alias `@` pointing to `/src` for cleaner imports:

```typescript
// Instead of: import { Button } from '../../../shared/ui/Button'
import { Button } from '@/shared/ui/Button';
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/wndgur2/boilerplate-react.git
cd boilerplate-react
```

2. Install dependencies:

```bash
npm install
```

3. Copy environment variables:

```bash
cp .env.example .env
```

4. Start development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run format` - Format code with Prettier

## 🌍 Internationalization

The boilerplate includes i18n support with English and Korean translations. Toggle between languages using the button on the home page.

Translation files are organized by language in `src/shared/config/locales/`:

- `en.json` - English translations
- `ko.json` - Korean translations

Add new translations by creating new JSON files in the locales directory and importing them in `src/shared/config/i18n.ts`.

## 🎨 Styling

This project uses Tailwind CSS v4 with the Vite plugin. The configuration is automatically loaded from `@import 'tailwindcss'` in the CSS file.

## 📦 API Client

An Axios-based API client is provided in `src/shared/api/client.ts` with configured interceptors for requests and responses. Use it with React Query for data fetching:

```typescript
import { useQuery } from '@tanstack/react-query';

import { apiClient } from '@/shared/api';

const { data } = useQuery({
  queryKey: ['example'],
  queryFn: () => apiClient.get('/endpoint'),
});
```

The API client includes:

- Request/response interceptors for auth tokens and error handling
- Methods: `get`, `post`, `put`, `patch`, `delete`
- Default timeout and base URL configuration

## 🎭 Mock API Server

This boilerplate includes a mock API server powered by `vite-plugin-mock-dev-server` for development. The mock server allows you to develop and test your frontend without needing a real backend.

### Features

- **No Backend Required**: Develop your frontend independently
- **Hot Module Replacement**: Mock data updates instantly during development
- **CRUD Operations**: Full Create, Read, Update, Delete examples
- **TypeScript Support**: Type-safe mock definitions

### Example: Posts CRUD API

The project includes a complete CRUD example with Posts:

- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a single post
- `POST /api/posts` - Create a new post
- `PUT /api/posts/:id` - Update a post
- `DELETE /api/posts/:id` - Delete a post

Visit the **Posts Management** page (accessible from the home page) to see the CRUD operations in action.

### Creating Mock Endpoints

Mock API endpoints are defined in the `mock/` directory. Here's a simple example:

```typescript
import { defineMock } from 'vite-plugin-mock-dev-server';

export default defineMock([
  {
    url: '/api/example',
    method: 'GET',
    body: { message: 'Hello from mock API!' },
  },
]);
```

For more information, see the [vite-plugin-mock-dev-server documentation](https://vite-plugin-mock-dev-server.netlify.app/).

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
