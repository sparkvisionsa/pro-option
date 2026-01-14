'use client';

import { useLanguage } from "@/context/LanguageContext";
import { AlertTriangle } from "lucide-react";

export default function MaintenanceBanner() {
  const { locale } = useLanguage();
  const text = locale === 'ar' ? 'الموقع لا زال تحت الصيانة' : 'Website under maintenance';

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500 text-white">
      <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_40%)]" />
      <div className="container mx-auto px-4 md:px-6 py-3 flex items-center gap-3 text-sm sm:text-base font-semibold">
        <AlertTriangle className="h-5 w-5 shrink-0" />
        <span>{text}</span>
      </div>
    </div>
  );
}
