'use server'
import apiClient from "@/api/client";
import {LoginCredentials, RegisterCredentials, User, AuthResponse} from "@/api/types/auth";
import {ApiResponse} from "@/api/types/api";
import {cookies} from "next/headers";

async function setAuthCookie(token: string) {
	const cookieStore = await cookies();
	cookieStore.set('auth_token', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite: 'lax',
		path: '/',
		maxAge: 60 * 60 * 24 * 7,
	});
}

export async function loginUser(credentials: LoginCredentials): Promise<User> {
	const { data } = await apiClient.post('/auth/login', credentials);
	await setAuthCookie(data.token);
	return data.user;
}

export async function registerUser(credentials: RegisterCredentials): Promise<User> {
	const { data } = await apiClient.post('/auth/register', credentials);
	await setAuthCookie(data.token);
	return data.user;
}

export async function logoutUser(): Promise<void> {
	try {
		await apiClient.post('/auth/logout');
	} finally {
		const cookieStore = await cookies();
		cookieStore.delete('auth_token');
	}
}

export async function getCurrentUser(): Promise<User | null> {
	try {
		const { data } = await apiClient.get('/auth/user');
		return data;
	} catch {
		return null;
	}
}
