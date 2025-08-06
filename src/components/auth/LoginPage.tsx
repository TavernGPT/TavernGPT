import React from 'react';
import { useAuthStore } from '../../stores/authStore';

const LoginPage: React.FC = () => {
  const { login, isLoading, error, clearError } = useAuthStore();

  const handleLogin = async (provider: string) => {
    clearError();
    await login(provider);
  };

  const providers = [
    { id: 'google', name: 'Google', icon: '🔍', color: 'bg-red-500 hover:bg-red-600' },
    { id: 'github', name: 'GitHub', icon: '🐙', color: 'bg-gray-800 hover:bg-gray-900' },
    { id: 'discord', name: 'Discord', icon: '🎮', color: 'bg-indigo-600 hover:bg-indigo-700' },
    { id: 'email', name: 'Email', icon: '✉️', color: 'bg-blue-500 hover:bg-blue-600' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-tavern-primary to-tavern-secondary flex items-center justify-center p-4">
      <div className="card max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">TavernGPT</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        <div className="space-y-3">
          {providers.map((provider) => (
            <button
              key={provider.id}
              onClick={() => handleLogin(provider.id)}
              disabled={isLoading}
              className={`w-full ${provider.color} text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed`}
            >
              <span className="text-xl">{provider.icon}</span>
              <span>Continue with {provider.name}</span>
            </button>
          ))}
        </div>

        {isLoading && (
          <div className="mt-6 text-center">
            <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-tavern-primary"></div>
            <p className="mt-2 text-gray-600">Signing you in...</p>
          </div>
        )}

        <div className="mt-8 text-center text-sm text-gray-500">
          <p>By signing in, you agree to our Terms of Service and Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage; 