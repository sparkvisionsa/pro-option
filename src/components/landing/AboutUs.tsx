"use client";

import React from "react";
import Image from "next/image";
import { SectionMeta } from "@/components/seo/SectionMeta";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";
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

export function AboutUs() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          قسم "من نحن" — نص + صورة slider.png
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section id="about" aria-labelledby="about-heading"
        itemScope
        itemType="https://schema.org/WebPageElement"
        itemID="https://www.pro-option.sa/#about"
        style={{ background: "var(--bg-secondary)", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
      >
        {/* زخرفة خلفية */}
        <SectionMeta id="about" locale={locale} />
        <div aria-hidden="true" style={{
          position: "absolute", top: 0, bottom: 0,
          right: locale === "ar" ? "auto" : "0",
          left: locale === "ar" ? "0" : "auto",
          width: "5px",
          background: "linear-gradient(to bottom, transparent, var(--accent-orange) 30%, var(--accent-orange) 70%, transparent)",
          opacity: 0.25,
        }} />

        <div ref={ref} style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px,1fr))",
            gap: "4rem", alignItems: "center",
          }}>
            {/* ── النص ─────────────────────────────────────── */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : locale === "ar" ? "translateX(30px)" : "translateX(-30px)",
              transition: "opacity 0.8s ease, transform 0.8s ease",
            }}>
              <div className="section-label" suppressHydrationWarning style={{ display: "inline-block" }}>
                {locale === "ar" ? "من نحن" : "About Us"}
              </div>
              <h2 id="about-heading" suppressHydrationWarning style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
                fontWeight: 700, color: "var(--text-primary)",
                marginBottom: "1.25rem", lineHeight: 1.3,
              }}>
                {locale === "ar" ? (
                  <>برو أوبشن: مرجعك المهني الأول
                    <br /><span suppressHydrationWarning style={{ color: "var(--accent-orange)" }}>للاستشارات والتقييم في المملكة العربية السعودية</span>
                  </>
                ) : (
                  <>Pro Option: Your Premier Professional Reference
                    <br /><span suppressHydrationWarning style={{ color: "var(--accent-orange)" }}>for Consulting & Valuation in Saudi Arabia</span>
                  </>
                )}
              </h2>

              <p suppressHydrationWarning style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                fontSize: "clamp(0.95rem,1.6vw,1.05rem)",
                color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "1rem",
              }}>
                {getTranslation(locale, "aboutPro.description")}
              </p>
              <p suppressHydrationWarning style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                fontSize: "clamp(0.95rem,1.6vw,1.05rem)",
                color: "var(--text-secondary)", lineHeight: 1.9, marginBottom: "2rem",
              }}>
                {getTranslation(locale, "aboutPro.description2")}
              </p>

              {/* Vision & Mission */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                {[
                  { titleKey: "aboutPro.visionTitle", bodyKey: "aboutPro.visionCopy",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><circle cx="12" cy="12" r="3" stroke="#e8622a" strokeWidth="1.5"/><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z" stroke="#e8622a" strokeWidth="1.5" fill="none"/></svg> },
                  { titleKey: "aboutPro.missionTitle", bodyKey: "aboutPro.missionCopy",
                    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2L15 9H22L16.5 13.5L18.5 21L12 17L5.5 21L7.5 13.5L2 9H9L12 2Z" stroke="#e8622a" strokeWidth="1.5" fill="none"/></svg> },
                ].map((box, i) => (
                  <div key={i} style={{
                    background: "var(--card-gradient-warm)",
                    border: "1.5px solid rgba(232,98,42,0.18)",
                    borderRadius: "12px", padding: "1.25rem",
                    boxShadow: "var(--card-shadow-warm)",
                    transition: "all 0.3s ease",
                  }}
                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(232,98,42,0.35)"; el.style.boxShadow = "var(--card-shadow-warm-hover)"; el.style.transform = "translateY(-2px)"; }}
                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(232,98,42,0.18)"; el.style.boxShadow = "var(--card-shadow-warm)"; el.style.transform = "translateY(0)"; }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      {box.icon}
                      <h3 suppressHydrationWarning style={{
                        fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                        fontSize: "0.875rem", fontWeight: 700, color: "var(--accent-orange)", margin: 0,
                      }}>
                        {getTranslation(locale, box.titleKey)}
                      </h3>
                    </div>
                    <p suppressHydrationWarning style={{
                      fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                      fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0,
                    }}>
                      {getTranslation(locale, box.bodyKey)}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* ── صورة slider.png ─────────────────────────── */}
            <div style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : locale === "ar" ? "translateX(-30px)" : "translateX(30px)",
              transition: "opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s",
              position: "relative",
            }}>
              {/* إطار زخرفي */}
              <div aria-hidden="true" style={{
                position: "absolute",
                top: "6%", bottom: "6%",
                left: locale === "ar" ? "-4%" : "auto",
                right: locale === "ar" ? "auto" : "-4%",
                width: "94%",
                background: "linear-gradient(135deg, rgba(29,41,82,0.08) 0%, rgba(232,98,42,0.05) 100%)",
                border: "1.5px solid var(--border-card)",
                borderRadius: "20px",
                zIndex: 0, transition: "background-color 0.4s, border-color 0.3s",
              }} />

              {/* الصورة */}
              <div style={{
                position: "relative", zIndex: 1, borderRadius: "16px", overflow: "hidden",
                boxShadow: "0 20px 60px rgba(29,41,82,0.16), 0 4px 16px rgba(29,41,82,0.08)",
              }}>
                <Image
                  src="/slider.png"
                  alt="فريق برو أوبشن المهني — استشارات وتقييم أصول في المملكة العربية السعودية"
                  width={600}
                  height={450}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(29,41,82,0.55) 0%, transparent 55%)",
                  pointerEvents: "none",
                }} />
                <div style={{
                  position: "absolute", bottom: "1.25rem",
                  left: locale === "ar" ? "auto" : "1.25rem",
                  right: locale === "ar" ? "1.25rem" : "auto",
                }}>
                  <div suppressHydrationWarning style={{
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    fontSize: "0.85rem", fontWeight: 700, color: "#fff",
                  }}>
                    {locale === "ar" ? "خبرة مهنية موثوقة" : "Trusted Professional Expertise"}
                  </div>
                </div>
              </div>

              {/* شارة تحقق */}
              <div style={{
                position: "absolute", top: "1rem",
                left: locale === "ar" ? "auto" : "1rem",
                right: locale === "ar" ? "1rem" : "auto",
                zIndex: 2,
                background: "var(--bg-card)",
                border: "2px solid var(--border-subtle)",
                borderRadius: "10px", padding: "0.6rem 0.875rem",
                boxShadow: "var(--shadow-hover)",
                animation: "float-slow 9s ease-in-out infinite",
                transition: "background-color 0.4s",
              }}>
                <div suppressHydrationWarning style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "0.72rem", fontWeight: 700, color: "var(--accent-orange)",
                }}>
                  {locale === "ar" ? "✓ تغطية شاملة  " : "✓  National Coverage"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          Banner بصورة r.png — مع حركة عائمة
          ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <ImageBanner locale={locale} />
    </>
  );
}

