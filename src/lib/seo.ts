import type { Metadata } from "next";

export const BASE_URL = "https://www.pro-option.sa";
export const SITE_NAME = "Pro Option | برو أوبشن";
export const CONTACT_EMAIL = "Info@pro-option.sa";
export const CONTACT_PHONE = "+966555765446";

export type SectionLocale = "ar" | "en";

export type HomeSectionId =
  | "hero"
  | "about"
  | "services"
  | "process"
  | "purposes"
  | "values"
  | "faq"
  | "contact";

type SectionDefinition = {
  id: HomeSectionId;
  nameAr: string;
  nameEn: string;
  descriptionAr: string;
  descriptionEn: string;
};

const defaultDescriptionAr =
  "برو أوبشن شركة استشارات مهنية سعودية في الرياض تقدم تقييم الأصول والآلات وفق IVS، والتقييم العقاري، والاستشارات الإدارية والفنية، مع تغطية ميدانية لجميع مناطق المملكة.";

const defaultDescriptionEn =
  "Pro Option is a Saudi professional consulting firm in Riyadh offering IVS-compliant asset and machinery valuation, real estate valuation, and management and technical consulting across the Kingdom.";

const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "برو أوبشن للاستشارات المهنية وتقييم الأصول في السعودية",
};

export const homeSections: SectionDefinition[] = [
  {
    id: "hero",
    nameAr: "الرئيسية",
    nameEn: "Hero",
    descriptionAr:
      "واجهة تعريفية تبرز خبرات برو أوبشن في الاستشارات المهنية وتقييم الأصول وخدماتها المعتمدة على مستوى المملكة.",
    descriptionEn:
      "A hero section presenting Pro Option's nationwide professional consulting and asset valuation expertise.",
  },
  {
    id: "about",
    nameAr: "من نحن",
    nameEn: "About Us",
    descriptionAr:
      "تعريف بالشركة ورسالتها ورؤيتها وفريقها المتخصص في الاستشارات المهنية والتقييم المعتمد داخل المملكة العربية السعودية.",
    descriptionEn:
      "An overview of the firm, its mission, vision, and multidisciplinary consulting and valuation team.",
  },
  {
    id: "services",
    nameAr: "خدماتنا",
    nameEn: "Services",
    descriptionAr:
      "عرض لخدمات برو أوبشن في تقييم الآلات والمعدات، والتقييم العقاري، والاستشارات الإدارية والفنية، وحصر الأصول، والاستشارات الإحصائية.",
    descriptionEn:
      "A service overview covering machinery valuation, real estate valuation, management consulting, technical consulting, asset inventory, and statistical consulting.",
  },
  {
    id: "process",
    nameAr: "منهجيتنا",
    nameEn: "Process",
    descriptionAr:
      "شرح مراحل تنفيذ التقييم المهني من تحديد النطاق وجمع البيانات حتى المعاينة والتحليل وإصدار التقرير النهائي المتوافق مع IVS.",
    descriptionEn:
      "A step-by-step explanation of the professional valuation workflow from scoping to final IVS-compliant reporting.",
  },
  {
    id: "purposes",
    nameAr: "أغراض التقييم",
    nameEn: "Valuation Purposes",
    descriptionAr:
      "توضيح أغراض التقييم التي تغطيها التقارير مثل البيع والشراء والنزاعات والتمويل والتأمين والقوائم المالية وفق IFRS.",
    descriptionEn:
      "A summary of valuation use cases including transactions, disputes, financing, insurance, and IFRS reporting.",
  },
  {
    id: "values",
    nameAr: "قيمنا",
    nameEn: "Values",
    descriptionAr:
      "قسم يوضح القيم المهنية التي تحكم عمل برو أوبشن مثل النزاهة والموضوعية والشفافية والإنصاف والالتزام بالجودة.",
    descriptionEn:
      "A section outlining the firm's professional values including integrity, objectivity, transparency, fairness, and quality.",
  },
  {
    id: "faq",
    nameAr: "الأسئلة الشائعة",
    nameEn: "FAQ",
    descriptionAr:
      "إجابات مختصرة عن أكثر الأسئلة شيوعاً حول خدمات برو أوبشن، اعتماد التقارير، نطاق التغطية، وأغراض التقييم.",
    descriptionEn:
      "Concise answers to common questions about Pro Option services, reporting standards, and nationwide coverage.",
  },
  {
    id: "contact",
    nameAr: "تواصل معنا",
    nameEn: "Contact",
    descriptionAr:
      "قسم التواصل وحجز الخدمة، مع بيانات الاتصال المباشرة ونموذج إرسال طلبات التقييم والاستشارات.",
    descriptionEn:
      "A contact section with direct contact details and a form for valuation and consulting requests.",
  },
];

