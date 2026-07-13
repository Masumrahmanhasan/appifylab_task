import {create} from "zustand";
import {User} from '@/api/types/auth'
import {persist, createJSONStorage} from "zustand/middleware";

interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	isLoading: boolean;
	
	setAuth: (user: User) => void;
	setUser: (user: User) => void;
	setLoading: (loading: boolean) => void;
	logout: () => void;
}
export const useAuthStore = create<AuthState>()(
	persist(
		(set) => ({
			user: null,
			isAuthenticated: false,
			isLoading: true,               // start loading until server hydrates
			
			setAuth: (user: User) =>
				set({
					user,
					isAuthenticated: true,
					isLoading: false,
				}),
			
			setUser: (user: User) => set({ user }),
			
			setLoading: (loading: boolean) => set({ isLoading: loading }),
			
			logout: () =>
				set({
					user: null,
					isAuthenticated: false,
					isLoading: false,
				}),
		}),
		{
			name: 'auth-storage',
			storage: createJSONStorage(() => localStorage),
			partialize: (state) => ({
				user: state.user,
				isAuthenticated: state.isAuthenticated,
			}),
		}
	)
);

