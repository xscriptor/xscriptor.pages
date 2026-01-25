"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import NavLink from "./navLink";
import { SunIcon, MoonIcon } from "./icons/navbar/navbarIcons";

type Theme = "light" | "dark";

const linksLeft = [
  { url: "/", title: "Inicio" },
  { url: "/obras", title: "Obras" },
  { url: "/info", title: "Info" },
];

const linksRight = [
  { url: "/contacto", title: "Contacto" },
  { url: "/blog", title: "Blog" },
  { url: "https://dev.xscriptor.com", title: "Dev", external: true },
];

// Hover icons (desktop)
const iconTrayRight = {
  hidden: { opacity: 0, x: -6, pointerEvents: "none" as const },
  visible: { opacity: 1, x: 0, pointerEvents: "none" as const, transition: { duration: 0.18 } },
};
const iconTrayLeft = {
  hidden: { opacity: 0, x: 6, pointerEvents: "none" as const },
  visible: { opacity: 1, x: 0, pointerEvents: "none" as const, transition: { duration: 0.18 } },
};

// Motion (hamburguesa ↔ X)
const topVariants = { closed: { rotate: 0 }, opened: { rotate: 45 } };
const centerVariants = { closed: { opacity: 1 }, opened: { opacity: 0 } };
const bottomVariants = { closed: { rotate: 0 }, opened: { rotate: -45 } };
const listVariants = {
  closed: { x: "100vw" },
  opened: { x: 0, transition: { when: "beforeChildren", staggerChildren: 0.02 } },
};
const itemVariants = { closed: { x: -10, opacity: 0 }, opened: { x: 0, opacity: 1 } };

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hoverX, setHoverX] = useState(false);
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false); // para portal

  useEffect(() => setMounted(true), []);

  // Tema
  useEffect(() => {
    const saved = (typeof window !== "undefined" && localStorage.getItem("theme")) as Theme | null;
    applyTheme(saved ?? "light");
  }, []);
  function applyTheme(t: Theme) {
    setTheme(t);
    const root = document.documentElement;
    if (t === "dark") root.setAttribute("data-theme", "dark");
    else root.removeAttribute("data-theme");
    localStorage.setItem("theme", t);
  }
  function toggleTheme() {
    applyTheme(theme === "dark" ? "light" : "dark");
  }

  // Body no-scroll
  useEffect(() => {
    if (!mounted) return;
    if (open) document.body.classList.add("menu-open");
    else document.body.classList.remove("menu-open");
    return () => document.body.classList.remove("menu-open");
  }, [open, mounted]);

  // Cerrar con ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className="
        h-full flex items-center justify-between
        px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl
        bg-(--bg) text-(--text) shadow-sm py-8
        z-[60]
      "
      role="banner"
    >
      {/* Desktop */}
      <div
        className="
          hidden md:flex gap-6 items-center w-full justify-center
          relative pb-2
          after:content-[''] after:absolute after:bottom-0 after:left-1/2
          after:-translate-x-1/2 after:w-[65%] after:border-b after:border-(--border)
        "
      >
        {linksLeft.map((link) => (
          <NavLink
            key={link.title}
            link={link}
            className="aria-[current=page]:font-semibold"
          />
        ))}

        {/* Botón X central (desktop) */}
        <div
          className="relative mx-4 flex items-center"
          onMouseEnter={() => setHoverX(true)}
          onMouseLeave={() => setHoverX(false)}
        >
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Cambiar a tema ${theme === "dark" ? "claro" : "oscuro"}`}
            title={theme === "dark" ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            className="font-bold text-2xl select-none leading-none"
          >
            X
          </button>

          {theme === "light" ? (
            <motion.div
              initial={false}
              animate={hoverX ? "visible" : "hidden"}
              variants={iconTrayRight}
              className="absolute left-full top-1/2 -translate-y-1/2 pl-3 pointer-events-none"
              aria-hidden
            >
              <MoonIcon size={22} title="Cambiar a oscuro" />
            </motion.div>
          ) : (
            <motion.div
              initial={false}
              animate={hoverX ? "visible" : "hidden"}
              variants={iconTrayLeft}
              className="absolute right-full top-1/2 -translate-y-1/2 pr-3 pointer-events-none"
              aria-hidden
            >
              <SunIcon size={22} title="Cambiar a claro" />
            </motion.div>
          )}
        </div>

        {linksRight.map((link) => (
          <NavLink key={link.title} link={link} />
        ))}
      </div>

      {/* Mobile: botón hamburguesa (en la navbar, izquierda) */}
      <div className="md:hidden" aria-hidden={false}>
        <div className="w-10 h-8 flex items-center justify-center">
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((p) => !p)}
            className="w-10 h-8 flex flex-col items-center justify-between z-[80] relative"
            title={open ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
          >
            <motion.div
              variants={topVariants}
              initial="closed"
              animate={open ? "opened" : "closed"}
              className="w-8 h-[3px] bg-(--text) rounded origin-left"
              aria-hidden
            />
            <motion.div
              variants={centerVariants}
              initial="closed"
              animate={open ? "opened" : "closed"}
              className="w-8 h-[3px] bg-(--text) rounded"
              aria-hidden
            />
            <motion.div
              variants={bottomVariants}
              initial="closed"
              animate={open ? "opened" : "closed"}
              className="w-8 h-[3px] bg-(--text) rounded origin-left"
              aria-hidden
            />
          </button>
        </div>
      </div>

      {/* Overlay en portal */}
      {mounted && open &&
        createPortal(
          <motion.div
            id="mobile-menu"
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="
              fixed inset-0 w-screen h-screen
              bg-(--bg) text-(--text)
              flex flex-col items-center justify-center gap-8 text-4xl
              z-[9999]
            "
            role="dialog"
            aria-modal="true"
          >
            {/* Botón Cerrar — misma altura y lado que el hamburguesa */}
            <button
              aria-label="Cerrar menú"
              onClick={() => setOpen(false)}
              className="
                fixed top-8 left-4
                w-10 h-8 flex items-center justify-center
                text-(--text) z-[10000]
              "
              style={{ WebkitTapHighlightColor: "transparent" }}
            >
              {/* X botón para la navbar móvil */}
              <span
                aria-hidden
                className="block absolute w-8 h-[3px] rounded bg-current"
                style={{ transform: "rotate(45deg)" }}
              />
              <span
                aria-hidden
                className="block absolute w-8 h-[3px] rounded bg-current"
                style={{ transform: "rotate(-45deg)" }}
              />
              <span className="sr-only">Cerrar</span>
            </button>

            {/* Título decorativo y enlaces */}
            <motion.div variants={itemVariants} className="font-bold text-5xl select-none pointer-events-none">X</motion.div>

            {[...linksLeft, ...linksRight].map((link) => (
              <motion.div key={link.title} variants={itemVariants}>
                <NavLink
                  link={link}
                  onClick={() => setOpen(false)}
                  className="aria-[current=page]:font-semibold"
                />
              </motion.div>
            ))}

            <motion.button
              variants={itemVariants}
              onClick={toggleTheme}
              className="mt-4 text-base px-4 py-2 border border-(--border) rounded-md flex items-center gap-2"
            >
              {theme === "light" ? (
                <>
                  <MoonIcon size={18} /> Oscuro
                </>
              ) : (
                <>
                  <SunIcon size={18} /> Claro
                </>
              )}
            </motion.button>
          </motion.div>,
          document.body
        )}
    </header>
  );
}
