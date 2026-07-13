import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { cookies } from 'next/headers';

const apiClient = axios.create({
	baseURL: process.env.LARAVEL_API_URL,
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	timeout: 15000
})

apiClient.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		const cookieStore = await cookies();
		const token = cookieStore.get('auth_token')?.value;
	  if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	  }
	  return config;
	},
	(error) => Promise.reject(error)
  );

  // Response interceptor - handle 401
apiClient.interceptors.response.use(
	(response) => response,
	async (error: AxiosError) => {
	  if (error.response?.status === 401) {
		  const cookieStore = await cookies();
		  cookieStore.delete('auth_token');
		if (typeof window !== 'undefined') {
		  window.location.href = '/login';
		}
	  }
	  return Promise.reject(error);
	}
  );

export default apiClient;
