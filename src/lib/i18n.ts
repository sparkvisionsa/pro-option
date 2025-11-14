export type Locale = 'en' | 'ar';

export const locales: Locale[] = ['en', 'ar'];
export const defaultLocale: Locale = 'en';

export const isRTL = (locale: Locale) => locale === 'ar';

export interface Translation {
  [key: string]: string | Translation;
}

export const translations: Record<Locale, Translation> = {
  en: {
    nav: {
      about: 'About Us',
      services: 'Services',
      success: 'Success Stories',
      contact: 'Contact',
      consultation: 'Book a Consultation',
    },
    footer: {
      tagline: 'Unlock Your Career Potential.',
      quickLinks: 'Quick Links',
      legal: 'Legal',
      connect: 'Connect',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      copyright: 'Copyright © 2025 Pro Option Career Consulting. All Rights Reserved.',
    },
  },
  ar: {
    nav: {
      about: 'من نحن',
      services: 'الخدمات',
      success: 'قصص النجاح',
      contact: 'تواصل معنا',
      consultation: 'احجز استشارة',
    },
    footer: {
      tagline: 'افتح إمكاناتك الوظيفية.',
      quickLinks: 'روابط سريعة',
      legal: 'القانونية',
      connect: 'تواصل معنا',
      privacy: 'سياسة الخصوصية',
      terms: 'شروط الخدمة',
      copyright: 'حقوق الطبع والنشر © 2025 Pro Option Career Consulting. جميع الحقوق محفوظة.',
    },
  },
};

export function getTranslation(locale: Locale, key: string): string {
  const keys = key.split('.');
  let value: any = translations[locale];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
}
