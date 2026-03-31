"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { SectionMeta } from "@/components/seo/SectionMeta";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";
import { getTranslation } from "@/lib/i18n";

function useCountUp(target: number, duration = 2000, startCounting = false) {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    if (!startCounting) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else { setCount(Math.floor(start)); }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, startCounting]);
  return count;
}

export function Hero() {
  const { locale } = useLanguage();
  const [statsVisible, setStatsVisible] = React.useState(false);
  const statsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const timer = setTimeout(() => setStatsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const projectCount = useCountUp(500, 2200, statsVisible);

  return (
    <section
      id="hero"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemID="https://www.pro-option.sa/#hero"
      aria-label="القسم الرئيسي - برو أوبشن للاستشارات المهنية"
      style={{
        position: "relative",
        background: "var(--bg-primary)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <SectionMeta id="hero" locale={locale} />
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Animated orange mist */}
        <div className="hero-mist">
          <div className="hero-mist-layer hero-mist-1" />
          <div className="hero-mist-layer hero-mist-2" />
          <div className="hero-mist-layer hero-mist-3" />
        </div>

        <svg
          className="geo-shape geo-shape-3"
          style={{ top: "10%", left: "4%", width: "clamp(60px,8vw,110px)", opacity: 0.08 }}
          viewBox="0 0 100 100"
        >
          <circle cx="50" cy="50" r="45" stroke="var(--accent-navy)" strokeWidth="1" fill="none" strokeDasharray="4 3"/>
          <circle cx="50" cy="50" r="30" stroke="var(--accent-orange)" strokeWidth="0.6" fill="none"/>
        </svg>

        <svg
          className="geo-shape geo-shape-1"
          style={{ bottom: "15%", right: "5%", width: "clamp(50px,6vw,90px)", opacity: 0.10 }}
          viewBox="0 0 100 100"
        >
          <polygon points="50,5 95,50 50,95 5,50" stroke="var(--accent-orange)" strokeWidth="1.5" fill="none"/>
          <polygon points="50,20 80,50 50,80 20,50" stroke="var(--accent-navy)" strokeWidth="0.8" fill="none"/>
        </svg>

        <div style={{
          position: "absolute", top: "5%", bottom: "5%",
          left: locale === "ar" ? "auto" : "0",
          right: locale === "ar" ? "0" : "auto",
          width: "4px",
          background: "linear-gradient(to bottom, transparent, var(--accent-orange) 40%, var(--accent-orange) 60%, transparent)",
          opacity: 0.18, borderRadius: "2px",
        }} />

        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.025 }}>
          <defs>
            <pattern id="dots" width="32" height="32" patternUnits="userSpaceOnUse">
              <circle cx="16" cy="16" r="1.5" fill="var(--accent-navy)"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)"/>
        </svg>
      </div>

      <div style={{
        position: "relative", zIndex: 1,
        maxWidth: "1400px", margin: "0 auto",
        padding: "0.5rem 1.5rem 2rem", width: "100%",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "3rem", alignItems: "center",
        }}>

          <div style={{ order: locale === "ar" ? 1 : 0 }}>
            <h1 suppressHydrationWarning style={{
              fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
              fontSize: "clamp(2.2rem, 5.5vw, 4rem)",
              fontWeight: 800, lineHeight: 1.18,
              color: "var(--text-primary)",
              marginBottom: "1rem",
              animation: "fadeInUp 0.9s ease 0.2s both",
            }}>
              {locale === "ar" ? (
                <>برو أوبشن{" "}
                  <span suppressHydrationWarning style={{ color: "var(--accent-orange)" }}>للاستشارات</span>
                  <br />المهنية
                </>
              ) : (
                <>Pro Option{" "}
                  <span suppressHydrationWarning style={{ color: "var(--accent-orange)" }}>Professional</span>
                  <br />Consulting
                </>
              )}
            </h1>

            <p suppressHydrationWarning style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)", fontWeight: 500,
              color: "var(--text-secondary)",
              marginBottom: "0.5rem", lineHeight: 1.6,
              animation: "fadeInUp 0.9s ease 0.35s both",
            }}>
              {locale === "ar"
                ? "شريكك الاستراتيجي لقرارات ترتكز على الخبرة والموثوقية وأحدث الدراسات"
                : "Your strategic partner for decisions grounded in expertise, reliability, and up-to-date studies"}
            </p>
            <p suppressHydrationWarning style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem", color: "var(--accent-orange)",
              marginBottom: "1.5rem", letterSpacing: "0.08em", fontWeight: 600,
              animation: "fadeInUp 0.9s ease 0.45s both",
            }}>
              {locale === "ar"
                ? "من الاستراتيجية - نصنع لك اليقين"
                : "From strategy - we create certainty for you"}
            </p>

            <p suppressHydrationWarning style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
              fontSize: "clamp(0.88rem, 1.5vw, 0.98rem)",
              color: "var(--text-muted)", lineHeight: 1.9,
              marginBottom: "2.5rem", maxWidth: "520px",
              animation: "fadeInUp 0.9s ease 0.55s both",
            }}>
              {locale === "ar"
                ? "استشارات مهنية متكاملة وفق المعايير الدولية للشركات والمؤسسات والجهات الحكومية والافراد في جميع مناطق المملكة العربية السعودية"
                : "Integrated professional consulting aligned with international standards for companies, institutions, government entities, and individuals across all regions of Saudi Arabia"}
            </p>

            {/* CTAs */}
            <div style={{
              display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "3rem",
              animation: "fadeInUp 0.9s ease 0.65s both",
            }}>
              <Link href="#contact" aria-label="طلب خدمة" suppressHydrationWarning style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--accent-orange)", color: "#fff",
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontSize: "1rem", fontWeight: 700,
                padding: "0.875rem 2rem", borderRadius: "100px",
                textDecoration: "none",
                boxShadow: "0 6px 24px rgba(232,98,42,0.35)",
                transition: "all 0.25s ease",
              }}
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_name: "free_consultation",
                    location: "hero",
                    target_section: "contact",
                  })
                }
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--accent-orange-light)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 10px 32px rgba(232,98,42,0.50)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--accent-orange)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 6px 24px rgba(232,98,42,0.35)"; }}
              >
                {locale === "ar" ? "طلب خدمة" : "Book Free Consultation"}
              </Link>
              <Link href="#services" aria-label="استكشف خدماتنا" suppressHydrationWarning style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                background: "var(--bg-card)", color: "var(--text-primary)",
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontSize: "1rem", fontWeight: 600,
                padding: "0.875rem 2rem", borderRadius: "100px",
                textDecoration: "none",
                border: "1.5px solid var(--border-card)",
                boxShadow: "var(--shadow-card)",
                transition: "all 0.25s ease",
              }}
                onClick={() =>
                  trackEvent("cta_click", {
                    cta_name: "explore_services",
                    location: "hero",
                    target_section: "services",
                  })
                }
                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-subtle)"; el.style.background = "var(--accent-orange-subtle)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "var(--shadow-hover)"; }}
                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "var(--border-card)"; el.style.background = "var(--bg-card)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "var(--shadow-card)"; }}
              >
                {locale === "ar" ? "استكشف خدماتنا" : "Explore Services"}
              </Link>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="hero-stats-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0.75rem",
              animation: "fadeInUp 0.9s ease 0.8s both",
            }}>
              {[
                { value: `+${projectCount}`, label: locale === "ar" ? "مشروع مكتمل" : "Projects Done" },
                { value: "✓", label: locale === "ar" ? "مرخصة من الهيئة السعودية للمقيمين المعتمدين" : "Licensed by the Saudi Authority for Accredited Valuers" },
                { value: "1h", label: locale === "ar" ? "وقت الرد" : "Response Time" },
              ].map((stat, i) => (
                <div key={i} suppressHydrationWarning style={{
                  background: "var(--bg-secondary)",
                  border: "1.5px solid var(--border-card)",
                  borderRadius: "12px", padding: "1rem 0.75rem", textAlign: "center",
                  transition: "border-color 0.3s, background-color 0.4s",
                }}>
                  <div suppressHydrationWarning style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "clamp(1.4rem,2.5vw,1.8rem)", fontWeight: 800,
                    color: "var(--accent-orange)", lineHeight: 1,
                    animation: statsVisible ? `count-up 0.6s ease ${i * 0.15}s both` : "none",
                  }}>
                    {stat.value}
                  </div>
                  <div suppressHydrationWarning style={{
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    fontSize: "0.72rem", color: "var(--text-muted)",
                    marginTop: "0.3rem", lineHeight: 1.3,
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            order: locale === "ar" ? 0 : 1,
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
            animation: "fadeInLeft 1s ease 0.3s both",
          }}>
            <div aria-hidden="true" style={{
              position: "absolute",
              top: "10%", bottom: "10%",
              left: locale === "ar" ? "auto" : "8%",
              right: locale === "ar" ? "8%" : "auto",
              width: "88%",
              background: "var(--bg-secondary)",
              border: "1.5px solid var(--border-card)",
              borderRadius: "24px",
              zIndex: 0,
              transition: "background-color 0.4s, border-color 0.3s",
            }} />

            <div className="float-img" style={{
              position: "relative", zIndex: 1,
              width: "100%", maxWidth: "520px",
              borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 20px 60px rgba(29,41,82,0.18), 0 6px 20px rgba(29,41,82,0.10)",
            }}>
              <Image
                src="/r.png"
                alt="برو أوبشن - استشارات مهنية وتقييم أصول في المملكة العربية السعودية"
                width={520}
                height={420}
                style={{ width: "100%", height: "auto", display: "block" }}
                priority
              />
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(29,41,82,0.65) 0%, transparent 100%)",
                pointerEvents: "none",
              }} />
              <div style={{
                position: "absolute", bottom: "1.25rem",
                left: locale === "ar" ? "auto" : "1.25rem",
                right: locale === "ar" ? "1.25rem" : "auto",
              }}>
                <div suppressHydrationWarning style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "0.8rem", color: "rgba(255,255,255,0.9)",
                  fontWeight: 700, lineHeight: 1.3,
                }}>
                  {locale === "ar" ? "تغطية شاملة" : "Comprehensive Coverage"}
                </div>
                <div suppressHydrationWarning style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.68rem", color: "rgba(255,255,255,0.65)",
                }}>
                  {locale === "ar" ? "جميع مناطق المملكة العربية السعودية" : "All regions of Saudi Arabia"}
                </div>
              </div>
            </div>

            {/* Badge */}
            <div className="hero-badge-top" style={{
              position: "absolute",
              top: "8%",
              left: locale === "ar" ? "auto" : "0",
              right: locale === "ar" ? "0" : "auto",
              background: "var(--bg-card)",
              border: "2px solid var(--accent-orange)",
              borderRadius: "12px", padding: "0.75rem 1rem",
              boxShadow: "0 6px 24px rgba(232,98,42,0.18)",
              animation: "float-slow 8s ease-in-out infinite",
              zIndex: 2,
              transition: "background-color 0.4s",
            }}>
              <div suppressHydrationWarning style={{
                fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                fontSize: "0.75rem", fontWeight: 800,
                color: "var(--accent-orange)", lineHeight: 1.3,
                maxWidth: "120px",
              }}>{locale === "ar" ? "مرخصة من الهيئة السعودية للمقيمين المعتمدين" : "Licensed by Saudi Authority for Accredited Valuers"}</div>
            </div>

            <div className="hero-badge-bottom" style={{
              position: "absolute",
              bottom: "12%",
              left: locale === "ar" ? "0" : "auto",
              right: locale === "ar" ? "auto" : "0",
              background: "var(--accent-navy)",
              borderRadius: "12px", padding: "0.75rem 1rem",
              boxShadow: "0 6px 24px rgba(29,41,82,0.30)",
              animation: "float-medium 10s ease-in-out infinite",
              zIndex: 2,
            }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem", fontWeight: 900, color: "#fff", lineHeight: 1,
              }}>+500</div>
              <div suppressHydrationWarning style={{
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontSize: "0.68rem", color: "rgba(255,255,255,0.65)", marginTop: "0.2rem",
              }}>
                {locale === "ar" ? "مشروع منجز" : "Projects"}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fade to next section */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: 0, left: 0, right: 0, height: "80px",
        background: "linear-gradient(to bottom, transparent, var(--bg-secondary))",
        pointerEvents: "none",
      }} />
    </section>
  );
}
