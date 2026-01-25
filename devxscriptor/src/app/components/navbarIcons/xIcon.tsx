import { IconsStyles } from "@/app/components/IconsStyles"

export default function XIcon() {
  return (
    <svg
      className={IconsStyles.navIconStyles}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Círculo */}
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
      {/* Letra X */}
      <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="8" x2="8" y2="16" stroke="currentColor" strokeWidth="2" />
      {/* Pequeña S al lado */}
      <text x="20" y="20" fontSize="8" fill="currentColor" fontFamily="Arial, sans-serif">s</text>
    </svg>
  );
}