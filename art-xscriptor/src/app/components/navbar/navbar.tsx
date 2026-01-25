'use client';

import React, { useState, useEffect } from 'react';
import { HomeIcon, GalleryIcon, ContactIcon, CloseIcon } from '../icons/icons';
import styles from './navbar.module.css';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Función para aplicar el tema
    const applyTheme = (theme: string) => {
      document.documentElement.setAttribute('data-theme', theme);
      document.body.setAttribute('data-theme', theme);
    };

    // Verificar el tema guardado en localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    
    setIsDarkTheme(shouldUseDark);
    applyTheme(shouldUseDark ? 'dark' : 'light');

    // Establecer la ruta actual
    setCurrentPath(window.location.pathname);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    const themeValue = newTheme ? 'dark' : 'light';
    
    // Aplicar tema a ambos elementos
    document.documentElement.setAttribute('data-theme', themeValue);
    document.body.setAttribute('data-theme', themeValue);
    localStorage.setItem('theme', themeValue);
  };

  const leftNavItems = [
    { icon: HomeIcon, label: 'Inicio', href: '/' },
    { icon: GalleryIcon, label: 'Galería', href: '/galeria' },
  ];

  const rightNavItems = [
    { icon: ContactIcon, label: 'Contacto', href: '/contacto' },
    { icon: CloseIcon, label: 'Xscriptor', href: 'https://www.xscriptor.com' },
  ];

  const isActive = (href: string) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href);
  };

  return (
    <nav className={`${styles.navbar} ${className}`}>
      <div className={styles.container}>
        <div className={styles.centeredNav}>
          {leftNavItems.map((item, index) => {
            const IconComponent = item.icon;
            const active = isActive(item.href);
            return (
              <a
                key={index}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.active : ''}`}
                title={item.label}
              >
                <IconComponent className={styles.navIcon} size={24} />
              </a>
            );
          })}

          {/* Botón Xart en el centro */}
          <button 
            onClick={toggleTheme}
            className={styles.themeButton}
            aria-label="Cambiar tema"
          >
            X/Art
          </button>

          {rightNavItems.map((item, index) => {
            const IconComponent = item.icon;
            const active = isActive(item.href);
            return (
              <a
                key={index}
                href={item.href}
                className={`${styles.navLink} ${active ? styles.active : ''}`}
                title={item.label}
              >
                <IconComponent className={styles.navIcon} size={24} />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
export { Navbar };