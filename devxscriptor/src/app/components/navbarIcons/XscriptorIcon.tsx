import {IconsStyles} from "@/app/components/IconsStyles"
export default function XscriptorIcon() {
  return (
    <svg
      className={IconsStyles.navIconStyles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width="34"
      height="34"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* Letra X formada por líneas cruzadas */}
      <line x1="16" y1="16" x2="48" y2="48" />
      <line x1="48" y1="16" x2="16" y2="48" />

      {/* Lápiz diagonal (punta a la derecha) */}
      <path d="M40 20 L50 30 L45 35 L35 25 Z" fill="currentColor" />
      <line x1="45" y1="35" x2="48" y2="38" />
    </svg>
  );
}
