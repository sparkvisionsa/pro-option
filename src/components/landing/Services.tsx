"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";
import { getTranslation } from "@/lib/i18n";

function useReveal(threshold = 0.08) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      obs.observe(ref.current);
    }

    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

const serviceImages = {
  management:
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=700&q=80&auto=format&fit=crop",
  technical:
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=80&auto=format&fit=crop",
  machinery:
    "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=700&q=80&auto=format&fit=crop",
  realEstate:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=700&q=80&auto=format&fit=crop",
  inventory:
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80&auto=format&fit=crop",
  statistical:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=700&q=80&auto=format&fit=crop",
};

interface ServiceItem {
  imageUrl: string;
  imageAlt: string;
  titleAr: string;
  titleEn: string;
  descAr: string;
  descEn: string;
  eyebrowAr: string;
  eyebrowEn: string;
  accent: string;
}

interface CardProps {
  service: ServiceItem;
  index: number;
  visible: boolean;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onFocus: () => void;
  onBlur: () => void;
  onClick: () => void;
}

function ServiceCard({
  service,
  index,
  visible,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
  onClick,
}: CardProps) {
  const { locale } = useLanguage();
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const title = locale === "ar" ? service.titleAr : service.titleEn;
  const desc = locale === "ar" ? service.descAr : service.descEn;
  const eyebrow = locale === "ar" ? service.eyebrowAr : service.eyebrowEn;

  return (
    <article
      role="button"
      tabIndex={0}
      aria-expanded={isOpen}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
      onClick={onClick}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onClick();
        }
      }}
      style={{
        position: "relative",
        minHeight: "238px",
        borderRadius: "22px",
        overflow: "hidden",
        cursor: "pointer",
        isolation: "isolate",
        padding: "1.15rem",
        background: isOpen
          ? "linear-gradient(160deg, rgba(8,14,28,0.96), rgba(17,27,46,0.92))"
          : isDarkMode
            ? "linear-gradient(160deg, rgba(21,34,58,0.96), rgba(12,18,32,0.92))"
            : "linear-gradient(160deg, var(--bg-card), rgba(245,247,251,0.92))",
        border: `1px solid ${
          isOpen
            ? "rgba(232,98,42,0.34)"
            : isDarkMode
              ? "rgba(255,255,255,0.08)"
              : "rgba(29,41,82,0.10)"
        }`,
        boxShadow: isOpen
          ? "0 24px 50px rgba(29,41,82,0.22), 0 12px 30px rgba(232,98,42,0.16)"
          : isDarkMode
            ? "0 10px 28px rgba(0,0,0,0.22)"
            : "0 6px 20px rgba(29,41,82,0.07)",
        transform: visible
          ? isOpen
            ? "translateY(-10px) scale(1.045)"
            : "translateY(0) scale(1)"
          : "translateY(30px) scale(0.98)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.55s cubic-bezier(0.16,1,0.3,1) ${
          index * 70
        }ms, opacity 0.55s ease ${index * 70}ms, box-shadow 0.35s ease, border-color 0.35s ease, background 0.35s ease`,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={service.imageUrl}
        alt={service.imageAlt}
        loading="lazy"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "scale(1.08)" : "scale(1.18)",
          filter: isOpen ? "saturate(1.05)" : "blur(6px) saturate(0.85)",
          transition:
            "opacity 0.42s ease, transform 0.75s cubic-bezier(0.16,1,0.3,1), filter 0.42s ease",
          zIndex: -3,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: isOpen
            ? "linear-gradient(180deg, rgba(8,14,28,0.16) 0%, rgba(8,14,28,0.62) 42%, rgba(8,14,28,0.92) 100%)"
            : isDarkMode
              ? "linear-gradient(180deg, rgba(21,34,58,0.90) 0%, rgba(12,18,32,0.96) 100%)"
              : "linear-gradient(180deg, rgba(255,255,255,0.92) 0%, rgba(245,247,251,0.98) 100%)",
          transition: "background 0.35s ease",
          zIndex: -2,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto auto -48px -36px",
          width: "130px",
          height: "130px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${service.accent} 0%, rgba(232,98,42,0) 72%)`,
          opacity: isOpen ? 0.32 : 0.12,
          transition: "opacity 0.35s ease, transform 0.35s ease",
          transform: isOpen ? "scale(1.1)" : "scale(1)",
          zIndex: -1,
        }}
      />

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          width: "42px",
          height: "42px",
          borderRadius: "14px",
          border: `1px solid ${
            isOpen
              ? "rgba(255,255,255,0.18)"
              : isDarkMode
                ? "rgba(255,255,255,0.10)"
                : "rgba(232,98,42,0.18)"
          }`,
          background: isOpen
            ? "rgba(255,255,255,0.08)"
            : isDarkMode
              ? "rgba(255,255,255,0.06)"
              : "rgba(232,98,42,0.07)",
          backdropFilter: "blur(10px)",
        }}
      />

      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "208px",
          height: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "0.75rem",
          }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              width: "fit-content",
              maxWidth: "calc(100% - 56px)",
              padding: "0.38rem 0.8rem",
              borderRadius: "999px",
              border: `1px solid ${
                isOpen ? "rgba(255,255,255,0.14)" : "rgba(232,98,42,0.16)"
              }`,
              background: isOpen
                ? "rgba(255,255,255,0.08)"
                : isDarkMode
                  ? "rgba(255,255,255,0.06)"
                  : "rgba(232,98,42,0.08)",
              color: isOpen
                ? "rgba(255,255,255,0.88)"
                : isDarkMode
                  ? "rgba(240,244,255,0.72)"
                  : "var(--accent-orange)",
              fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              transition: "all 0.35s ease",
            }}
          >
            {eyebrow}
          </span>

          <span
            style={{
              fontFamily: "'IBM Plex Sans', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 800,
              color: isOpen
                ? "rgba(255,255,255,0.92)"
                : isDarkMode
                  ? "rgba(240,244,255,0.56)"
                  : "var(--text-muted)",
              transition: "color 0.35s ease",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div style={{ marginTop: "1.6rem" }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', 'IBM Plex Sans Arabic', serif",
              fontSize: "clamp(1.05rem, 1.6vw, 1.34rem)",
              fontWeight: 700,
              color: isOpen
                ? "#ffffff"
                : isDarkMode
                  ? "rgba(240,244,255,0.96)"
                  : "var(--text-primary)",
              lineHeight: 1.35,
              margin: 0,
              maxWidth: "16ch",
              transition: "color 0.35s ease, transform 0.35s ease",
              transform: isOpen ? "translateY(-2px)" : "translateY(0)",
            }}
          >
            {title}
          </h3>
        </div>

        <div
          style={{
            display: "grid",
            gap: "0.8rem",
            alignSelf: "stretch",
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? "translateY(0)" : "translateY(14px)",
            maxHeight: isOpen ? "160px" : "0",
            overflow: "hidden",
            transition:
              "opacity 0.32s ease, transform 0.42s cubic-bezier(0.16,1,0.3,1), max-height 0.42s ease",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "rgba(255,255,255,0.82)",
              fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
              fontSize: "0.83rem",
              lineHeight: 1.75,
            }}
          >
            {desc}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              color: "#ffffff",
              fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
              fontSize: "0.76rem",
              fontWeight: 700,
            }}
          >
            <span
              aria-hidden="true"
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                background: "var(--accent-orange)",
                boxShadow: "0 0 16px rgba(232,98,42,0.65)",
              }}
            />
            {locale === "ar"
              ? "مرر أو اضغط لاكتشاف التفاصيل"
              : "Hover or tap to reveal details"}
          </div>
        </div>
      </div>
    </article>
  );
}

