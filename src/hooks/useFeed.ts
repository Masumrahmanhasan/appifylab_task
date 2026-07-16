'use client'
import { useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getPosts, createPost } from '@/api/posts';
import { Post, CreatePostData } from '@/api/types/post';
import toast from 'react-hot-toast';

interface FeedResponse {
  success: boolean;
  data: {
    current_page: number;
    data: Post[];
    first_page_url: string;
    from: number;
    last_page: number;
    last_page_url: string;
    links: any[];
    next_page_url: string | null;
    path: string;
    per_page: number;
    prev_page_url: string | null;
    to: number;
    total: number;
  };
  message: string;
}

export function useFeed() {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 1 }) => {
      const response = await getPosts(pageParam);
      console.log(response)
      return response;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage: FeedResponse) => {
      if (lastPage.data.current_page < lastPage.data.last_page) {
        return lastPage.data.current_page + 1;
      }
      return undefined;
    },
  });
}

export function usePost() {
  const queryClient = useQueryClient();

  const createPostMutation = useMutation({
    mutationFn: (postData: CreatePostData) => createPost(postData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
      toast.success('Post created successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create post');
    },
  });

  return {
    createPost: createPostMutation.mutate,
    isCreating: createPostMutation.isPending,
  };
}
