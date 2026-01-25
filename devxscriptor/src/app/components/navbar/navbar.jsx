"use client";

import { useState, useEffect } from 'react';
import NavLink from "./navLink";
import ContactIcon from "../navbarIcons/ContactIcon";
import PortfolioIcon from "../navbarIcons/PortfolioIcon";
import HomeIcon from "../navbarIcons/HomeIcon";
import ResourcesIcon from "../navbarIcons/ResourcesIcon";
import XscriptorIcon from "../navbarIcons/XscriptorIcon";
import GitHubIcon from "../navbarIcons/GitHubIcon";
import { PowerOnIcon, PowerOffIcon } from "../navbarIcons/OnOff";
import { PagesStyles } from "../pagesstyles";
import XIcon from '../navbarIcons/xIcon';

const links = [
  { id: "home", url: "/", title: <HomeIcon />, label: "Go home" },
  { id: "resources", url: "/resources", title: <ResourcesIcon />, label: "Go resources" },
  { id: "github", url: "/repos", title: <GitHubIcon />, label: "Go repos page" },
  { id: "x", url: "/x", title: <XIcon />, label: "go to x page" },
  { id: "portfolio", url: "/portfolio", title: <PortfolioIcon />, label: "go portfolio" },
  { id: "contact", url: "/contact", title: <ContactIcon />, label: "go contact page" },
  { id: "xscriptor.com", url: "https://xscriptor.com", title: <XscriptorIcon />, label: "go xscriptor main page" },
];

const Navbar = () => {
  const [theme, setTheme] = useState('light');

  // Detectar el tema actual
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Escuchar cambios en el tema
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => observer.disconnect();
  }, []);

  // Función para cambiar el tema
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  // Dividir los links en dos grupos para poner el botón de tema en el centro
  const leftLinks = links.slice(0, 3);
  const rightLinks = links.slice(3);

  return (
    <div className={`${PagesStyles.navcontainer}`}>
      <div className={`${PagesStyles.navstyles}`}>
        {leftLinks.map((link) => (
          <NavLink
            link={link}
            key={link.id}
            className={`${PagesStyles.navbariconsstyles}`}
            aria-label={link.label}
          />
        ))}

        {/* Botón de cambio de tema en el centro */}
        <button
          onClick={toggleTheme}
          className={`${PagesStyles.navbariconsstyles} cursor-pointer`}
          aria-label="Cambiar tema"
          title="Cambiar tema"
        >
          {theme === 'light' ? <PowerOffIcon /> : <PowerOnIcon />}
        </button>

        {rightLinks.map((link) => (
          <NavLink
            link={link}
            key={link.id}
            className={`${PagesStyles.navbariconsstyles}`}
            aria-label={link.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
