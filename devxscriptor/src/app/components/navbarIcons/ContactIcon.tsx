import {IconsStyles} from "@/app/components/IconsStyles"
export default function ContactIcon() {
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
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 
               2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
               4.99-8 5-8-5V6l8 5 8-5v2.99z"/>
    </svg>
  );
}
