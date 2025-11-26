import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { RoleContext } from '../context/RoleContext';

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) {
    throw new Error('useRole must be used within RoleProvider');
  }
  return context;
};

export const useHasPermission = (permission: string): boolean => {
  const { hasPermission } = useRole();
  return hasPermission(permission);
};

export const useCanAccessModule = (module: string): boolean => {
  const { canAccessModule } = useRole();
  return canAccessModule(module);
};
