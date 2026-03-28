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

const valueIcons = [
  /* نزاهة */ <svg key={0} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
  /* موضوعية */ <svg key={1} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><line x1="2" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5"/><path d="M12 2a15 15 0 010 20M12 2a15 15 0 000 20" stroke="currentColor" strokeWidth="1.5"/></svg>,
  /* شفافية */ <svg key={2} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>,
  /* إنصاف */ <svg key={3} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3v18M4 7l4 4-4 4M20 7l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* جودة */  <svg key={4} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2l3 6.5H22l-5.5 4 2 6.5L12 15l-6.5 4 2-6.5L2 8.5h7L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>,
];

const bgLetters = ["ن", "م", "ش", "إ", "ج"];

interface ValueCardProps {
  icon: React.ReactNode;
  letter: string;
  titleKey: string;
  descKey: string;
  index: number;
  visible: boolean;
}

function ValueCard({ icon, letter, titleKey, descKey, index, visible }: ValueCardProps) {
  const { locale } = useLanguage();
  const [hovered, setHovered] = React.useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--accent-navy)" : "#ffffff",
        border: `1.5px solid ${hovered ? "var(--accent-navy)" : "rgba(29,41,82,0.09)"}`,
        borderRadius: "14px", padding: "2rem 1.5rem",
        position: "relative", overflow: "hidden", textAlign: "center",
        transition: "all 0.35s cubic-bezier(0.16,1,0.3,1)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        boxShadow: hovered
          ? "0 14px 40px rgba(29,41,82,0.20)"
          : "0 2px 14px rgba(29,41,82,0.06)",
        opacity: visible ? 1 : 0,
        transitionDelay: `${index * 80}ms`,
      }}
    >
      {/* حرف زخرفي */}
      <span aria-hidden="true" style={{
        position: "absolute", bottom: "-0.5rem", left: "50%",
        transform: "translateX(-50%)",
        fontFamily: "'Playfair Display', serif",
        fontSize: "5.5rem", fontWeight: 800, lineHeight: 1,
        color: hovered ? "rgba(255,255,255,0.06)" : "rgba(29,41,82,0.04)",
        userSelect: "none", pointerEvents: "none",
        transition: "color 0.35s",
      }}>{letter}</span>

      {/* Icon */}
      <div style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        width: "52px", height: "52px", borderRadius: "12px",
        background: hovered ? "rgba(255,255,255,0.12)" : "rgba(232,98,42,0.08)",
        border: `1.5px solid ${hovered ? "rgba(255,255,255,0.20)" : "rgba(232,98,42,0.20)"}`,
        marginBottom: "1rem",
        color: hovered ? "#ffffff" : "var(--accent-orange)",
        transition: "all 0.35s",
      }}>{icon}</div>

      <h3 style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
        fontSize: "clamp(1rem,1.8vw,1.15rem)", fontWeight: 700,
        color: hovered ? "#ffffff" : "var(--accent-navy)",
        marginBottom: "0.5rem", transition: "color 0.35s",
      }}>
        {getTranslation(locale, titleKey)}
      </h3>
      <p style={{
        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
        fontSize: "0.82rem", lineHeight: 1.7,
        color: hovered ? "rgba(255,255,255,0.72)" : "var(--text-secondary)",
        margin: 0, transition: "color 0.35s",
      }}>
        {getTranslation(locale, descKey)}
      </p>
    </article>
  );
}

export function Values() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();

  const vals = [
    { titleKey: "values.integrity", descKey: "values.integrityDesc" },
    { titleKey: "values.objectivity", descKey: "values.objectivityDesc" },
    { titleKey: "values.transparency", descKey: "values.transparencyDesc" },
    { titleKey: "values.fairness", descKey: "values.fairnessDesc" },
    { titleKey: "values.quality", descKey: "values.qualityDesc" },
  ];

  return (
    <section id="values" aria-labelledby="values-heading"
      style={{ background: "var(--bg-secondary)", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      {/* خط زخرفي علوي */}
      <div className="gold-divider" />

      <div ref={ref} style={{ maxWidth: "1400px", margin: "3rem auto 0" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ display: "inline-block" }}>
            {locale === "ar" ? "قيمنا" : "Our Values"}
          </div>
          <h2 id="values-heading" style={{
            fontFamily: "'Playfair Display', 'IBM Plex Sans Arabic', serif",
            fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
            fontWeight: 700, color: "var(--accent-navy)", marginBottom: "1rem",
          }}>
            {locale === "ar" ? "المبادئ التي نعمل بها" : "The Principles We Work By"}
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
            fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--text-secondary)",
            maxWidth: "520px", margin: "0 auto", lineHeight: 1.75,
          }}>
            {locale === "ar"
              ? "ثوابت راسخة تُشكّل هوية برو أوبشن وتحدد طريقة عملنا في كل مشروع"
              : "Core principles that define Pro Option's identity and guide every project"}
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.25rem",
        }}>
          {vals.map((v, i) => (
            <ValueCard key={i} {...v} icon={valueIcons[i]} letter={bgLetters[i]} index={i} visible={visible} />
          ))}
        </div>

        {/* شريط tags القيم */}
        <div style={{
          display: "flex", flexWrap: "wrap", justifyContent: "center",
          gap: "0.75rem", marginTop: "3rem",
        }}>
          {(locale === "ar"
            ? ["نزاهة", "موضوعية", "شفافية", "إنصاف", "جودة"]
            : ["Integrity", "Objectivity", "Transparency", "Fairness", "Quality"]
          ).map((tag, i) => (
            <span key={i} style={{
              fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
              fontSize: "0.85rem", fontWeight: 600,
              color: "var(--accent-navy)",
              background: "#ffffff",
              border: "1.5px solid rgba(29,41,82,0.12)",
              borderRadius: "100px",
              padding: "0.4rem 1.25rem",
              boxShadow: "0 1px 6px rgba(29,41,82,0.06)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(10px)",
              transition: `opacity 0.5s ease ${(vals.length + i) * 60 + 300}ms, transform 0.5s ease ${(vals.length + i) * 60 + 300}ms`,
            }}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
