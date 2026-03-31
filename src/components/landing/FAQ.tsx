"use client";

import React from "react";
import { SectionMeta } from "@/components/seo/SectionMeta";
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

export function FAQ() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const items = Array.from({ length: 6 }, (_, i) => ({
    q: getTranslation(locale, `faq.q${i}`),
    a: getTranslation(locale, `faq.a${i}`),
  }));

  return (
    <section id="faq" aria-labelledby="faq-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemID="https://www.pro-option.sa/#faq"
      style={{ background: "var(--bg-primary)", padding: "6rem 1.5rem", position: "relative" }}
    >
      <SectionMeta id="faq" locale={locale} />
      <div className="gold-divider" style={{ position: "absolute", top: 0, left: "5%", right: "5%" }} />

      <div ref={ref} style={{ maxWidth: "820px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ display: "inline-block" }}>
            {locale === "ar" ? "الأسئلة الشائعة" : "FAQ"}
          </div>
          <h2 id="faq-heading" style={{
            fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
            fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
            fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem",
          }}>
            {getTranslation(locale, "faq.title")}
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} style={{
                background: "var(--card-gradient-warm)",
                border: `1.5px solid ${isOpen ? "rgba(232,98,42,0.34)" : "rgba(232,98,42,0.18)"}`,
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: isOpen
                  ? "var(--card-shadow-warm-hover)"
                  : "var(--card-shadow-warm)",
                transition: "border-color 0.3s, box-shadow 0.3s, background 0.3s",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
                transitionDelay: `${i * 70}ms`,
              }}>
                <button
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    width: "100%", display: "flex",
                    alignItems: "center", justifyContent: "space-between",
                    gap: "1rem", padding: "1.25rem 1.5rem",
                    background: "transparent", border: "none", cursor: "pointer",
                    textAlign: locale === "ar" ? "right" : "left",
                  }}
                >
                  <span style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                    fontSize: "clamp(0.9rem,1.5vw,1rem)", fontWeight: 700,
                    color: isOpen ? "var(--accent-orange)" : "var(--text-primary)",
                    flex: 1, lineHeight: 1.4, transition: "color 0.3s",
                  }}>{item.q}</span>

                  <span style={{
                    flexShrink: 0, width: "28px", height: "28px",
                    borderRadius: "50%",
                    background: isOpen ? "var(--accent-orange)" : "rgba(232,98,42,0.10)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.3s, transform 0.3s",
                    transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <line x1="6" y1="0" x2="6" y2="12" stroke={isOpen ? "#fff" : "var(--accent-orange)"} strokeWidth="1.5" strokeLinecap="round"/>
                      <line x1="0" y1="6" x2="12" y2="6" stroke={isOpen ? "#fff" : "var(--accent-orange)"} strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    overflow: "hidden",
                    transition: "max-height 0.4s cubic-bezier(0.16,1,0.3,1)",
                  }}
                >
                  <div style={{
                    padding: "0 1.5rem 1.5rem",
                    borderTop: "1px solid rgba(232,98,42,0.12)",
                    paddingTop: "1rem",
                  }}>
                    <p style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                      fontSize: "clamp(0.87rem,1.4vw,0.95rem)",
                      color: "var(--text-secondary)", lineHeight: 1.85, margin: 0,
                    }}>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
