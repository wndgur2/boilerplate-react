import { useNavigate } from 'react-router-dom';

import { ROUTES } from '@/app/routes/routes';
import { PostsManager } from '@/features/posts';
import { Button } from '@/shared/ui';

export const PostsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8">
          <Button
            onClick={() => navigate(ROUTES.HOME)}
            variant="secondary"
            className="mb-4"
          >
            ← Back to Home
          </Button>
          <div className="text-center">
            <h1 className="mb-2 text-4xl font-bold text-gray-800">
              Posts Management
            </h1>
            <p className="text-lg text-gray-600">
              Mock API Server CRUD Example using vite-plugin-mock-dev-server
            </p>
          </div>
        </div>
        <PostsManager />
      </div>
    </div>
  );
};
