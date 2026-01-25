"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link, className = "", label = ""}) => {
  const pathname = usePathname();

  const isActive =
    link.url === "/" ? pathname === "/" : pathname.startsWith(link.url);

  return (
    <Link
      href={link.url}
      className={`p-1 border-b-2 transition duration-300 ${
        isActive ? "border-yellow-500 text-yellow-500" : "border-transparent"
      } ${className}`}
      aria-label={`${link.label}`}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
