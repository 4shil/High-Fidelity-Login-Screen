import { createContext, useState, ReactNode } from 'react';
import { User, AuthToken } from '../types';

interface AuthContextType {
  user: User | null;
  token: AuthToken | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<AuthToken | null>(null);

  const login = async (email: string, password: string) => {
    // TODO: Implement actual authentication with Supabase/Hasura
    console.log('Login:', email);
    // Mock implementation
    setUser({
      id: '1',
      email,
      name: 'Test User',
      roles: ['student'],
      isActive: true,
      isBlocked: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const register = async (email: string, password: string, name: string) => {
    // TODO: Implement actual registration with Supabase
    console.log('Register:', email, name);
  };

  const forgotPassword = async (email: string) => {
    // TODO: Implement password reset with Supabase
    console.log('Forgot password:', email);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        login,
        logout,
        register,
        forgotPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
