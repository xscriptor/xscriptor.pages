// components/icons.tsx
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & {
  size?: number | string;
  strokeWidth?: number;
  title?: string;
};

const a11y = (title?: string) =>
  title
    ? { role: "img" as const, "aria-label": title }
    : { role: "img" as const, "aria-hidden": true };

export function SunIcon({
  size = 24,
  strokeWidth = 1.8,
  title,
  className,
  ...rest
}: IconProps) {
  return (
    <svg
      {...a11y(title)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {/* Círculo central */}
      <circle cx="12" cy="12" r="4" />
      {/* Rayos */}
      <line x1="12" y1="1" x2="12" y2="4" />
      <line x1="12" y1="20" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="6.34" y2="6.34" />
      <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="4" y2="12" />
      <line x1="20" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="6.34" y2="17.66" />
      <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
    </svg>
  );
}

export function MoonIcon({
  size = 24,
  strokeWidth = 1.8,
  title,
  className,
  ...rest
}: IconProps) {
  return (
    <svg
      {...a11y(title)}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      {/* Luna creciente */}
      <path d="M21 12.79A9 9 0 1 1 11.21 3 
               a7 7 0 0 0 9.79 9.79z" />
    </svg>
  );
}
