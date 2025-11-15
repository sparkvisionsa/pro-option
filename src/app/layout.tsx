import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Toaster } from "@/components/ui/toaster";
import { WhatsappChat } from "@/components/landing/WhatsappChat";
import { LanguageProvider } from "@/context/LanguageContext";
import { cn } from "@/lib/utils";

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
  icons: './logo.jpeg',
  title: "Pro Option Career Consulting",
  description:
    "Your trusted partner in career development, providing expert guidance and consulting to help you achieve your professional goals.",
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
