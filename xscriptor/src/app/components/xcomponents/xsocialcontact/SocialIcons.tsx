import React from "react";

interface SocialIconProps {
  size?: string | number;
  color?: string;
  strokeWidth?: number;
}

export function TelegramIcon({
  size = "40",
  color = "currentColor",
  strokeWidth = 2,
}: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.1)" stroke={color} strokeWidth="1" />
      <path d="M9 12l2 2 5-5M21 3L3 12l6 2 2 6 3-4 4 3 3-16z" />
    </svg>
  );
}

export function InstagramIcon({
  size = "40",
  color = "currentColor",
  strokeWidth = 1.5,
}: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.1)" stroke={color} strokeWidth="1" />
      <rect x="6" y="6" width="12" height="12" rx="3" ry="3" />
      <circle cx="12" cy="12" r="3.2" />
      <circle cx="16.2" cy="7.8" r="0.7" fill={color} />
    </svg>
  );
}

export function WhatsappIcon({
  size = "40",
  color = "currentColor",
  strokeWidth = 1.5,
}: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.1)" stroke={color} strokeWidth="1" />
      <path
        d="M16.72 13.06c-.29-.15-1.71-.84-1.98-.94-.26-.1-.45-.15-.64.14-.19.29-.74.94-.9 1.13-.16.19-.33.22-.62.08-.29-.15-1.23-.45-2.35-1.45-.87-.77-1.45-1.72-1.62-2.01-.16-.29-.02-.45.12-.59.13-.13.29-.33.43-.49.14-.16.18-.28.27-.47.09-.19.04-.36-.02-.51-.07-.15-.64-1.54-.88-2.1-.23-.55-.47-.48-.64-.49-.16-.01-.36-.01-.55-.01-.19 0-.5.07-.76.36-.26.29-1 1.01-1 2.47 0 1.45 1.04 2.85 1.19 3.05.15.19 2.05 3.12 5.2 4.38.73.31 1.3.49 1.74.63.73.23 1.4.2 1.92.12.59-.09 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.11-.26-.18-.55-.32z"
        fill={color}
      />
    </svg>
  );
}

export function EmailIcon({
  size = "40",
  color = "currentColor",
  strokeWidth = 1.5,
}: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.1)" stroke={color} strokeWidth="1" />
      <rect x="4" y="7" width="16" height="10" rx="1" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  );
}

export function LinkedInIcon({
  size = "40",
  color = "currentColor",
  strokeWidth = 1.5,
}: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.1)" stroke={color} strokeWidth="1" />
      <path d="M8 9l3 3 4-4" />
      <path d="M7 10c1.7-1.7 4.5-1.7 6.2 0" />
    </svg>
  );
}

export function TwitterIcon({
  size = "40",
  color = "currentColor",
  strokeWidth = 1.5,
}: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.1)" stroke={color} strokeWidth="1" />
      <path d="M7 4l8 10-8 10h2l8-10 8-10h-2l-8 10-8-10z" />
    </svg>
  );
}

export function GitHubIcon({
  size = "40",
  color = "currentColor",
  strokeWidth = 1.5,
}: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="11" fill="rgba(255, 255, 255, 0.1)" stroke={color} strokeWidth="1" />
      <path d="M12 2c5.523 0 10 4.477 10 10 0 4.42-2.865 8.17-6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7 2.782.603 3.369-1.343 3.369-1.343.454-1.156 1.11-1.463 1.11-1.463.908-.62-.069-.608-.069-.608-1.003.07-1.531 1.03-1.531 1.03-.891 1.529-2.341 1.544-2.914 1.186-.09-.924-.348-1.544-.634-1.898 2.22-.253 4.555-1.11 4.555-4.943 0-1.091-.39-1.984-1.029-2.683.103-.253.446-1.27-.098-2.647 0 0-.84-.269-2.75 1.025A9.578 9.578 0 0 0 12 6.836c-.85.004-1.705.115-2.513.337-1.909-1.294-2.747-1.025-2.747-1.025-.544 1.377-.201 2.394-.099 2.647-.639.7-1.03 1.592-1.03 2.683 0 3.842 2.33 4.687 4.543 4.934-.284.246-.538.73-.627 1.412-.564.254-1.977.686-2.851-.82 0 0-.518-.944-1.502-1.01 0 0-.956-.013-.067.596 0 0 .64.298 1.08 1.573 0 0 .572 1.768 3.315 1.768.442 0 .817-.054 1.17-.077 0 .268.008.653.008.996v1.479c0 .267-.182.578-.694.48C4.868 20.168 2 16.417 2 12c0-5.523 4.477-10 10-10z" />
    </svg>
  );
}
