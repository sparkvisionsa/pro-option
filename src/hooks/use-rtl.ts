'use client';

import { useLanguage } from '@/context/LanguageContext';

export function useRTL() {
  const { isRTL } = useLanguage();
  return isRTL;
}

export function useDirection() {
  const { locale } = useLanguage();
  return locale === 'ar' ? 'rtl' : 'ltr';
}
