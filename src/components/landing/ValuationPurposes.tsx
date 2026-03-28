"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

function useReveal() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

const purposeIcons = [
  /* buy/sell */ <svg key={0} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="#e8622a" strokeWidth="1.5" strokeLinejoin="round"/><line x1="3" y1="6" x2="21" y2="6" stroke="#e8622a" strokeWidth="1.5"/><path d="M16 10a4 4 0 01-8 0" stroke="#e8622a" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* disputes */ <svg key={1} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" stroke="#e8622a" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="#e8622a" strokeWidth="1.5" strokeLinecap="round"/><circle cx="12" cy="16" r="1.5" fill="#e8622a"/></svg>,
  /* liquidation */ <svg key={2} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 3h18M3 8h18M3 13h18M3 18h18" stroke="#e8622a" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/><path d="M12 3v18" stroke="#e8622a" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* financing */ <svg key={3} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 100 7h5a3.5 3.5 0 110 7H6" stroke="#e8622a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* insurance */ <svg key={4} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#e8622a" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#e8622a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* ifrs */ <svg key={5} width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="#e8622a" strokeWidth="1.5" strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="#e8622a" strokeWidth="1.5"/><path d="M9 7h6M9 11h4M9 15h6" stroke="#e8622a" strokeWidth="1.2" strokeLinecap="round" opacity="0.6"/></svg>,
];

interface PurposeProps {
  icon: React.ReactNode;
  titleKey: string;
  descKey: string;
  kwKey: string;
  index: number;
  visible: boolean;
}

function PurposeCard({ icon, titleKey, descKey, kwKey, index, visible }: PurposeProps) {
  const { locale } = useLanguage();
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#fffaf8" : "#ffffff",
        border: `1.5px solid ${hovered ? "rgba(232,98,42,0.30)" : "rgba(29,41,82,0.09)"}`,
        borderRadius: "14px",
        padding: "1.75rem 1.5rem",
        position: "relative", overflow: "hidden",
        transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 10px 32px rgba(232,98,42,0.10)"
          : "0 2px 14px rgba(29,41,82,0.06)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* Accent top border */}
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, left: 0, right: 0,
        height: "3px",
        background: "linear-gradient(90deg, var(--accent-orange), rgba(232,98,42,0.3))",
        opacity: hovered ? 1 : 0,
        transition: "opacity 0.3s",
      }} />

      <div style={{ marginBottom: "1rem" }}>{icon}</div>

      <h3 style={{
        fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
        fontSize: "clamp(0.95rem,1.5vw,1.05rem)", fontWeight: 700,
        color: "var(--accent-navy)", marginBottom: "0.5rem", lineHeight: 1.3,
      }}>
        {getTranslation(locale, titleKey)}
      </h3>
      <p style={{
        fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
        fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.75, margin: "0 0 1rem",
      }}>
        {getTranslation(locale, descKey)}
      </p>
      <span style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
        fontSize: "0.72rem", fontWeight: 700,
        color: "var(--accent-orange)",
        background: "rgba(232,98,42,0.08)",
        border: "1px solid rgba(232,98,42,0.20)",
        padding: "0.2rem 0.75rem", borderRadius: "100px",
      }}>
        {getTranslation(locale, kwKey)}
      </span>
    </article>
  );
}

export function ValuationPurposes() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();

  const cards = [
    { titleKey: "purposes.p1Title", descKey: "purposes.p1Desc", kwKey: "purposes.p1Kw", icon: purposeIcons[0] },
    { titleKey: "purposes.p2Title", descKey: "purposes.p2Desc", kwKey: "purposes.p2Kw", icon: purposeIcons[1] },
    { titleKey: "purposes.p3Title", descKey: "purposes.p3Desc", kwKey: "purposes.p3Kw", icon: purposeIcons[2] },
    { titleKey: "purposes.p4Title", descKey: "purposes.p4Desc", kwKey: "purposes.p4Kw", icon: purposeIcons[3] },
    { titleKey: "purposes.p5Title", descKey: "purposes.p5Desc", kwKey: "purposes.p5Kw", icon: purposeIcons[4] },
    { titleKey: "purposes.p6Title", descKey: "purposes.p6Desc", kwKey: "purposes.p6Kw", icon: purposeIcons[5] },
  ];

  return (
    <section id="purposes" aria-labelledby="purposes-heading"
      style={{ background: "var(--bg-primary)", padding: "6rem 1.5rem" }}
    >
      <div className="gold-divider" style={{ marginBottom: "4rem" }} />

      <div ref={ref} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ display: "inline-block" }}>
            {locale === "ar" ? "أغراض التقييم" : "Valuation Purposes"}
          </div>
          <h2 id="purposes-heading" style={{
            fontFamily: "'Playfair Display', 'IBM Plex Sans Arabic', serif",
            fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
            fontWeight: 700, color: "var(--accent-navy)", marginBottom: "1rem",
          }}>
            {locale === "ar" ? "أغراض التقييم التي نغطيها" : "Valuation Purposes We Cover"}
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
            fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--text-secondary)",
            maxWidth: "560px", margin: "0 auto", lineHeight: 1.75,
          }}>
            {getTranslation(locale, "purposes.subtitle")}
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {cards.map((card, i) => (
            <PurposeCard key={i} {...card} index={i} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}
