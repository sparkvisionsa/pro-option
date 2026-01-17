import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { WhatsappChat } from "@/components/landing/WhatsappChat";
import { LanguageProvider } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";
import MaintenanceBanner from "@/components/landing/MaintenanceBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: "700",
  variable: "--font-playfair-display",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-64x64.png', type: 'image/png', sizes: '64x64' },
      { url: '/favicon-128x128.png', type: 'image/png', sizes: '128x128' },
      { url: '/favicon-256x256.png', type: 'image/png', sizes: '256x256' },
      { url: '/favicon-512x512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: '/favicon.ico',
    apple: '/favicon-512x512.png',
  },
  title: "Pro Option ",
  description:
    "Certified valuation specialists delivering defendable machinery and equipment appraisals for audits, lending, insurance, and transactions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body
        className={cn(
          "font-body antialiased",
          inter.variable,
          playfairDisplay.variable,
          cairo.variable
        )}
      >
        <LanguageProvider>
          <div className="flex min-h-screen flex-col">
            <MaintenanceBanner />
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <WhatsappChat />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
