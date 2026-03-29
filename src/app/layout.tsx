import "./globals.css";
import { IBM_Plex_Sans, IBM_Plex_Sans_Arabic, Playfair_Display } from "next/font/google";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollToTopButton } from "@/components/layout/ScrollToTopButton";
import { WhatsappChat } from "@/components/landing/WhatsappChat";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/context/LanguageContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { structuredDataSchemas, siteMetadata, BASE_URL } from "@/lib/seo";
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

export const metadata = siteMetadata;

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
        <link rel="alternate" hrefLang="ar-SA" href={BASE_URL} />
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />

        {structuredDataSchemas.map((schema, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}

        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('pro-option-theme')||'light';document.documentElement.setAttribute('data-theme',t);}catch(e){}",
          }}
        />
      </head>
      <body
        className={cn(
          ibmPlexSansArabic.variable,
          ibmPlexSans.variable,
          playfairDisplay.variable
        )}
      >
        <GoogleAnalytics />
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
