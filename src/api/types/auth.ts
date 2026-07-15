export interface User {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	created_at: string;
	updated_at: string;
}

export interface LoginCredentials {
	email: string;
	password: string;
}

export interface RegisterCredentials {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
}

export interface AuthResponse {
	data: {
		token: string;
	};
}