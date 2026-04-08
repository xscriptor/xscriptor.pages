import { XFooter } from "@xscriptor/xcomponents";

const FOOTER_LINKS = [
  { label: "Términos y Condiciones", href: "/terminos-y-condiciones" },
  { label: "Contacto", href: "/contacto" }
];

const FOOTER_CONFIG = {
  text: "Xscriptor",
  showYear: true,
  yearFirst: false,
};

const FOOTER_COLORS = {
  bg: "var(--bg)",
  text: "var(--text)",
  accent: "var(--accent)",
  border: "var(--border)"
};

export default function SiteXFooter() {
  return (
    <XFooter 
      links={FOOTER_LINKS}
      copyright={FOOTER_CONFIG}
      layout="horizontal"
      columns={1}
      colors={FOOTER_COLORS}
    />
  );
}