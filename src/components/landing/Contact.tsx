"use client";

import React from "react";
import { SectionMeta } from "@/components/seo/SectionMeta";
import { useLanguage } from "@/context/LanguageContext";
import { trackEvent } from "@/lib/analytics";
import { getTranslation } from "@/lib/i18n";
import { ContactForm } from "./ContactForm";

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

const contactItems = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="#e8622a" strokeWidth="1.5"/><polyline points="22,6 12,13 2,6" stroke="#e8622a" strokeWidth="1.5"/></svg>,
    labelAr: "البريد الإلكتروني", labelEn: "Email",
    value: "Info@pro-option.sa",
    href: "mailto:Info@pro-option.sa",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.07 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="#e8622a" strokeWidth="1.5"/></svg>,
    labelAr: "هاتف", labelEn: "Phone",
    value: "+966 55 576 5446",
    href: "tel:+966555765446",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="#25d366" strokeWidth="1.5"/></svg>,
    labelAr: "واتساب", labelEn: "WhatsApp",
    value: "+966 55 576 5446",
    href: "https://wa.me/966555765446",
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="#e8622a" strokeWidth="1.5"/><circle cx="12" cy="10" r="3" stroke="#e8622a" strokeWidth="1.5"/></svg>,
    labelAr: "الموقع", labelEn: "Location",
    value: "الرياض — المملكة العربية السعودية",
    href: "https://maps.google.com/?q=Riyadh,Saudi+Arabia",
  },
];

export function Contact() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <section id="contact" aria-labelledby="contact-heading"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemID="https://www.pro-option.sa/#contact"
      style={{ background: "var(--bg-secondary)", padding: "6rem 1.5rem", position: "relative", overflow: "hidden" }}
    >
      <SectionMeta id="contact" locale={locale} />
      <div className="gold-divider" style={{ position: "absolute", top: 0, left: "5%", right: "5%" }} />

      {/* خلفية دائرية كحلية فاتحة */}
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "-10%", right: "-8%",
        width: "420px", height: "420px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(29,41,82,0.05) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div ref={ref} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ display: "inline-block" }}>
            {locale === "ar" ? "تواصل معنا" : "Contact Us"}
          </div>
          <h2 id="contact-heading" style={{
            fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
            fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
            fontWeight: 700, color: "var(--text-primary)", marginBottom: "1rem",
          }}>
            {locale === "ar" ? "نسعد بخدمتك" : "We're Here to Help"}
          </h2>
          <p style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
            fontSize: "clamp(0.95rem,1.6vw,1.05rem)", color: "var(--text-secondary)",
            maxWidth: "520px", margin: "0 auto", lineHeight: 1.75,
          }}>
            {getTranslation(locale, "contact.subtitle")}
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem", alignItems: "start",
        }}>
          {/* Contact Info */}
          <div style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : locale === "ar" ? "translateX(30px)" : "translateX(-30px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {contactItems.map((item, i) => (
                <a key={i} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={locale === "ar" ? item.labelAr : item.labelEn}
                  onClick={() =>
                    trackEvent("contact_click", {
                      location: "contact_section",
                      method: item.href.startsWith("mailto:")
                        ? "email"
                        : item.href.startsWith("tel:")
                          ? "phone"
                          : item.href.includes("wa.me")
                            ? "whatsapp"
                            : "location",
                    })
                  }
                  style={{
                    display: "flex", alignItems: "center", gap: "1rem",
                    background: "var(--card-gradient-warm)",
                    border: "1.5px solid rgba(232,98,42,0.18)",
                    borderRadius: "12px", padding: "1.25rem 1.5rem",
                    textDecoration: "none",
                    boxShadow: "var(--card-shadow-warm)",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(232,98,42,0.30)";
                    el.style.transform = "translateY(-2px)";
                    el.style.boxShadow = "var(--card-shadow-warm-hover)";
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(232,98,42,0.18)";
                    el.style.transform = "translateY(0)";
                    el.style.boxShadow = "var(--card-shadow-warm)";
                  }}
                >
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "10px", flexShrink: 0,
                    background: "rgba(232,98,42,0.07)",
                    border: "1px solid rgba(232,98,42,0.18)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>{item.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.7rem", fontWeight: 700,
                      color: "var(--text-muted)", letterSpacing: "0.08em", marginBottom: "0.2rem",
                    }}>
                      {locale === "ar" ? item.labelAr : item.labelEn}
                    </div>
                    <div style={{
                      fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                      fontSize: "0.95rem", fontWeight: 600,
                      color: "var(--accent-navy)",
                    }}>{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Working hours */}
            <div style={{
              marginTop: "1.25rem",
              background: "var(--card-gradient-warm)",
              border: "1.5px solid rgba(232,98,42,0.18)",
              borderRadius: "12px", padding: "1.25rem 1.5rem",
              boxShadow: "var(--card-shadow-warm)",
            }}>
              <div style={{
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontSize: "0.82rem", fontWeight: 700,
                color: "var(--accent-navy)", marginBottom: "0.4rem",
              }}>
                {locale === "ar" ? "ساعات العمل" : "Working Hours"}
              </div>
              <div style={{
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontSize: "0.82rem", color: "var(--text-secondary)", lineHeight: 1.7,
              }}>
                {locale === "ar"
                  ? "الأحد – الخميس: 8:00 ص – 5:00 م"
                  : "Sun – Thu: 8:00 AM – 5:00 PM"}
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: "var(--card-gradient-warm)",
            border: "1.5px solid rgba(232,98,42,0.18)",
            borderRadius: "16px", padding: "2rem",
            boxShadow: "var(--card-shadow-warm)",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : locale === "ar" ? "translateX(-30px)" : "translateX(30px)",
            transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          }}>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
