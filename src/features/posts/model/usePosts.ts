import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { CreatePostDto, UpdatePostDto } from '@/entities/post';
import { postsApi } from '@/shared/api/posts';

const POSTS_QUERY_KEY = 'posts';

export const usePosts = () => {
  return useQuery({
    queryKey: [POSTS_QUERY_KEY],
    queryFn: postsApi.getAll,
  });
};

export const usePost = (id: number) => {
  return useQuery({
    queryKey: [POSTS_QUERY_KEY, id],
    queryFn: () => postsApi.getById(id),
    enabled: !!id,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (postData: CreatePostDto) => postsApi.create(postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [POSTS_QUERY_KEY] });
    },
  });
};

export const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: number; data: UpdatePostDto }) =>
      postsApi.update(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [POSTS_QUERY_KEY] });
    },
  });
};

export const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => postsApi.delete(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [POSTS_QUERY_KEY] });
    },
  });
};