const services: ServiceItem[] = [
  {
    imageUrl: serviceImages.machinery,
    imageAlt:
      "تقييم الآلات والمعدات الصناعية وفق معايير IVS الدولية في المملكة العربية السعودية",
    titleAr: "تقييم الآلات والمعدات",
    titleEn: "Machinery & Equipment Valuation",
    descAr:
      "تقارير احترافية معتمدة للمصانع والمعدات الثقيلة وأساطيل المركبات، جاهزة للتدقيق والتمويل والإجراءات النظامية.",
    descEn:
      "Certified reports for factories, heavy equipment, and fleets, prepared for audits, financing, and legal workflows.",
    eyebrowAr: "حلول IVS",
    eyebrowEn: "IVS Solutions",
    accent: "rgba(232,98,42,0.52)",
  },
  {
    imageUrl: serviceImages.realEstate,
    imageAlt:
      "تقييم العقارات التجارية والسكنية والصناعية في الرياض والمملكة",
    titleAr: "تقييم العقارات",
    titleEn: "Real Estate Valuation",
    descAr:
      "تقييمات دقيقة للعقارات السكنية والتجارية والصناعية لأغراض البيع والشراء والرهن والتمويل البنكي.",
    descEn:
      "Accurate residential, commercial, and industrial valuations for sale, purchase, mortgage, and bank financing.",
    eyebrowAr: "سكني وتجاري",
    eyebrowEn: "Residential & Commercial",
    accent: "rgba(29,41,82,0.42)",
  },
  {
    imageUrl: serviceImages.management,
    imageAlt: "استشارات إدارية واستراتيجية للشركات السعودية",
    titleAr: "استشارات إدارية واستراتيجية",
    titleEn: "Management & Strategy",
    descAr:
      "رفع الأداء المؤسسي وإعادة الهيكلة والتحول التنظيمي بخطط عملية تناسب واقع الشركات في السوق السعودي.",
    descEn:
      "Institutional performance, restructuring, and transformation plans aligned with the Saudi market.",
    eyebrowAr: "نمو مؤسسي",
    eyebrowEn: "Business Growth",
    accent: "rgba(232,98,42,0.46)",
  },
  {
    imageUrl: serviceImages.technical,
    imageAlt: "استشارات فنية وهندسية للمنشآت الصناعية",
    titleAr: "استشارات فنية وهندسية",
    titleEn: "Technical & Engineering",
    descAr:
      "حلول تخصصية تدعم القرارات التشغيلية وتحسن الكفاءة الفنية وتقلل المخاطر في البيئات الصناعية.",
    descEn:
      "Specialized engineering support that improves technical efficiency and reduces operational risk.",
    eyebrowAr: "كفاءة تشغيلية",
    eyebrowEn: "Operational Efficiency",
    accent: "rgba(29,41,82,0.46)",
  },
  {
    imageUrl: serviceImages.inventory,
    imageAlt: "حصر وجرد وترميز الأصول الثابتة",
    titleAr: "حصر وجرد وترميز الأصول",
    titleEn: "Asset Inventory & Tagging",
    descAr:
      "حصر ميداني وربط بسجلات الأصول الثابتة لتكوين قاعدة بيانات موثوقة ومتكاملة وجاهزة للمراجعة.",
    descEn:
      "Field inventory and fixed-asset register alignment to build reliable, auditable asset data.",
    eyebrowAr: "بيانات موثوقة",
    eyebrowEn: "Reliable Asset Data",
    accent: "rgba(232,98,42,0.46)",
  },
  {
    imageUrl: serviceImages.statistical,
    imageAlt: "استشارات إحصائية وتربوية ودعم البحث العلمي",
    titleAr: "استشارات إحصائية وتربوية",
    titleEn: "Statistical & Educational",
    descAr:
      "دعم البحث العلمي والتقييم التعليمي والتحليل الإحصائي للمؤسسات الأكاديمية والحكومية والخاصة.",
    descEn:
      "Research support, educational assessment, and applied statistical analysis for institutions.",
    eyebrowAr: "تحليل وبحث",
    eyebrowEn: "Research & Analytics",
    accent: "rgba(29,41,82,0.44)",
  },
];