const serviceCatalog = [
  {
    nameAr: "تقييم الآلات والمعدات وفق IVS",
    nameEn: "Machinery & Equipment Valuation",
    descriptionAr:
      "تقارير تقييم مهنية للمصانع والمعدات الثقيلة والأساطيل والأصول الصناعية متوافقة مع المعايير الدولية IVS.",
    descriptionEn:
      "IVS-compliant valuation reports for factories, heavy equipment, fleets, and industrial assets.",
    serviceType: "Machinery & Equipment Valuation",
  },
  {
    nameAr: "التقييم العقاري",
    nameEn: "Real Estate Valuation",
    descriptionAr:
      "تقييمات عقارية موثوقة للأصول السكنية والتجارية والصناعية لأغراض التمويل والبيع والشراء.",
    descriptionEn:
      "Reliable residential, commercial, and industrial property valuations for financing and transactions.",
    serviceType: "Real Estate Valuation",
  },
  {
    nameAr: "الاستشارات الإدارية والاستراتيجية",
    nameEn: "Management & Strategic Consulting",
    descriptionAr:
      "حلول تطوير أداء وإعادة هيكلة وتحول مؤسسي تدعم القرارات التنفيذية والإدارية.",
    descriptionEn:
      "Management, restructuring, and transformation advisory that supports executive decision-making.",
    serviceType: "Management Consulting",
  },
  {
    nameAr: "الاستشارات الفنية والهندسية",
    nameEn: "Technical & Engineering Consulting",
    descriptionAr:
      "حلول فنية وهندسية متخصصة لتحسين الكفاءة التشغيلية وتقليل المخاطر في البيئات الصناعية.",
    descriptionEn:
      "Technical and engineering consulting focused on operational efficiency and risk reduction.",
    serviceType: "Technical Consulting",
  },
  {
    nameAr: "حصر وجرد وترميز الأصول",
    nameEn: "Asset Inventory & Tagging",
    descriptionAr:
      "أعمال حصر ميداني وترميز وربط مع سجلات الأصول الثابتة لتجهيز بيانات قابلة للتدقيق.",
    descriptionEn:
      "Field inventory, tagging, and fixed-asset register alignment for auditable asset data.",
    serviceType: "Asset Inventory & Tagging",
  },
  {
    nameAr: "الاستشارات الإحصائية والتربوية",
    nameEn: "Statistical & Educational Consulting",
    descriptionAr:
      "دعم في التحليل الإحصائي والبحث العلمي والتقييم التربوي للجهات الأكاديمية والحكومية.",
    descriptionEn:
      "Statistical analysis, research support, and educational assessment for academic and public institutions.",
    serviceType: "Statistical Consulting",
  },
];

