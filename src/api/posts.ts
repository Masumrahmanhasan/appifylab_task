'use server'
import apiClient from "@/api/client";
import { Post, CreatePostData, Comment } from "@/api/types/post";
import { PaginatedResponse, ApiResponse } from "@/api/types/api";

export async function getPosts(page: number = 1): Promise<PaginatedResponse<Post>> {
  const { data } = await apiClient.get('/posts', {
    params: { page }
  });
  return data;
}

export async function getPost(id: number): Promise<ApiResponse<Post>> {
  const { data } = await apiClient.get(`/posts/${id}`);
  return data;
}

export async function createPost(postData: CreatePostData): Promise<ApiResponse<Post>> {
  const { data } = await apiClient.post('/posts', postData);
  return data;
}

export async function updatePost(id: number, postData: Partial<CreatePostData>): Promise<ApiResponse<Post>> {
  const { data } = await apiClient.put(`/posts/${id}`, postData);
  return data;
}

export async function deletePost(id: number): Promise<ApiResponse<void>> {
  const { data } = await apiClient.delete(`/posts/${id}`);
  return data;
}

export async function getPostComments(postId: number): Promise<ApiResponse<Comment[]>> {
  const { data } = await apiClient.get(`/posts/${postId}/comments`);
  return data;
}

export async function createComment(postId: number, content: string): Promise<ApiResponse<Comment>> {
  const { data } = await apiClient.post(`/posts/${postId}/comments`, { content });
  return data;
}
