"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkItem = { url: string; title: string };
type Props = {
  link: LinkItem;
  onClick?: () => void;
  className?: string;
};

const NavLink = ({ link, onClick, className }: Props) => {
  const pathname = usePathname();

  // Activo exacto en "/" y por prefijo en el resto
  const isActive =
    link.url === "/" ? pathname === "/" : pathname?.startsWith(link.url);

  return (
    <Link
      href={link.url}
      onClick={onClick}
      aria-label={`Ir a ${link.title}`}
      className={[
        "p-1 border-b-2 transition-colors duration-200",
        isActive
          ? "border-black text-black font-semibold"
          : "border-transparent text-black hover:opacity-70",
        className || "",
      ].join(" ")}
      aria-current={isActive ? "page" : undefined}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
