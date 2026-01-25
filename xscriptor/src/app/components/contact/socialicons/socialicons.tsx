import { IconsStyles } from "@/app/components/IconsStyles";

export function InstagramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${IconsStyles.contactIconStyles}`}
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
        stroke="currentColor"
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


export function TelegramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${IconsStyles.contactIconStyles}`}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 5-5M21 3L3 12l6 2 2 6 3-4 4 3 3-16z"
      />
    </svg>
  );
}


export function WhatsappIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${IconsStyles.contactIconStyles}`}
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
    >
      <circle
        cx="12"
        cy="12"
        r="11"
        fill="rgba(255, 255, 255, 0.1)"
        stroke="currentColor"
        strokeWidth="1"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.72 13.06c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.14-.19.29-.74.94-.9 1.13-.16.19-.33.22-.62.08-.29-.15-1.23-.45-2.35-1.45-.87-.77-1.45-1.72-1.62-2.01-.16-.29-.02-.45.12-.59.13-.13.29-.33.43-.49.14-.16.18-.28.27-.47.09-.19.04-.36-.02-.51-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.47 0 1.45 1.04 2.85 1.19 3.05.15.19 2.05 3.12 5.2 4.38.73.31 1.3.49 1.74.63.73.23 1.4.2 1.92.12.59-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.11-.26-.18-.55-.32z"
        fill="currentColor"
      />
    </svg>
  );
}