function ImageBanner({ locale }: { locale: string }) {
  const { ref, visible } = useReveal();

  return (
    <section aria-label="برو أوبشن — الميدان والخبرة" style={{ background: "var(--bg-primary)", overflow: "hidden" }}>
      <div ref={ref} style={{
        maxWidth: "1400px", margin: "0 auto", padding: "0 1.5rem 5rem",
      }}>
        {/* Banner متكامل */}
        <div style={{
          position: "relative", borderRadius: "24px", overflow: "hidden",
          height: "clamp(280px, 40vw, 480px)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "opacity 0.9s ease, transform 0.9s ease",
          boxShadow: "0 24px 64px rgba(29,41,82,0.18)",
        }}>
          {/* r.png كخلفية */}
          <Image
            src="/r.png"
            alt="برو أوبشن — خبرة ميدانية في تقييم الأصول والاستشارات المهنية بالسعودية"
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />

          {/* Overlay تدرجي */}
          <div style={{
            position: "absolute", inset: 0,
            background: locale === "ar"
              ? "linear-gradient(to left, rgba(29,41,82,0.88) 0%, rgba(29,41,82,0.60) 50%, transparent 100%)"
              : "linear-gradient(to right, rgba(29,41,82,0.88) 0%, rgba(29,41,82,0.60) 50%, transparent 100%)",
          }} />

          {/* محتوى فوق الصورة */}
          <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center",
            padding: "2.5rem",
            justifyContent: locale === "ar" ? "flex-end" : "flex-start",
          }}>
            <div style={{ maxWidth: "480px" }}>
              <div className="section-label" suppressHydrationWarning style={{
                display: "inline-block",
                background: "rgba(232,98,42,0.20)",
                borderColor: "rgba(232,98,42,0.40)",
                color: "#ffb090",
              }}>
                {locale === "ar" ? "لماذا برو أوبشن؟" : "Why Pro Option?"}
              </div>
              <h2 suppressHydrationWarning style={{
                fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
                fontSize: "clamp(1.5rem,3vw,2.25rem)", fontWeight: 800,
                color: "#ffffff", lineHeight: 1.25, marginBottom: "1rem",
              }}>
                {locale === "ar"
                  ? "نحن نجمع بين الخبرة الميدانية والدقة الأكاديمية"
                  : "We Combine Field Expertise with Academic Precision"}
              </h2>
              <p suppressHydrationWarning style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                fontSize: "clamp(0.88rem,1.5vw,1rem)",
                color: "rgba(255,255,255,0.75)", lineHeight: 1.8, marginBottom: "1.75rem",
              }}>
                {locale === "ar"
                  ? "فريقنا من المحللين المعتمدين يقدم تقييمات دقيقة ومعاينات ميدانية شاملة في جميع مناطق المملكة العربية السعودية."
                  : "Our team of certified analysts delivers precise valuations and comprehensive field inspections across all regions of Saudi Arabia."}
              </p>
              <a href="#contact" suppressHydrationWarning style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--accent-orange)", color: "#fff",
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontSize: "0.95rem", fontWeight: 700,
                padding: "0.75rem 1.75rem", borderRadius: "100px",
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(232,98,42,0.40)",
                transition: "all 0.25s ease",
              }}
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_name: "contact_us_now",
                    location: "about_banner",
                    target_section: "contact",
                  })
                }
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--accent-orange-light)"; el.style.transform = "translateY(-2px)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--accent-orange)"; el.style.transform = "translateY(0)"; }}
              >
                {locale === "ar" ? "تواصل معنا الآن" : "Contact Us Now"}
              </a>
            </div>
          </div>

          {/* عناصر هندسية عائمة فوق الصورة */}
          <div aria-hidden="true">
            <div className="geo-shape geo-shape-1" style={{
              position: "absolute", top: "10%", right: locale === "ar" ? "auto" : "8%", left: locale === "ar" ? "8%" : "auto",
              width: "80px", opacity: 0.15,
            }}>
              <svg viewBox="0 0 100 100" fill="none">
                <polygon points="50,5 95,50 50,95 5,50" stroke="white" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
            <div className="geo-shape geo-shape-3" style={{
              position: "absolute", bottom: "15%", right: locale === "ar" ? "auto" : "12%", left: locale === "ar" ? "12%" : "auto",
              width: "50px", opacity: 0.12,
            }}>
              <svg viewBox="0 0 100 100" fill="none">
                <circle cx="50" cy="50" r="44" stroke="white" strokeWidth="1" strokeDasharray="5 3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
