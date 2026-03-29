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

const stepIcons = [
  /* 1 */ <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12h6M12 9v6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* 2 */ <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 000 4h6a2 2 0 000-4M9 5a2 2 0 012-2h2a2 2 0 012 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* 3 */ <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* 4 */ <svg key={3} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  /* 5 */ <svg key={4} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5"/></svg>,
  /* 6 */ <svg key={5} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export function ValuationProcess() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();

  const steps = Array.from({ length: 6 }, (_, i) => ({
    num: i + 1,
    icon: stepIcons[i],
    title: getTranslation(locale, `process.step${i + 1}`),
    sub: getTranslation(locale, `process.step${i + 1}Sub`),
  }));

  return (
    <section id="process" aria-labelledby="process-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemID="https://www.pro-option.sa/#process"
      style={{ background: "var(--bg-secondary)", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* زخرفة */}
      <SectionMeta id="process" locale={locale} />
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0,
        width: "300px", height: "300px",
        background: "radial-gradient(circle, rgba(29,41,82,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", top: 0, right: 0,
        width: "200px", height: "200px",
        background: "radial-gradient(circle, rgba(232,98,42,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ display: "inline-block" }}>
            {locale === "ar" ? "منهجيتنا" : "Our Methodology"}
          </div>
          <h2 id="process-heading" style={{
            fontFamily: "'Playfair Display', 'IBM Plex Sans Arabic', serif",
            fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
            fontWeight: 700, color: "var(--accent-navy)", marginBottom: "1rem",
          }}>
            {locale === "ar" ? "مراحل عملية التقييم المهني" : "Professional Valuation Process"}
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
            fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--text-secondary)",
            maxWidth: "560px", margin: "0 auto", lineHeight: 1.75,
          }}>
            {getTranslation(locale, "process.subtitle")}
          </p>
        </div>

        {/* Desktop — خط أفقي */}
        <div className="process-desktop">
          {/* خط وصل */}
          <div style={{
            position: "relative", display: "flex",
            alignItems: "flex-start", gap: 0,
          }}>
            <div aria-hidden="true" style={{
              position: "absolute",
              top: "28px",
              left: locale === "ar" ? "auto" : "8.33%",
              right: locale === "ar" ? "8.33%" : "auto",
              width: "83.33%", height: "2px",
              background: `linear-gradient(${locale === "ar" ? "to left" : "to right"}, var(--accent-orange) 0%, rgba(29,41,82,0.15) 100%)`,
            }} />

            {steps.map((step, i) => (
              <div key={i} style={{
                flex: 1, textAlign: "center", padding: "0 0.5rem",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms`,
              }}>
                {/* Circle */}
                <div style={{
                  width: "56px", height: "56px",
                  borderRadius: "50%",
                  background: i === 0 ? "var(--accent-orange)" : "#ffffff",
                  border: i === 0 ? "none" : "2px solid rgba(29,41,82,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem",
                  boxShadow: i === 0
                    ? "0 4px 20px rgba(232,98,42,0.35)"
                    : "0 2px 10px rgba(29,41,82,0.08)",
                  position: "relative", zIndex: 1,
                  color: i === 0 ? "#fff" : "var(--accent-navy)",
                  transition: "all 0.3s ease",
                }}>
                  <span style={{
                    fontFamily: "'IBM Plex Sans', sans-serif",
                    fontSize: "0.85rem", fontWeight: 800,
                  }}>{step.num}</span>
                </div>

                <div style={{
                  background: "#ffffff",
                  border: "1.5px solid rgba(29,41,82,0.08)",
                  borderRadius: "12px", padding: "1rem 0.75rem",
                  boxShadow: "0 2px 12px rgba(29,41,82,0.06)",
                }}>
                  <div style={{
                    display: "flex", justifyContent: "center",
                    marginBottom: "0.5rem",
                    color: "var(--accent-orange)",
                  }}>{step.icon}</div>
                  <h3 style={{
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    fontSize: "0.85rem", fontWeight: 700,
                    color: "var(--accent-navy)", marginBottom: "0.25rem", lineHeight: 1.3,
                  }}>{step.title}</h3>
                  <p style={{
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0,
                  }}>{step.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile — رأسي */}
        <div className="process-mobile" style={{ flexDirection: "column", gap: "0.75rem" }}>
          {steps.map((step, i) => (
            <div key={i} style={{
              display: "flex", gap: "1rem", alignItems: "flex-start",
              background: "#ffffff",
              border: "1.5px solid rgba(29,41,82,0.08)",
              borderRadius: "12px", padding: "1.25rem",
              boxShadow: "0 2px 12px rgba(29,41,82,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : locale === "ar" ? "translateX(20px)" : "translateX(-20px)",
              transition: `opacity 0.5s ease ${i * 80}ms, transform 0.5s ease ${i * 80}ms`,
            }}>
              <div style={{
                width: "44px", height: "44px", borderRadius: "50%", flexShrink: 0,
                background: i === 0 ? "var(--accent-orange)" : "rgba(232,98,42,0.08)",
                border: i === 0 ? "none" : "1.5px solid rgba(232,98,42,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: i === 0 ? "#fff" : "var(--accent-orange)",
              }}>
                <span style={{
                  fontFamily: "'IBM Plex Sans', sans-serif",
                  fontSize: "0.875rem", fontWeight: 800,
                }}>{step.num}</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "0.95rem", fontWeight: 700,
                  color: "var(--accent-navy)", margin: "0 0 0.25rem",
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0,
                }}>{step.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
