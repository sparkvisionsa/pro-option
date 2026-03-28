import type { Metadata } from "next";
import { IBM_Plex_Sans_Arabic, IBM_Plex_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { Toaster } from "@/components/ui/toaster";
import { WhatsappChat } from "@/components/landing/WhatsappChat";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-arabic",
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-latin",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-playfair",
  display: "swap",
});

const BASE_URL = "https://www.pro-option.sa";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default:
      "برو أوبشن | استشارات مهنية معتمدة وتقييم الأصول في السعودية | Pro Option",
    template: "%s | برو أوبشن للاستشارات المهنية",
  },
  description:
    "برو أوبشن — شركة استشارات مهنية سعودية معتمدة في الرياض. تقييم الآلات والمعدات وفق IVS، تقييم عقاري، استشارات إدارية واستراتيجية وفنية. تغطية جميع مناطق المملكة العربية السعودية. تقارير ثنائية اللغة جاهزة للتدقيق والتمويل.",
  keywords: [
    // عربي — أولوية
    "استشارات مهنية السعودية",
    "تقييم الآلات والمعدات",
    "تقييم الآلات والمعدات وفق IVS",
    "تقييم عقاري معتمد السعودية",
    "استشارات إدارية الرياض",
    "تقييم أصول IVS",
    "شركة استشارات الرياض",
    "تقييم المعدات الثقيلة",
    "استشارات فنية وهندسية السعودية",
    "تقييم الأصول الصناعية",
    "حصر وجرد الأصول",
    "تقارير ثنائية اللغة",
    "تقييم العقارات الرياض",
    "استشارات إحصائية وتربوية",
    "تقييم المعدات الصناعية السعودية",
    "شركة تقييم أصول معتمدة",
    "استشارات استراتيجية الرياض",
    "تقييم الأصول للتمويل البنكي",
    "تقييم الآلات للتأمين",
    "برو أوبشن",
    // English secondary
    "management consulting saudi arabia",
    "asset valuation IVS saudi",
    "machinery appraisal riyadh",
    "real estate valuation KSA",
    "professional consulting firm saudi",
    "IVS machinery equipment valuation",
    "asset inventory tagging saudi",
    "engineering consulting riyadh",
  ],
  authors: [{ name: "Pro Option | برو أوبشن", url: BASE_URL }],
  creator: "Pro Option | برو أوبشن",
  publisher: "Pro Option | برو أوبشن",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: `${BASE_URL}/`,
    languages: {
      "ar-SA": `${BASE_URL}/`,
      "en-US": `${BASE_URL}/en/`,
    },
  },
  openGraph: {
    type: "website",
    url: `${BASE_URL}/`,
    title:
      "برو أوبشن | استشارات مهنية معتمدة وتقييم الأصول — السعودية | Pro Option",
    description:
      "شركة استشارات مهنية سعودية معتمدة. تقييم الآلات والمعدات وفق IVS، تقييم عقاري، استشارات إدارية وفنية واستراتيجية. تغطية وطنية شاملة لجميع مناطق المملكة.",
    images: [
      {
        url: `${BASE_URL}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "برو أوبشن للاستشارات المهنية وتقييم الأصول — الرياض، السعودية",
      },
    ],
    locale: "ar_SA",
    siteName: "Pro Option | برو أوبشن",
  },
  twitter: {
    card: "summary_large_image",
    site: "@prooption11",
    creator: "@prooption11",
    title:
      "برو أوبشن | استشارات مهنية معتمدة وتقييم الأصول وفق IVS — السعودية",
    description:
      "تقييم الآلات والمعدات وفق IVS — تقييم عقاري — استشارات إدارية وفنية — تغطية وطنية شاملة",
    images: [`${BASE_URL}/og-image.jpg`],
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
    ICBM: "24.7136, 46.6753",
    language: "ar",
    "format-detection": "telephone=yes",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "msapplication-TileColor": "#1d2952",
    "theme-color": "#080e1c",
  },
};

/* ── Schema.org JSON-LD ──────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "LocalBusiness", "Organization"],
  "@id": `${BASE_URL}/#organization`,
  name: "Pro Option | برو أوبشن",
  alternateName: [
    "برو أوبشن للاستشارات المهنية",
    "Pro Option Professional Consulting",
  ],
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/favicon-512x512.png`,
    width: 512,
    height: 512,
  },
  image: `${BASE_URL}/og-image.jpg`,
  description:
    "شركة استشارات مهنية سعودية متكاملة في الرياض. تقييم الآلات والمعدات وفق معايير IVS الدولية، تقييم عقاري، استشارات إدارية واستراتيجية وفنية وهندسية، حصر وجرد الأصول، استشارات إحصائية وتربوية. تغطية جميع مناطق المملكة العربية السعودية.",
  foundingDate: "2020",
  telephone: "+966555765446",
  email: "Info@pro-option.sa",
  priceRange: "$$",
  currenciesAccepted: "SAR",
  paymentAccepted: "Bank Transfer, Cash",
  address: {
    "@type": "PostalAddress",
    streetAddress: "الرياض",
    addressLocality: "الرياض",
    addressRegion: "الرياض",
    addressCountry: "SA",
    postalCode: "11564",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 24.7136,
    longitude: 46.6753,
  },
  areaServed: [
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "City", "name": "الرياض" },
    { "@type": "City", "name": "جدة" },
    { "@type": "City", "name": "الدمام" },
    { "@type": "City", "name": "مكة المكرمة" },
  ],
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
    name: "خدمات برو أوبشن المهنية",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "تقييم الآلات والمعدات وفق معايير IVS",
          description:
            "تقييمات احترافية معتمدة وفق معايير التقييم الدولية IVS للمصانع والمعدات الثقيلة وأساطيل المركبات ومراكز البيانات",
          serviceType: "Machinery & Equipment Valuation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "تقييم العقارات",
          description:
            "تقارير تقييم عقارية موثوقة للعقارات السكنية والتجارية والصناعية",
          serviceType: "Real Estate Valuation",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "استشارات إدارية واستراتيجية",
          description:
            "تطوير الأداء المؤسسي وإعادة الهيكلة والتحول التنظيمي",
          serviceType: "Management Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "استشارات فنية وهندسية",
          description:
            "حلول فنية وهندسية متخصصة للمنشآت الصناعية",
          serviceType: "Technical & Engineering Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "حصر وجرد وترميز الأصول",
          description:
            "الحصر الميداني والترميز وربط سجلات الأصول الثابتة",
          serviceType: "Asset Inventory & Tagging",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "استشارات إحصائية وتربوية",
          description: "دعم البحث العلمي والتقييم التعليمي والتحليل الإحصائي",
          serviceType: "Statistical & Educational Consulting",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Pro Option | برو أوبشن",
  description:
    "الموقع الرسمي لشركة برو أوبشن للاستشارات المهنية وتقييم الأصول في السعودية",
  publisher: { "@id": `${BASE_URL}/#organization` },
  inLanguage: ["ar-SA", "en-US"],
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/#contact` },
    "query-input": "required name=search_term_string",
  },
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
      name: "تواصل",
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
        text: "برو أوبشن شركة استشارات مهنية سعودية متكاملة تقدم: استشارات إدارية واستراتيجية، استشارات فنية وهندسية، تقييم الآلات والمعدات وفق معايير IVS الدولية، تقييم العقارات، حصر وجرد وترميز الأصول، واستشارات إحصائية وتربوية.",
      },
    },
    {
      "@type": "Question",
      name: "هل تقارير تقييم الآلات والمعدات معتمدة وفق معايير IVS الدولية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، جميع تقارير تقييم الآلات والمعدات لدينا متوافقة كلياً مع معايير التقييم الدولية IVS، معدّة من متخصصين معتمدين، وجاهزة للتدقيق والتمويل والإجراءات القانونية.",
      },
    },
    {
      "@type": "Question",
      name: "هل تغطي برو أوبشن جميع مناطق المملكة العربية السعودية؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، نوفر تغطية وطنية شاملة لجميع مناطق المملكة العربية السعودية مع فرق معاينة ميدانية ومهندسين ثنائيي اللغة.",
      },
    },
    {
      "@type": "Question",
      name: "ما أغراض التقييم التي تغطيها خدماتكم؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "تغطي خدمات التقييم لدينا: البيع والشراء، النزاعات والتقاضي، التصفية والإفلاس، الرهن والتمويل البنكي، التأمين وإعادة التأمين، والقوائم المالية وفق IFRS.",
      },
    },
    {
      "@type": "Question",
      name: "هل التقارير جاهزة للتدقيق المالي والبنوك؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "نعم، تتضمن جميع التقارير تسويات تفصيلية وافتراضات واضحة وسجلات صور وملحقات تستوفي متطلبات المدققين الخارجيين والبنوك ومؤسسات التمويل.",
      },
    },
    {
      "@type": "Question",
      name: "كيف يمكن التواصل والحصول على عرض سعر؟",
      acceptedAnswer: {
        "@type": "Answer",
        text: "يمكنك التواصل معنا عبر البريد الإلكتروني Info@pro-option.sa، أو الهاتف/واتساب +966 55 576 5446، أو تعبئة نموذج التواصل في هذه الصفحة وسنرد خلال 24 ساعة.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* hreflang */}
        <link rel="alternate" hrefLang="ar-SA" href={`${BASE_URL}/`} />
        <link rel="alternate" hrefLang="en-US" href={`${BASE_URL}/en/`} />
        <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/`} />

        {/* Schema.org — Organization / LocalBusiness */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* Schema.org — WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Schema.org — BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* Schema.org — FAQPage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        {/* منع وميض الوضع الليلي عند التحميل */}
        <script dangerouslySetInnerHTML={{ __html: `try{var t=localStorage.getItem('pro-option-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}` }} />
      </head>
      <body
        className={cn(
          ibmPlexSansArabic.variable,
          ibmPlexSans.variable,
          playfairDisplay.variable
        )}
      >
        <a href="#main-content" className="skip-link">
          انتقل إلى المحتوى الرئيسي
        </a>
        <ThemeProvider>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main id="main-content" className="flex-grow">
                {children}
              </main>
              <Footer />
            </div>
            <WhatsappChat />
            <ScrollToTopButton />
            <Toaster />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
