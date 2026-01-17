'use client';

import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Locale, locales, defaultLocale, isRTL } from '@/lib/i18n';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  isRTL: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const storage = window.localStorage;
    if (!storage || typeof storage.getItem !== 'function') {
      return;
    }

    const storedLocale = storage.getItem('locale') as Locale | null;
    if (storedLocale && locales.includes(storedLocale)) {
      setLocaleState(storedLocale);
    }
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') {
      return;
    }

    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL(locale) ? 'rtl' : 'ltr';

    if (typeof window !== 'undefined') {
      const storage = window.localStorage;
      if (storage && typeof storage.setItem === 'function') {
        storage.setItem('locale', locale);
      }
    }
  }, [locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
  }, []);

  const toggleLanguage = useCallback(() => {
    const newLocale: Locale = locale === 'en' ? 'ar' : 'en';
    setLocale(newLocale);
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        isRTL: isRTL(locale),
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}
