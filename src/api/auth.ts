'use server'
import apiClient from "@/api/client";
import {LoginCredentials, RegisterCredentials, User, AuthResponse} from "@/api/types/auth";
import {ApiResponse} from "@/api/types/api";
import {cookies} from "next/headers";

// Cookie options extracted to avoid recreation on each call
const COOKIE_OPTIONS = {
	httpOnly: true,
	secure: process.env.NODE_ENV === 'production',
	sameSite: 'lax' as const,
	path: '/',
	maxAge: 60 * 60 * 24 * 7, // 1 week
} as const;

// Internal helper to set auth cookie
async function setAuthCookie(token: string) {
	const cookieStore = await cookies();
	cookieStore.set('auth_token', token, COOKIE_OPTIONS);
}

// Internal helper to handle auth response (extract token and set cookie)
async function handleAuthResponse(data: AuthResponse): Promise<User> {
	console.log('auth_token: ' + data.data.token);
	await setAuthCookie(data.data.token);
	const user = await getCurrentUser(data.data.token);
	if (!user) {
		throw new Error('Failed to fetch user data after authentication');
	}
	return user;
}


export async function loginUser(credentials: LoginCredentials): Promise<User> {
	
	const { data } = await apiClient.post('/auth/login', credentials);
	if (data.status === 'error') {
		throw data;
	}
	return handleAuthResponse(data)
}

export async function registerUser(credentials: RegisterCredentials): Promise<User> {
	const { data } = await apiClient.post('/auth/register', credentials);
	return handleAuthResponse(data);
}

export async function logoutUser(): Promise<void> {
	// Start both operations concurrently for better performance
	const cookieStorePromise = cookies();
	const logoutPromise = apiClient.post('/auth/logout');

	// Wait for logout to complete (though we'll clean cookie regardless)
	await logoutPromise;

	// Delete cookie - matching how it's done elsewhere in the codebase
	const cookieStore = await cookieStorePromise;
	cookieStore.delete('auth_token');
}

export async function getCurrentUser(token?: string): Promise<User | null> {
	try {
		const headers: Record<string, string> = {};
		if (token) {
			headers['Authorization'] = `Bearer ${token}`;
		}
		// Because we set headers.Authorization, the interceptor will skip reading cookies
		const { data } = await apiClient.get('/user', { headers });
		return data;
	} catch {
		return null;
	}
}
