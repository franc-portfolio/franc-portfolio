import { useCallback } from 'react';

export const useTheme = () => {
  const getTheme = useCallback(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') || 'light';
  }, []);

  const setTheme = useCallback((theme: 'light' | 'dark') => {
    localStorage.setItem('theme', theme);
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }, []);

  const toggleTheme = useCallback(() => {
    const current = getTheme();
    setTheme(current === 'light' ? 'dark' : 'light');
  }, [getTheme, setTheme]);

  return { getTheme, setTheme, toggleTheme };
};
