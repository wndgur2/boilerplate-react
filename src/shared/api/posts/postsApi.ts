import { CreatePostDto, Post, UpdatePostDto } from '@/entities/post';
import { apiClient } from '../client';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export const postsApi = {
  async getAll(): Promise<Post[]> {
    const response = await apiClient.get<ApiResponse<Post[]>>('/api/posts');
    return response.data || [];
  },

  async getById(id: number): Promise<Post> {
    const response = await apiClient.get<ApiResponse<Post>>(`/api/posts/${id}`);
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Post not found');
    }
    return response.data;
  },

  async create(postData: CreatePostDto): Promise<Post> {
    const response = await apiClient.post<ApiResponse<Post>>(
      '/api/posts',
      postData
    );
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Failed to create post');
    }
    return response.data;
  },

  async update(id: number, postData: UpdatePostDto): Promise<Post> {
    const response = await apiClient.put<ApiResponse<Post>>(
      `/api/posts/${id}`,
      postData
    );
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Failed to update post');
    }
    return response.data;
  },

  async delete(id: number): Promise<Post> {
    const response = await apiClient.delete<ApiResponse<Post>>(
      `/api/posts/${id}`
    );
    if (!response.success || !response.data) {
      throw new Error(response.error || 'Failed to delete post');
    }
    return response.data;
  },
};
