import { IconsStyles } from "@/app/components/IconsStyles";

export default function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${IconsStyles.contactIconStyles} text-pink-400`}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      {/* Círculo de fondo */}
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="rgba(255, 255, 255, 0.3)"
        strokeWidth="1"
      />

      {/* Ícono de Instagram */}
      <rect
        x="6"
        y="6"
        width="12"
        height="12"
        rx="3"
        ry="3"
        stroke="currentColor"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" />
      <circle cx="16.2" cy="7.8" r="0.7" fill="currentColor" />
    </svg>
  );
}
