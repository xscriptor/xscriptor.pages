'use client';

import { useEffect } from 'react';

export default function ThemeScript() {
  useEffect(() => {
    // Función para inicializar el tema
    const initializeTheme = () => {
      // Verificar si hay un tema guardado en localStorage
      const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
      
      // Si hay un tema guardado, usarlo
      if (savedTheme) {
        if (savedTheme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.add('light');
          document.documentElement.classList.remove('dark');
        }
      } else {
        // Si no hay tema guardado, usar la preferencia del sistema
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        } else {
          document.documentElement.classList.add('light');
          localStorage.setItem('theme', 'light');
        }
      }
    };

    // Inicializar el tema al cargar la página
    initializeTheme();

    // Escuchar cambios en la preferencia del sistema
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Solo cambiar si no hay un tema guardado en localStorage
      if (!localStorage.getItem('theme')) {
        document.documentElement.classList.toggle('dark', e.matches);
        document.documentElement.classList.toggle('light', !e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return null;
}