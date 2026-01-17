'use client';

import { useLanguage } from '@/context/LanguageContext';
import { getTranslation } from '@/lib/i18n';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const { locale, toggleLanguage } = useLanguage();
  const nextLocale = locale === 'en' ? 'ar' : 'en';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2"
      title={nextLocale === 'en' ? 'Switch to English' : 'Switch to Arabic'}
    >
      <Globe className="h-4 w-4" />
      <span>{nextLocale.toUpperCase()}</span>
    </Button>
  );
}
