import apiClient from "@/api/client";
import {LoginCredentials, AuthResponse} from "@/api/types/auth";
import {ApiResponse} from "@/api/types/api";

export const authApi = {
	login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => {
		const { data } = await apiClient.post('/auth/login', credentials);
		return data;
	},
}