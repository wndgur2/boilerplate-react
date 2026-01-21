import { useState } from 'react';

import { Post } from '@/entities/post';
import { Button } from '@/shared/ui';
import {
  useCreatePost,
  useDeletePost,
  usePosts,
  useUpdatePost,
} from '../model';

export const PostsManager = () => {
  const { data: posts, isLoading, error } = usePosts();
  const createPost = useCreatePost();
  const updatePost = useUpdatePost();
  const deletePost = useDeletePost();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
    author: '',
  });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title || !formData.content || !formData.author) {
      alert('Please fill in all fields');
      return;
    }

    if (editingId) {
      await updatePost.mutateAsync({
        id: editingId,
        data: formData,
      });
      setEditingId(null);
    } else {
      await createPost.mutateAsync(formData);
    }

    setFormData({ title: '', content: '', author: '' });
  };

  const handleEdit = (post: Post) => {
    setEditingId(post.id);
    setFormData({
      title: post.title,
      content: post.content,
      author: post.author,
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', content: '', author: '' });
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure you want to delete this post?')) {
      await deletePost.mutateAsync(id);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-lg text-gray-600">Loading posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-lg bg-red-50 p-4 text-red-800">
        Error loading posts: {error.message}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Form */}
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          {editingId ? 'Edit Post' : 'Create New Post'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="title"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={formData.title}
              onChange={e =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Content
            </label>
            <textarea
              id="content"
              value={formData.content}
              onChange={e =>
                setFormData({ ...formData, content: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter post content"
              rows={4}
            />
          </div>

          <div>
            <label
              htmlFor="author"
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              Author
            </label>
            <input
              id="author"
              type="text"
              value={formData.author}
              onChange={e =>
                setFormData({ ...formData, author: e.target.value })
              }
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              placeholder="Enter author name"
            />
          </div>

          <div className="flex gap-2">
            <Button
              type="submit"
              variant="primary"
              disabled={createPost.isPending || updatePost.isPending}
            >
              {editingId ? 'Update Post' : 'Create Post'}
            </Button>
            {editingId && (
              <Button
                type="button"
                variant="secondary"
                onClick={handleCancelEdit}
              >
                Cancel
              </Button>
            )}
          </div>
        </form>
      </div>

      {/* Posts List */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Posts</h2>
        {posts && posts.length === 0 ? (
          <div className="rounded-lg bg-gray-50 p-8 text-center text-gray-600">
            No posts yet. Create your first post above!
          </div>
        ) : (
          <div className="space-y-4">
            {posts?.map(post => (
              <div
                key={post.id}
                className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
              >
                <div className="mb-2 flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {post.title}
                  </h3>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => handleEdit(post)}
                      disabled={deletePost.isPending}
                    >
                      Edit
                    </Button>
                    <Button
                      size="sm"
                      variant="danger"
                      onClick={() => handleDelete(post.id)}
                      disabled={deletePost.isPending}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
                <p className="mb-3 text-gray-600">{post.content}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {post.author}</span>
                  <span>
                    {new Date(post.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
