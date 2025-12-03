'use client';

import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import Image from "next/image";
import logo from "../logo.jpeg";

// Custom animation keyframes (for demo, ideally move to global CSS)
const animationStyles = `
@keyframes spin-in {
  0% { transform: scale(0.5) rotate(-180deg); opacity: 0; }
  100% { transform: scale(1) rotate(0deg); opacity: 1; }
}
@keyframes fade-slide-up {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;

export default function MaintenancePage() {
  const { locale } = useLanguage();

  return (
    <main className="min-h-screen flex items-center justify-center bg-background text-foreground">
      {/* Inline style for custom keyframes (move to global CSS for production) */}
      <style>{animationStyles}</style>
      <div className="max-w-2xl w-full p-8 text-center">
        <div
          className="mx-auto w-24 h-24 mb-6"
          style={{
            animation: 'spin-in 1s cubic-bezier(0.4,0,0.2,1) 0s both',
          }}
        >
          <Image src={logo} alt="Pro Option Logo" width={96} height={96} className="rounded-full object-cover" />
        </div>
        <h1
          className="text-3xl font-headline font-bold mb-4"
          style={{
            animation: 'fade-slide-up 1s 0.5s cubic-bezier(0.4,0,0.2,1) both',
          }}
        >
          {getTranslation(locale, 'maintenance.title')}
        </h1>
        <p className="text-muted-foreground mb-6">
          {getTranslation(locale, 'maintenance.description')}
        </p>
      </div>
    </main>
  );
}
