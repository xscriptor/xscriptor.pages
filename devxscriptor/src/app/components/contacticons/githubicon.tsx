import { IconsStyles } from "@/app/components/IconsStyles";


export default function GithubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={IconsStyles.contactIconStyles}
      style={{ color: 'var(--foreground)' }}
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

      {/* Ícono de GitHub */}
      <path
        fill="currentColor"
        stroke="none"
        d="M12 2C6.48 2 2 6.58 2 12.14c0 4.46 2.87 8.24 6.84 9.58.5.1.68-.22.68-.48
        0-.24-.01-.87-.01-1.7-2.78.61-3.37-1.37-3.37-1.37-.45-1.17-1.1-1.48-1.1-1.48-.9-.63.07-.62.07-.62
        1 .07 1.53 1.05 1.53 1.05.89 1.54 2.34 1.1 2.91.84.09-.66.35-1.1.63-1.35-2.22-.26-4.56-1.14-4.56-5.07
        0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.29.1-2.7 0 0 .84-.27 2.75 1.05A9.26 9.26 0 0112 6.8c.85.004 
        1.71.12 2.51.34 1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.44.1 2.7.64.72 1.03 1.64 1.03 2.76 
        0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.89 0 1.36-.01 2.46-.01 2.8 0 .26.18.58.69.48A10.17 
        10.17 0 0022 12.14C22 6.58 17.52 2 12 2z"
      />
    </svg>
  );
}
