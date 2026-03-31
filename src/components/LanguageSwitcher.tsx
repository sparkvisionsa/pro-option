"use client";

import { useLanguage } from "@/context/LanguageContext";

interface Props {
  inHero?: boolean; /* true = على خلفية داكنة → نصوص بيضاء */
}

export function LanguageSwitcher({ inHero = false }: Props) {
  const { locale, toggleLanguage } = useLanguage();
  const nextLocale = locale === "en" ? "AR" : "EN";

  const borderColor = inHero ? "rgba(255,255,255,0.30)" : "rgba(29,41,82,0.20)";
  const textColor   = inHero ? "rgba(255,255,255,0.75)"  : "var(--text-muted)";

  return (
    <button
      onClick={toggleLanguage}
      aria-label={locale === "en" ? "Switch to Arabic" : "التبديل إلى الإنجليزية"}
      style={{
        display: "inline-flex", alignItems: "center", gap: "0.35rem",
        padding: "0.35rem 0.75rem",
        background: "transparent",
        border: `1px solid ${borderColor}`,
        borderRadius: "100px", cursor: "pointer",
        fontFamily: "'Inter', sans-serif",
        fontSize: "0.75rem", fontWeight: 700,
        color: textColor,
        letterSpacing: "0.06em",
        transition: "all 0.2s",
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "var(--accent-orange)";
        el.style.color = "var(--accent-orange)";
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = borderColor;
        el.style.color = textColor;
      }}
    >
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
      {nextLocale}
    </button>
  );
}
