"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { getTranslation } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import logo from "../../app/logo.jpeg";

const navLinks = [
  { href: "#services", labelKey: "nav.services"  },
  { href: "#process",  labelKey: "nav.process"   },
  { href: "#purposes", labelKey: "nav.purposes"  },
  { href: "#values",   labelKey: "nav.values"    },
  { href: "#contact",  labelKey: "nav.contact"   },
];

/* ── أيقونة الهلال (Dark) ──────────────────────────────────── */
function MoonIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"
        stroke="currentColor" strokeWidth="1.6"
        strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* ── أيقونة الشمس (Light) ─────────────────────────────────── */
function SunIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
      <path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    </svg>
  );
}

export function Header() {
  const { locale } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled,    setIsScrolled]    = React.useState(false);
  const [mobileOpen,    setMobileOpen]    = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 70);

      const sections = navLinks.map(l => l.href.replace("#", ""));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) current = id;
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const consultLabel = getTranslation(locale, "nav.consultation");

  /* الـ header يصبح ذا خلفية بعد التمرير */
  const isDarkHeader = theme === "dark";

  const headerBg = isDarkHeader
    ? isScrolled
      ? "rgba(12,18,32,0.96)"
      : "rgba(12,18,32,0.84)"
    : isScrolled
      ? "rgba(255,255,255,0.97)"
      : "rgba(255,255,255,0.88)";

  const headerBorder = isDarkHeader
    ? "1px solid rgba(255,255,255,0.08)"
    : "1px solid rgba(29,41,82,0.08)";

  const headerShadow = isDarkHeader
    ? isScrolled
      ? "0 10px 32px rgba(0,0,0,0.32)"
      : "0 8px 22px rgba(0,0,0,0.20)"
    : isScrolled
      ? "0 2px 20px rgba(29,41,82,0.08)"
      : "0 6px 18px rgba(29,41,82,0.06)";

  /* نص الـ nav فوق الـ Hero (أبيض) vs بعده (متغير) */
  const navTextColor = isDarkHeader
    ? "rgba(240,244,255,0.88)"
    : "var(--text-secondary)";

  const logoTitleColor = isDarkHeader
    ? "var(--text-on-dark)"
    : "var(--text-primary)";

  const logoSubColor = isDarkHeader
    ? "rgba(240,244,255,0.64)"
    : "var(--text-muted)";

  /* زر الوضع الليلي */
  const themeBtnLabel = theme === "dark"
    ? (locale === "ar" ? "الوضع النهاري" : "Light Mode")
    : (locale === "ar" ? "الوضع الليلي" : "Dark Mode");

  const themeBtnBorder = isDarkHeader
    ? "1px solid rgba(255,255,255,0.16)"
    : "1px solid rgba(29,41,82,0.16)";
  const themeBtnColor = isDarkHeader
    ? "rgba(240,244,255,0.82)"
    : "var(--text-muted)";
  const menuIconColor = isDarkHeader
    ? "var(--text-on-dark)"
    : "var(--text-primary)";

  return (
    <>
      <header role="banner" style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: headerBg,
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: headerBorder,
        boxShadow: headerShadow,
        transition: "background 0.4s ease, border-color 0.4s ease, box-shadow 0.4s ease",
      }}>
        <div style={{
          maxWidth: "1400px", margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          height: "72px",
        }}>
          {/* Logo */}
          <Link href="/" aria-label="برو أوبشن — الصفحة الرئيسية" style={{
            display: "flex", alignItems: "center", gap: "0.625rem",
            textDecoration: "none", flexShrink: 0,
          }}>
            <Image src={logo} alt="شعار برو أوبشن Pro Option Logo"
              width={38} height={38} style={{ borderRadius: "7px" }} priority />
            <div style={{ lineHeight: 1.1 }}>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1rem", fontWeight: 700,
                color: logoTitleColor, letterSpacing: "0.02em",
                transition: "color 0.3s",
              }}>
                Pro Option
              </div>
              <div style={{
                fontFamily: "'IBM Plex Sans Arabic', sans-serif",
                fontSize: "0.68rem",
                color: logoSubColor, letterSpacing: "0.05em",
                transition: "color 0.3s",
              }}>برو أوبشن</div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="التنقل الرئيسي" className="desktop-nav"
            style={{ alignItems: "center", gap: "0.25rem" }}>
            {navLinks.map(link => (
              <Link key={link.href} href={link.href}
                aria-label={getTranslation(locale, link.labelKey)}
                className={`nav-link ${activeSection === link.href.replace("#","") ? "active" : ""}`}
                style={{ padding: "0.35rem 0.875rem", color: navTextColor, transition: "color 0.3s" }}
              >
                {getTranslation(locale, link.labelKey)}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="desktop-actions" style={{ alignItems: "center", gap: "0.625rem" }}>
            {/* زر الوضع الليلي — الهلال */}
            <button
              onClick={toggleTheme}
              aria-label={themeBtnLabel}
              title={themeBtnLabel}
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "36px", height: "36px", borderRadius: "50%",
                border: themeBtnBorder,
                background: "transparent", cursor: "pointer",
                color: theme === "dark" ? "var(--accent-orange)" : themeBtnColor,
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = "var(--accent-orange)";
                el.style.color = "var(--accent-orange)";
                el.style.background = "var(--accent-orange-subtle)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = themeBtnBorder;
                el.style.color = theme === "dark" ? "var(--accent-orange)" : themeBtnColor;
                el.style.background = "transparent";
              }}
            >
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <LanguageSwitcher inHero={isDarkHeader} />

            <Link href="#contact" aria-label={consultLabel} style={{
              display: "inline-flex", alignItems: "center",
              background: "var(--accent-orange)", color: "#ffffff",
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              fontSize: "0.875rem", fontWeight: 700,
              padding: "0.5rem 1.375rem", borderRadius: "100px",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(232,98,42,0.30)", whiteSpace: "nowrap",
              transition: "all 0.2s ease",
            }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--accent-orange-light)"; el.style.transform = "translateY(-1px)"; el.style.boxShadow = "0 6px 22px rgba(232,98,42,0.45)"; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--accent-orange)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 4px 16px rgba(232,98,42,0.30)"; }}
            >
              {consultLabel}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="mobile-actions" style={{ alignItems: "center", gap: "0.4rem" }}>
            <button onClick={toggleTheme} aria-label={themeBtnLabel} style={{
              display: "flex", alignItems: "center", justifyContent: "center",
              width: "34px", height: "34px", borderRadius: "50%",
              border: themeBtnBorder, background: "transparent", cursor: "pointer",
              color: themeBtnColor,
              transition: "all 0.25s",
            }}>
              {theme === "dark" ? <SunIcon /> : <MoonIcon />}
            </button>

            <LanguageSwitcher inHero={isDarkHeader} />

            <button
              aria-label={mobileOpen ? "إغلاق القائمة" : "فتح القائمة"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "transparent",
                border: themeBtnBorder,
                borderRadius: "8px", padding: "0.5rem", cursor: "pointer",
                display: "flex", flexDirection: "column", gap: "5px",
                width: "40px", height: "40px", justifyContent: "center", alignItems: "center",
                transition: "border-color 0.3s",
              }}
            >
              {[0,1,2].map(i => (
                <span key={i} style={{
                  display: "block", width: "20px", height: "1.5px",
                  background: menuIconColor,
                  transition: "transform 0.3s, opacity 0.3s",
                  transform: mobileOpen
                    ? i === 0 ? "rotate(45deg) translate(4.5px,4.5px)"
                    : i === 2 ? "rotate(-45deg) translate(4.5px,-4.5px)"
                    : "none" : "none",
                  opacity: mobileOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div aria-hidden={!mobileOpen} style={{
        position: "fixed", inset: 0, zIndex: 999,
        background: "var(--accent-navy)",
        display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center", gap: "0.5rem",
        transition: "opacity 0.35s ease, visibility 0.35s ease",
        opacity: mobileOpen ? 1 : 0,
        visibility: mobileOpen ? "visible" : "hidden",
        pointerEvents: mobileOpen ? "auto" : "none",
      }}>
        <nav aria-label="قائمة الجوال" style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          gap: "0.25rem", width: "100%",
        }}>
          {navLinks.map((link, i) => (
            <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} style={{
              fontFamily: "'IBM Plex Sans Arabic', sans-serif",
              fontSize: "1.5rem", fontWeight: 600,
              color: activeSection === link.href.replace("#","") ? "#e8622a" : "rgba(255,255,255,0.88)",
              textDecoration: "none", padding: "0.75rem 2rem",
              transition: "color 0.2s",
              animation: mobileOpen ? `fadeInUp 0.4s ease ${i * 0.07}s both` : "none",
            }}>
              {getTranslation(locale, link.labelKey)}
            </Link>
          ))}
          <Link href="#contact" onClick={() => setMobileOpen(false)} style={{
            display: "inline-flex", background: "var(--accent-orange)", color: "#fff",
            fontFamily: "'IBM Plex Sans Arabic', sans-serif",
            fontSize: "1rem", fontWeight: 700,
            padding: "0.75rem 2rem", borderRadius: "100px",
            textDecoration: "none", marginTop: "1rem",
            animation: mobileOpen ? "fadeInUp 0.4s ease 0.4s both" : "none",
          }}>
            {consultLabel}
          </Link>
        </nav>
      </div>

      <div style={{ height: "72px" }} aria-hidden="true" />
    </>
  );
}
