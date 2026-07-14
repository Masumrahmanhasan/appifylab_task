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
	await setAuthCookie(data.token);
	return data.user;
}


export async function loginUser(credentials: LoginCredentials): Promise<User> {
	console.log('loginUser called with:', credentials);
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

export async function getCurrentUser(): Promise<User | null> {
	try {
		const { data } = await apiClient.get('/auth/user');
		return data;
	} catch {
		return null;
	}
}