export function getSectionMeta(locale: SectionLocale, id: HomeSectionId) {
  const section = homeSections.find((item) => item.id === id) ?? homeSections[0];

  return {
    name: locale === "ar" ? section.nameAr : section.nameEn,
    description:
      locale === "ar" ? section.descriptionAr : section.descriptionEn,
    language: locale === "ar" ? "ar-SA" : "en-US",
    url: `${BASE_URL}/#${section.id}`,
  };
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "برو أوبشن | استشارات مهنية معتمدة وتقييم الأصول في السعودية | Pro Option",
    template: "%s | برو أوبشن للاستشارات المهنية",
  },
  description: defaultDescriptionAr,
  keywords: [
    "برو أوبشن",
    "الاستشارات المهنية السعودية",
    "تقييم الأصول",
    "تقييم الآلات والمعدات",
    "تقييم عقاري",
    "الاستشارات الإدارية",
    "الاستشارات الفنية",
    "حصر وجرد الأصول",
    "IVS",
    "professional consulting saudi arabia",
    "asset valuation saudi",
    "machinery appraisal riyadh",
    "real estate valuation ksa",
  ],
  authors: [{ name: SITE_NAME, url: BASE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: BASE_URL,
    title:
      "برو أوبشن | استشارات مهنية معتمدة وتقييم الأصول في السعودية | Pro Option",
    description: defaultDescriptionAr,
    siteName: SITE_NAME,
    locale: "ar_SA",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    site: "@prooption11",
    creator: "@prooption11",
    title:
      "برو أوبشن | استشارات مهنية معتمدة وتقييم الأصول في السعودية",
    description: defaultDescriptionAr,
    images: ["/twitter-image"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-64x64.png", type: "image/png", sizes: "64x64" },
      { url: "/favicon-128x128.png", type: "image/png", sizes: "128x128" },
      { url: "/favicon-256x256.png", type: "image/png", sizes: "256x256" },
      { url: "/favicon-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon-512x512.png",
  },
  category: "professional services",
  classification: "Business, Consulting, Valuation",
  other: {
    "geo.region": "SA-01",
    "geo.placename": "Riyadh, Saudi Arabia",
    "geo.position": "24.7136;46.6753",
    ICBM: "24.7136,46.6753",
    "format-detection": "telephone=yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#1d2952",
    "theme-color": "#080e1c",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${BASE_URL}/#professional-service`,
  name: SITE_NAME,
  alternateName: ["برو أوبشن للاستشارات المهنية", "Pro Option Professional Consulting"],
  url: BASE_URL,
  image: `${BASE_URL}/opengraph-image`,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon-512x512.png`,
    width: 512,
    height: 512,
  },
  description: defaultDescriptionAr,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  priceRange: "$$",
  currenciesAccepted: "SAR",
  areaServed: {
    "@type": "Country",
    name: "Saudi Arabia",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Riyadh",
    addressRegion: "Riyadh",
    addressCountry: "SA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7136,
    longitude: 46.6753,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [
    "https://www.linkedin.com/company/pro-option/",
    "https://x.com/prooption11",
    "https://www.snapchat.com/@prooption1",
    "https://www.tiktok.com/@prooption",
    "https://wa.me/966555765446",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "خدمات برو أوبشن",
    itemListElement: serviceCatalog.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.nameAr,
        alternateName: service.nameEn,
        description: service.descriptionAr,
        serviceType: service.serviceType,
      },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: SITE_NAME,
  description: defaultDescriptionAr,
  publisher: { "@id": `${BASE_URL}/#professional-service` },
  inLanguage: ["ar-SA", "en-US"],
};

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${BASE_URL}/#webpage`,
  url: `${BASE_URL}/`,
  name: "الصفحة الرئيسية | برو أوبشن",
  description: defaultDescriptionAr,
  isPartOf: { "@id": `${BASE_URL}/#website` },
  about: { "@id": `${BASE_URL}/#professional-service` },
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: `${BASE_URL}/opengraph-image`,
    width: 1200,
    height: 630,
  },
  inLanguage: "ar-SA",
  hasPart: homeSections.map((section) => ({
    "@type": "WebPageElement",
    "@id": `${BASE_URL}/#${section.id}`,
    name: section.nameAr,
    alternateName: section.nameEn,
    description: section.descriptionAr,
    url: `${BASE_URL}/#${section.id}`,
    inLanguage: "ar-SA",
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "الرئيسية",
      item: BASE_URL,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "خدماتنا",
      item: `${BASE_URL}/#services`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "تواصل معنا",
      item: `${BASE_URL}/#contact`,
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "ما خدمات شركة برو أوبشن للاستشارات المهنية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تقدم برو أوبشن خدمات الاستشارات الإدارية والاستراتيجية، والاستشارات الفنية والهندسية، وتقييم الآلات والمعدات وفق IVS، والتقييم العقاري، وحصر وجرد الأصول، والاستشارات الإحصائية والتربوية.",
      },
    },
    {
      "@type": "Question",
      name: "هل تقارير التقييم متوافقة مع المعايير الدولية IVS؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، تُعد تقارير تقييم الآلات والمعدات لدى برو أوبشن وفق المعايير الدولية للتقييم IVS وبما يدعم التدقيق والتمويل والإجراءات النظامية.",
      },
    },
    {
      "@type": "Question",
      name: "هل تغطي برو أوبشن جميع مناطق المملكة؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، توفر برو أوبشن تغطية ميدانية وخدمات استشارية وتقييمية في مختلف مناطق المملكة العربية السعودية.",
      },
    },
    {
      "@type": "Question",
      name: "ما أغراض التقييم التي تغطيها خدماتكم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تغطي خدمات التقييم البيع والشراء، والنزاعات، والتصفية، والتمويل والرهن، والتأمين، والقوائم المالية وفق IFRS.",
      },
    },
    {
      "@type": "Question",
      name: "كيف يمكن التواصل مع برو أوبشن؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يمكن التواصل عبر البريد الإلكتروني Info@pro-option.sa أو الهاتف وواتساب على الرقم +966 55 576 5446 أو من خلال نموذج التواصل في الموقع.",
      },
    },
  ],
};

export const structuredDataSchemas = [
  professionalServiceSchema,
  websiteSchema,
  webPageSchema,
  breadcrumbSchema,
  faqSchema,
];

export const seoCopy = {
  defaultDescriptionAr,
  defaultDescriptionEn,
};
