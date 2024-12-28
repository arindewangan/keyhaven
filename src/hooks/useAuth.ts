import { useState, useCallback } from 'react';
import { AuthState } from '../types';
import { loadFromStorage } from '../utils/storage';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const [auth, setAuth] = useState<AuthState>({ isAuthenticated: false });

  const handleAuth = useCallback((password: string) => {
    try {
      const storedData = loadFromStorage(password);
      setAuth({ isAuthenticated: true, masterPassword: password });
      return storedData;
    } catch (error) {
      toast.error('Authentication failed. Please check your password.');
      setAuth({ isAuthenticated: false });
      return null;
    }
  }, []);

  const handleLogout = useCallback(() => {
    setAuth({ isAuthenticated: false });
  }, []);

  return {
    auth,
    handleAuth,
    handleLogout
  };
};