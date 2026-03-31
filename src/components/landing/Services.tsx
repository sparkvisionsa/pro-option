"use client";

import React from "react";
import { SectionMeta } from "@/components/seo/SectionMeta";
import { useLanguage } from "@/context/LanguageContext";
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
}

function ServiceCard({ service, index, visible }: CardProps) {
  const { locale } = useLanguage();
  const [hovered, setHovered] = React.useState(false);
  const title = locale === "ar" ? service.titleAr : service.titleEn;
  const desc = locale === "ar" ? service.descAr : service.descEn;
  const eyebrow = locale === "ar" ? service.eyebrowAr : service.eyebrowEn;

  return (
    <article
      className="section-card-gradient"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        minHeight: "100%",
        borderRadius: "24px",
        overflow: "hidden",
        isolation: "isolate",
        padding: "1rem",
        transform: visible
          ? hovered
            ? "translateY(-6px)"
            : "translateY(0)"
          : "translateY(26px)",
        opacity: visible ? 1 : 0,
        transition: `transform 0.45s cubic-bezier(0.16,1,0.3,1) ${
          index * 70
        }ms, opacity 0.55s ease ${index * 70}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "auto -34px -46px auto",
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${service.accent} 0%, rgba(232,98,42,0) 72%)`,
          opacity: hovered ? 0.28 : 0.16,
          transition: "opacity 0.3s ease, transform 0.3s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          zIndex: -1,
        }}
      />

      <div
        style={{
          position: "relative",
          display: "grid",
          gap: "1rem",
          height: "100%",
        }}
      >
        <div
          className="service-img-wrap"
          style={{
            aspectRatio: "16 / 10",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 12px 30px rgba(29,41,82,0.10)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={service.imageUrl}
            alt={service.imageAlt}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
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
              border: "1px solid rgba(232,98,42,0.18)",
              background: "rgba(232,98,42,0.08)",
              color: "var(--accent-orange)",
              fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.04em",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {eyebrow}
          </span>

          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 800,
              color: "var(--text-muted)",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div style={{ display: "grid", gap: "0.8rem" }}>
          <h3
            style={{
              fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
              fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              lineHeight: 1.35,
              margin: 0,
              maxWidth: "20ch",
            }}
          >
            {title}
          </h3>

          <p
            style={{
              margin: 0,
              color: "var(--text-secondary)",
              fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
              fontSize: "0.88rem",
              lineHeight: 1.85,
            }}
          >
            {desc}
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.55rem",
              color: "var(--text-muted)",
              fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
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
                boxShadow: "0 0 10px rgba(232,98,42,0.35)",
              }}
            />
            {locale === "ar"
              ? "نطاق خدمة واضح وتقارير احترافية"
              : "Clear scope and professional reporting"}
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
      "تقييم الآلات والمعدات والأصول المنقولة وفق المعايير الدولية في المملكة العربية السعودية",
    titleAr: "تقييم الآلات والمعدات والأصول المنقولة",
    titleEn: "Machinery, Equipment & Movable Assets Valuation",
    descAr:
      "تقارير تقييم احترافية معتمدة للآلات والمعدات الصناعية والأصول المنقولة وأساطيل المركبات، متوافقة مع المعايير الدولية وجاهزة للتدقيق والتمويل.",
    descEn:
      "Certified valuation reports for machinery, industrial equipment, movable assets, and vehicle fleets — aligned with international standards and audit-ready.",
    eyebrowAr: "تقييم الأصول",
    eyebrowEn: "Asset Valuation",
    accent: "rgba(232,98,42,0.52)",
  },
  {
    imageUrl: serviceImages.management,
    imageAlt: "استشارات إدارية للشركات والمؤسسات في المملكة",
    titleAr: "استشارات إدارية",
    titleEn: "Administrative Consulting",
    descAr:
      "تطوير الأداء المؤسسي وإعادة الهيكلة والتخطيط الاستراتيجي بمنهجيات إدارية حديثة تناسب واقع الشركات والمؤسسات في السوق السعودي.",
    descEn:
      "Institutional performance development, restructuring, and strategic planning using modern management methodologies tailored to the Saudi market.",
    eyebrowAr: "تطوير مؤسسي",
    eyebrowEn: "Business Development",
    accent: "rgba(232,98,42,0.46)",
  },
  {
    imageUrl: serviceImages.inventory,
    imageAlt: "استشارات تربوية وتعليمية للمؤسسات الأكاديمية",
    titleAr: "استشارات تربوية وتعليمية",
    titleEn: "Educational Consulting",
    descAr:
      "حلول استشارية متخصصة في المجال التربوي والتعليمي تشمل تطوير المناهج وتقييم الأداء الأكاديمي ودعم المؤسسات التعليمية.",
    descEn:
      "Specialized advisory in education — curriculum development, academic performance evaluation, and institutional support for educational organizations.",
    eyebrowAr: "تعليم وتطوير",
    eyebrowEn: "Education & Development",
    accent: "rgba(29,41,82,0.42)",
  },
  {
    imageUrl: serviceImages.technical,
    imageAlt: "استشارات تقنية للمنشآت والمؤسسات",
    titleAr: "استشارات تقنية",
    titleEn: "Technical Consulting",
    descAr:
      "حلول تقنية متخصصة تدعم التحول الرقمي وتحسّن الكفاءة التشغيلية وتقلل المخاطر التقنية للمنشآت والمؤسسات.",
    descEn:
      "Specialized technical solutions supporting digital transformation, improving operational efficiency, and reducing technical risk for organizations.",
    eyebrowAr: "حلول تقنية",
    eyebrowEn: "Tech Solutions",
    accent: "rgba(29,41,82,0.46)",
  },
  {
    imageUrl: serviceImages.statistical,
    imageAlt: "استشارات إحصائية وتحليل بيانات",
    titleAr: "استشارات إحصائية",
    titleEn: "Statistical Consulting",
    descAr:
      "تحليل إحصائي متقدم ودعم البحث العلمي وتصميم الاستبانات ومعالجة البيانات للمؤسسات الأكاديمية والحكومية والخاصة.",
    descEn:
      "Advanced statistical analysis, research support, survey design, and data processing for academic, government, and private institutions.",
    eyebrowAr: "تحليل وبيانات",
    eyebrowEn: "Data & Analytics",
    accent: "rgba(29,41,82,0.44)",
  },
];

