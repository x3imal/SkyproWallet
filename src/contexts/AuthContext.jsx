import { createContext, useContext, useEffect, useState } from 'react';
import { signIn, signUp } from '../api/auth.js';

// Создаём контекст для авторизации — через него все компоненты будут получать данные о пользователе
const AuthContext = createContext(null);

const STORAGE_KEY = 'authUser';

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const [mode, setMode] = useState('login');
  const stored = localStorage.getItem(STORAGE_KEY);
  useEffect(() => {
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed?.token) {
          setUser(parsed);
          setIsAuthModalOpen(false);
          setMode('login');
        } else {
          localStorage.removeItem(STORAGE_KEY);
          setUser(null);
          setIsAuthModalOpen(true);
        }
      } catch (error) {
        console.error('Ошибка парсинга fakeUser из localStorage', error);
        localStorage.removeItem(STORAGE_KEY);
        setUser(null);
        setIsAuthModalOpen(true);
      }
    } else {
      setUser(null);
      setMode('login');
      setIsAuthModalOpen(true);
    }
  }, [stored]);

  const register = async (data) => {
    try {
      const apiUser = await signUp({
        name: data.name,
        login: data.email,
        password: data.password,
      });

      setUser(apiUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(apiUser));
      setIsAuthModalOpen(false);
      setMode('login');

      return { ok: true };
    } catch (error) {
      console.error('Ошибка регистрации:', error);
      return {
        ok: false,
        reason: 'api_error',
        message: error.message || 'Ошибка регистрации',
      };
    }
  };

  const login = async (data) => {
    try {
      const apiUser = await signIn({
        login: data.email,
        password: data.password,
      });

      setUser(apiUser);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(apiUser));
      setIsAuthModalOpen(false);

      return { ok: true };
    } catch (error) {
      console.error('Ошибка авторизации:', error);
      return {
        ok: false,
        reason: 'invalid_credentials',
        message: error.message || 'Неверный логин или пароль',
      };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(STORAGE_KEY);
    setMode('login');
    setIsAuthModalOpen(true);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token: user?.token || null,
        isAuth: !!user,
        isAuthModalOpen,
        setIsAuthModalOpen,
        mode,
        setMode,
        login,
        register,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