export function Services() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(232,98,42,0.06), transparent 28%), radial-gradient(circle at bottom left, rgba(29,41,82,0.06), transparent 24%), var(--bg-primary)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        className="gold-divider"
        style={{ position: "absolute", top: 0, left: "5%", right: "5%" }}
      />

      <div ref={ref} style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div className="section-label" style={{ display: "inline-block" }}>
            {locale === "ar" ? "خدماتنا المهنية" : "Our Services"}
          </div>
          <h2
            id="services-heading"
            style={{
              fontFamily: "'Playfair Display', 'IBM Plex Sans Arabic', serif",
              fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            {locale === "ar"
              ? "بطاقات مضغوطة تكشف عمق الخدمة عند التفاعل"
              : "Compact cards that unfold on interaction"}
          </h2>
          <p
            style={{
              fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
              fontSize: "clamp(0.95rem,1.6vw,1.05rem)",
              color: "var(--text-secondary)",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            {locale === "ar"
              ? "واجهة نظيفة ومتوازنة في البداية، ثم تتحول كل بطاقة إلى مشهد غني بالصورة والتفاصيل بمجرد الهوفر أو الضغط."
              : "A clean, balanced layout at rest, then each card expands into an image-rich detailed panel on hover or tap."}
          </p>
          <p
            style={{
              margin: "0.85rem auto 0",
              width: "fit-content",
              padding: "0.48rem 0.95rem",
              borderRadius: "999px",
              background: "rgba(29,41,82,0.04)",
              border: "1px solid rgba(29,41,82,0.08)",
              color: "var(--text-muted)",
              fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
              fontSize: "0.78rem",
              fontWeight: 600,
            }}
          >
            {locale === "ar"
              ? "على الجوال: اضغط على البطاقة لعرض التفاصيل"
              : "On mobile: tap a card to reveal details"}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            alignItems: "stretch",
          }}
        >
          {services.map((service, index) => {
            const isOpen = hoveredIndex === index || activeIndex === index;

            return (
              <ServiceCard
                key={service.titleEn}
                service={service}
                index={index}
                visible={visible}
                isOpen={isOpen}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(index)}
                onBlur={() => setHoveredIndex(null)}
                onClick={() =>
                  setActiveIndex((current) => (current === index ? null : index))
                }
              />
            );
          })}
        </div>

        <p
          style={{
            margin: "1.4rem 0 0",
            textAlign: "center",
            color: "var(--text-muted)",
            fontFamily: "'IBM Plex Sans Arabic', 'IBM Plex Sans', sans-serif",
            fontSize: "0.82rem",
            lineHeight: 1.7,
          }}
        >
          {getTranslation(locale, "ourServices.tag")}
        </p>
      </div>
    </section>
  );
}
