'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/auth-store';
import { loginUser, registerUser, logoutUser, getCurrentUser } from '@/api/auth';
import {LoginCredentials, RegisterCredentials} from "@/api/types/auth";
import toast from "react-hot-toast";

export function useAuth() {
	const router = useRouter();
	const queryClient = useQueryClient();
	const { setAuth, logout: storeLogout, setUser, setLoading, isAuthenticated, user } = useAuthStore();
	
	const { isLoading: isUserLoading } = useQuery({
		queryKey: ['auth-user'],
		queryFn: async () => {
			const user = await getCurrentUser();
			if (user) {
				setAuth(user);
			} else {
				setLoading(false);
			}
			return user;
		},
		staleTime: 5 * 60 * 1000,
		retry: false,
		enabled: !user,
	});
	
	// Login mutation
	const loginMutation = useMutation({
		mutationFn: (credentials: LoginCredentials) => {
			console.log('🔥 mutationFn called:', credentials)
			return loginUser(credentials)
		},
		onSuccess: async (user) => {
			setAuth(user);
			await queryClient.invalidateQueries({ queryKey: ['auth-user'] });
			router.push('/feed');
		},
		onError: (error: any) => {
			toast.error(error.message)
			console.log('loginMutation error: ', error.response);
		},
	});
	
	// Register mutation
	const registerMutation = useMutation({
		mutationFn: (credentials: RegisterCredentials) => registerUser(credentials),
		onSuccess: async (user) => {
			setAuth(user);
			await queryClient.invalidateQueries({ queryKey: ['auth-user'] });
			router.push('/feed');
		},
		onError: (error: any) => {
			console.log('registerMutation error: ' + error.message);
		},
	});
	
	// Logout mutation
	const logoutMutation = useMutation({
		mutationFn: logoutUser,
		onSuccess: () => {
			storeLogout();
			queryClient.clear();
		},
		onError: () => {
			storeLogout();
			queryClient.clear();
			router.push('/login');
		},
	});
	
	return {
		user: user,
		isAuthenticated,
		isLoading: isUserLoading,
		login: loginMutation.mutate,
		isLoginPending: loginMutation.isPending,
		register: registerMutation.mutate,
		isRegisterPending: registerMutation.isPending,
		logout: logoutMutation.mutate,
		isLogoutPending: logoutMutation.isPending,
	};
}