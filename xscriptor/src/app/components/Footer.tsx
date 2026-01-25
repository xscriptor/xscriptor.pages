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
      <div className="mx-auto max-w-screen-xl px-4 py-[var(--footer-py,1.25rem)] flex flex-col items-center justify-center gap-2 text-sm">
        <h3 className="text-center text-base font-medium">
          © {new Date().getFullYear()} Xscriptor — Todos los derechos reservados
        </h3>

        <nav className="flex items-center gap-4">
          <Link href="/terminos-y-condiciones" className="text-(--accent) hover:opacity-80">
            Políticas
          </Link>
          <Link href="/contacto" className="text-(--accent) hover:opacity-80">
            Contacto
          </Link>
        </nav>
      </div>
    </footer>
  );
}
