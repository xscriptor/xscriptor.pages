import { IconsStyles } from "@/app/components/IconsStyles"
export default function HomeIcon() {
  return (
    <svg
      className={IconsStyles.navIconStyles}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Base de la casa */}
      <path d="M16 32 L16 56 H48 V32" />

      {/* Tejado */}
      <path d="M8 32 L32 10 L56 32" />

      {/* Chimenea */}
      <path d="M26 18 V10 H30 V22" />

      {/* Letra X en el centro */}
      <text
        x="32"
        y="46"
        textAnchor="middle"
        alignmentBaseline="middle"
        fontSize="20"
        fill="currentColor"
        fontWeight="bold"
      >
        X
      </text>
    </svg>
  );
}
