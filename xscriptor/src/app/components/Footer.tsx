import Link from "next/link";
import { CSSProperties } from "react";

type FooterProps = {
  className?: string;
  style?: CSSProperties; // overrides puntuales, p.ej. {"--footer-py": "2rem"} as any
};

export default function Footer({ className = "", style }: FooterProps) {
  return (
    <footer
      role="contentinfo"
      aria-label="Pie de página"
      style={style}
      className={`w-full border-t border-[color:var(--border)] bg-(--bg) text-(--text) ${className}`}
    >
      <div className="mx-auto max-w-screen-xl px-4 py-3 flex flex-col md:flex-row items-center justify-center gap-2 text-xs opacity-70">
        <span>
          © {new Date().getFullYear()} Xscriptor
        </span>
        <span className="hidden md:inline">·</span>
        <nav className="flex items-center gap-3">
          <Link href="/terminos-y-condiciones" className="text-[var(--accent)] hover:opacity-80">
            Políticas
          </Link>
          <Link href="/contacto" className="text-[var(--accent)] hover:opacity-80">
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  );
}
