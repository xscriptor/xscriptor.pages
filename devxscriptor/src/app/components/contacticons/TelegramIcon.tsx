import { IconsStyles } from "@/app/components/IconsStyles";

export default function TelegramIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${IconsStyles.contactIconStyles} text-blue-300`}
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
        stroke="rgba(255, 255, 255, 0.3)"
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
