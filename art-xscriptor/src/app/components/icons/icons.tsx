import React from 'react';

interface IconProps {
  size?: number;
  className?: string;
}

// Íconos de Redes Sociales
export const InstagramIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="2"
      y="2"
      width="20"
      height="20"
      rx="5"
      ry="5"
      stroke="var(--accent-color)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
      stroke="var(--accent-color)"
      strokeWidth="2"
      fill="none"
    />
    <line
      x1="17.5"
      y1="6.5"
      x2="17.51"
      y2="6.5"
      stroke="var(--accent-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const FacebookIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
      stroke="var(--accent-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const WhatsAppIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
      stroke="var(--accent-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const TelegramIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.524 2.139-.347.135-.578.252-.578.252s-.207.117-.423.34a.827.827 0 0 0-.17.415.758.758 0 0 0 .125.466c.206.307.533.462.533.462l4.362 1.708c.245.1.516.081.737-.05l6.7-4.158s.279-.143.279-.143a.375.375 0 0 1 .17-.028.717.717 0 0 1 .288.086c.119.06.18.175.18.175s.028.08.006.215c-.022.135-.08.301-.08.301L14.68 15.626c-.245.191-.358.518-.288.825l.97 4.87a1.023 1.023 0 0 0 1.007.782.986.986 0 0 0 .949-.647l2.451-6.772a1.024 1.024 0 0 0-.037-.86 1.014 1.014 0 0 0-.693-.584l.693.584c.328-.13.982-.398 1.358-.54.376-.143.851-.323 1.184-.452a1.026 1.026 0 0 0 .693-.584 1.024 1.024 0 0 0-.037-.86z"
      fill="var(--accent-color)"
    />
  </svg>
);

// Íconos para Navbar
export const MenuIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="3"
      y1="6"
      x2="21"
      y2="6"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="12"
      x2="21"
      y2="12"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="3"
      y1="18"
      x2="21"
      y2="18"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const CloseIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="18"
      y1="6"
      x2="6"
      y2="18"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <line
      x1="6"
      y1="6"
      x2="18"
      y2="18"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const HomeIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="9,22 9,12 15,12 15,22"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      r="8"
      stroke="var(--text-color)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="m21 21-4.35-4.35"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const UserIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <circle
      cx="12"
      cy="7"
      r="4"
      stroke="var(--text-color)"
      strokeWidth="2"
      fill="none"
    />
  </svg>
);

export const GalleryIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="2"
      ry="2"
      stroke="var(--text-color)"
      strokeWidth="2"
      fill="none"
    />
    <circle
      cx="8.5"
      cy="8.5"
      r="1.5"
      fill="var(--text-color)"
    />
    <polyline
      points="21,15 16,10 5,21"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ContactIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <polyline
      points="22,6 12,13 2,6"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const AboutIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="12"
      cy="12"
      r="10"
      stroke="var(--text-color)"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <line
      x1="12"
      y1="17"
      x2="12.01"
      y2="17"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export const ArrowLeftIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="19"
      y1="12"
      x2="5"
      y2="12"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <polyline
      points="12,19 5,12 12,5"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

export const ArrowRightIcon: React.FC<IconProps> = ({ size = 24, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <polyline
      points="12,5 19,12 12,19"
      stroke="var(--text-color)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);