export function Services() {
  const { locale } = useLanguage();
  const { ref, visible } = useReveal();

  return (
    <section
      id="services"
      itemScope
      itemType="https://schema.org/WebPageElement"
      itemID="https://www.pro-option.sa/#services"
      aria-labelledby="services-heading"
      style={{
        background:
          "radial-gradient(circle at top right, rgba(232,98,42,0.06), transparent 28%), radial-gradient(circle at bottom left, rgba(29,41,82,0.06), transparent 24%), var(--bg-primary)",
        padding: "6rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <SectionMeta id="services" locale={locale} />
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
              fontFamily: "'Inter', 'IBM Plex Sans Arabic', sans-serif",
              fontSize: "clamp(1.75rem,3.5vw,2.75rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              marginBottom: "1rem",
            }}
          >
            {locale === "ar"
              ? "خدمات مهنية متخصصة"
              : "Specialized Professional Services"}
          </h2>
          <p
            style={{
              fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
              fontSize: "clamp(0.95rem,1.6vw,1.05rem)",
              color: "var(--text-secondary)",
              maxWidth: "760px",
              margin: "0 auto",
              lineHeight: 1.75,
            }}
          >
            {locale === "ar"
              ? "نقدم باقة خدمات تقييم واستشارات مصممة لدعم القرارات التشغيلية والمالية والتنظيمية بعرض مباشر وواضح."
              : "A focused set of valuation and consulting services presented in a direct, clearer layout for faster scanning."}
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.25rem",
            alignItems: "stretch",
          }}
        >
          {services.map((service, index) => (
            <ServiceCard
              key={service.titleEn}
              service={service}
              index={index}
              visible={visible}
            />
          ))}
        </div>

        <p
          style={{
            margin: "1.4rem 0 0",
            textAlign: "center",
            color: "var(--text-muted)",
            fontFamily: "'IBM Plex Sans Arabic', 'Inter', sans-serif",
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
