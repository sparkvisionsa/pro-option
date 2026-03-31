"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import logo from "../../app/logo.jpeg";

const services = [
  "ourServices.advisory",
  "ourServices.technical",
  "ourServices.valuation",
  "ourServices.realEstate",
  "ourServices.inventory",
  "ourServices.statistical",
];

export function Footer() {
  const { locale } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--accent-navy)",
        color: "rgba(255,255,255,0.80)",
        padding: "5rem 1.5rem 0",
        position: "relative", overflow: "hidden",
      }}
    >
      <div aria-hidden="true" style={{
        position: "absolute", top: "-20%", right: "-10%",
        width: "500px", height: "500px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(232,98,42,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div aria-hidden="true" style={{
        position: "absolute", bottom: "10%", left: "-5%",
        width: "300px", height: "300px", borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,255,255,0.02) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "3rem", marginBottom: "4rem",
        }}>

          {/* Brand Column */}
          <div>
            <Link href="/" aria-label="برو أوبشن للاستشارات المهنية" style={{
              display: "flex", alignItems: "center", gap: "0.625rem",
              textDecoration: "none", marginBottom: "1.25rem",
            }}>
              <Image src={logo} alt="شعار برو أوبشن للاستشارات المهنية" width={42} height={42} style={{ borderRadius: "8px" }} />
              <div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem", fontWeight: 700, color: "#ffffff",
                }}>
                  Pro Option for Professional Consultant
                </div>
                <div style={{
                  fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                  fontSize: "0.72rem", color: "rgba(255,255,255,0.5)",
                }}>برو أوبشن للاستشارات المهنية</div>
              </div>
            </Link>
            <p suppressHydrationWarning style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
              fontSize: "0.88rem", lineHeight: 1.75,
              color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem",
            }}>
              {locale === "ar"
                ? "شركة استشارات مهنية سعودية معتمدة في الرياض — التقييم والاستشارات وفق أعلى المعايير الدولية."
                : "A certified Saudi professional consulting firm in Riyadh — valuation and consulting to the highest international standards."}
            </p>

            {/* Social Icons */}
            <div style={{ display: "flex", gap: "0.625rem" }}>
              {[
                { href: "https://www.linkedin.com/company/pro-option/", label: "LinkedIn", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg> },
                { href: "https://x.com/prooptionsa", label: "X (Twitter)", icon: <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
                { href: "https://www.snapchat.com/add/pro-option", label: "Snapchat", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.86 3.44 8.92 8 9.78V15.5c-.5.12-1 .22-1.5.22-.96 0-1.73-.48-2.1-1.26-.26-.55-.3-1.02-.3-1.52 0-.1.01-.2.01-.3C5.5 12.38 5 11.73 5 11c0-.73.55-1.34 1.26-1.43.08-.89.31-1.75.7-2.55C7.97 5.2 9.86 4 12 4s4.03 1.2 5.04 3.02c.39.8.62 1.66.7 2.55C18.45 9.66 19 10.27 19 11c0 .73-.5 1.38-1.11 1.64.0.1.01.2.01.3 0 .5-.04.97-.3 1.52-.37.78-1.14 1.26-2.1 1.26-.5 0-1-.1-1.5-.22v6.28C18.56 20.92 22 16.86 22 12c0-5.52-4.48-10-10-10z"/></svg> },
              ].map(({ href, label, icon }) => (
                <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: "36px", height: "36px", borderRadius: "8px",
                    background: "rgba(255,255,255,0.06)",
                    border: "1px solid rgba(255,255,255,0.10)",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none", transition: "all 0.2s ease",
                  }}
                  onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(232,98,42,0.20)"; el.style.borderColor = "rgba(232,98,42,0.40)"; el.style.color = "#e8622a"; }}
                  onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "rgba(255,255,255,0.06)"; el.style.borderColor = "rgba(255,255,255,0.10)"; el.style.color = "rgba(255,255,255,0.55)"; }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 suppressHydrationWarning style={{
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em",
              color: "var(--accent-orange)", marginBottom: "1.25rem",
            }}>
              {locale === "ar" ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { href: "#about",    labelAr: "من نحن",       labelEn: "About Us" },
                { href: "#services", labelAr: "خدماتنا",     labelEn: "Services" },
                { href: "#process",  labelAr: "منهجيتنا",    labelEn: "Process"  },
                { href: "#purposes", labelAr: "أغراض التقييم", labelEn: "Valuation Purposes" },
                { href: "#values",   labelAr: "قيمنا",       labelEn: "Values"   },
                { href: "#faq",      labelAr: "الأسئلة الشائعة", labelEn: "FAQ" },
                { href: "#contact",  labelAr: "تواصل معنا",  labelEn: "Contact"  },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} suppressHydrationWarning style={{
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    fontSize: "0.88rem", color: "rgba(255,255,255,0.55)",
                    textDecoration: "none", transition: "color 0.2s",
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent-orange)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <span style={{ color: "rgba(232,98,42,0.5)", fontSize: "0.5rem" }}>◆</span>
                    {locale === "ar" ? link.labelAr : link.labelEn}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 suppressHydrationWarning style={{
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em",
              color: "var(--accent-orange)", marginBottom: "1.25rem",
            }}>
              {locale === "ar" ? "خدماتنا" : "Our Services"}
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {services.map(key => (
                <li key={key}>
                  <Link href="#services" suppressHydrationWarning style={{
                    fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                    fontSize: "0.88rem", color: "rgba(255,255,255,0.55)",
                    textDecoration: "none", transition: "color 0.2s",
                    display: "inline-flex", alignItems: "center", gap: "0.35rem",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent-orange)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                  >
                    <span style={{ color: "rgba(232,98,42,0.5)", fontSize: "0.5rem" }}>◆</span>
                    {getTranslation(locale, key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 suppressHydrationWarning style={{
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.12em",
              color: "var(--accent-orange)", marginBottom: "1.25rem",
            }}>
              {locale === "ar" ? "تواصل معنا" : "Contact"}
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}>
              {[
                { icon: "✉", label: "Info@pro-option.sa", href: "mailto:Info@pro-option.sa" },
                { icon: "📞", label: "+966 55 576 5446", href: "tel:+966555765446" },
                { icon: "💬", label: locale === "ar" ? "واتساب" : "WhatsApp", href: "https://wa.me/966555765446" },
                { icon: "📍", label: locale === "ar" ? "الرياض، المملكة العربية السعودية" : "Riyadh, Saudi Arabia", href: "#" },
              ].map((item, i) => (
                <a key={i} href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex", alignItems: "center", gap: "0.625rem",
                    textDecoration: "none", transition: "color 0.2s",
                    color: "rgba(255,255,255,0.55)",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent-orange)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.55)"; }}
                >
                  <span style={{ fontSize: "0.85rem" }}>{item.icon}</span>
                  <span suppressHydrationWarning style={{
                    fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
                    fontSize: "0.88rem",
                  }}>{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(232,98,42,0.30), transparent)",
          marginBottom: "1.75rem",
        }} />

        {/* Bottom bar */}
        <div style={{
          display: "flex", flexWrap: "wrap", alignItems: "center",
          justifyContent: "space-between", gap: "0.75rem",
          paddingBottom: "2rem",
        }}>
          <p suppressHydrationWarning style={{
            fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
            fontSize: "0.8rem", color: "rgba(255,255,255,0.35)", margin: 0,
          }}>
            © {year}{" "}
            {locale === "ar"
              ? "برو أوبشن للاستشارات المهنية. جميع الحقوق محفوظة."
              : "Pro Option for Professional Consultant. All rights reserved."}
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { href: "/privacy", labelAr: "سياسة الخصوصية", labelEn: "Privacy Policy" },
              { href: "/terms",   labelAr: "الشروط والأحكام",  labelEn: "Terms of Service" },
            ].map(link => (
              <Link key={link.href} href={link.href} suppressHydrationWarning style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.78rem", color: "rgba(255,255,255,0.35)",
                textDecoration: "none", transition: "color 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.color = "var(--accent-orange)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.35)"; }}
              >
                {locale === "ar" ? link.labelAr : link.labelEn}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
