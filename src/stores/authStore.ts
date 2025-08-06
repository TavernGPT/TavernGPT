import { create } from 'zustand';

export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  provider: 'google' | 'github' | 'discord' | 'email';
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  login: (provider: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  error: null,
  
  login: async (provider: string) => {
    set({ isLoading: true, error: null });
    
    try {
      // Mock authentication - in real implementation this would call Privy
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      
      const mockUser: User = {
        id: '1',
        email: 'user@example.com',
        name: 'Test User',
        avatar: 'https://via.placeholder.com/40',
        provider: provider as 'google' | 'github' | 'discord' | 'email'
      };
      
      set({ 
        user: mockUser, 
        isAuthenticated: true, 
        isLoading: false 
      });
    } catch (error) {
      set({ 
        error: 'Authentication failed. Please try again.', 
        isLoading: false 
      });
    }
  },
  
  logout: () => {
    set({ 
      user: null, 
      isAuthenticated: false, 
      error: null 
    });
  },
  
  clearError: () => {
    set({ error: null });
  }
})); 