import axios, { AxiosError, InternalAxiosRequestConfig } from "axios";
import { cookies } from 'next/headers';
import https from 'https'

const apiClient = axios.create({
	baseURL: 'https://appifylab_backend.test/api/v1',
	headers: {
		'Content-Type': 'application/json',
		'Accept': 'application/json',
	},
	timeout: 15000,
	httpsAgent: new https.Agent({
		rejectUnauthorized: false, // ✅ dev: allow self-signed
	}),
})

apiClient.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		if (config.headers.Authorization) {
			return config;
		}
		
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
		  throw new Error('Unauthorized');
	  }
	  return Promise.reject(error);
	}
  );

export default apiClient;
