"use client";

import { AnimatePresence, motion } from "framer-motion";
import XNavbar from "./xcomponents/xnavbar";
import { SunIcon, MoonIcon } from "./icons/navbar/navbarIcons";
import { usePathname } from "next/navigation";

// ── Datos de navegación ────────────────────────────────────────────────────
// Edita estos arrays para cambiar los enlaces sin tocar el componente XNavbar
const NAV_LEFT = [
  { url: "/", title: "Inicio" },
  { url: "/obras", title: "Obras" },
  { url: "/info", title: "Info" },
];

const NAV_RIGHT = [
  { url: "/contacto", title: "Contacto" },
  { url: "/blog", title: "Blog" },
  { url: "https://dev.xscriptor.com", title: "Dev", external: true },
];

// ── Íconos del toggle de tema ──────────────────────────────────────────────
// Usamos funciones de render para que XNavbar controle el tamaño via iconSize prop.
const THEME_ICONS = {
  toDark:  (size: number) => <MoonIcon size={size} title="Cambiar a oscuro" />,
  toLight: (size: number) => <SunIcon  size={size} title="Cambiar a claro"  />,
};

// ─────────────────────────────────────────────────────────────────────────────

const TransitionProvider = () => {
  const pathName = usePathname();

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="relative w-full">
        <motion.div
          className="pointer-events-none fixed inset-x-0 top-0 bg-black rounded-b-[100px] z-[100]"
          style={{ height: "100vh" }}
          initial={{ height: "100vh" }}
          animate={{ height: 0 }}
          exit={{ height: "100vh" }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        />
        <motion.div
          className="pointer-events-none fixed inset-0 m-auto text-white text-5xl md:text-8xl cursor-default z-[110] w-fit h-fit"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {pathName.substring(1)}
        </motion.div>
        <motion.div
          className="pointer-events-none fixed inset-x-0 bottom-0 bg-black rounded-t-[100px] z-[100]"
          style={{ height: "100vh" }}
          initial={{ height: "100vh" }}
          animate={{ height: 0 }}
          exit={{ height: "100vh" }}
          transition={{ delay: 0.2, duration: 0.2, ease: "easeOut" }}
        />

        <XNavbar
          linksLeft={NAV_LEFT}
          linksRight={NAV_RIGHT}
          logo="X"
          logoAsThemeToggle
          themeIcons={THEME_ICONS}
          storageKey="theme"
          labelOpen="Abrir menú"
          labelClose="Cerrar menú"
          labelDark="Oscuro"
          labelLight="Claro"
          hamburgerBarWidth="1rem"
          hamburgerBarThickness="2px"
          iconColor="var(--text)"
          iconHoverColor="var(--accent)"
          iconSize={22}
          
        />
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;
