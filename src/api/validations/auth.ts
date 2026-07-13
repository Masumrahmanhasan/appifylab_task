import {z} from 'zod'
export const loginSchema = z.object({
	email: z
		.email('Enter Valid Email Address'),
		
	password: z
		.string()
		.min(1, 'Password is required')
		.min(6, 'Password must be at least 6 characters'),
});

// Export the inferred type for reuse
export type LoginFormData = z.infer<typeof loginSchema>;