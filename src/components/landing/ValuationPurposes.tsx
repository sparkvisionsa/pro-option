'use client';

import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { ShoppingBag, FileSpreadsheet, GitMerge, Gavel, Flame, Landmark, ShieldCheck } from "lucide-react";

const purposes = [
  { icon: ShoppingBag, titleKey: 'valuationPurposes.purpose1Title', copyKey: 'valuationPurposes.purpose1Copy' },
  { icon: FileSpreadsheet, titleKey: 'valuationPurposes.purpose2Title', copyKey: 'valuationPurposes.purpose2Copy' },
  { icon: GitMerge, titleKey: 'valuationPurposes.purpose3Title', copyKey: 'valuationPurposes.purpose3Copy' },
  { icon: Gavel, titleKey: 'valuationPurposes.purpose4Title', copyKey: 'valuationPurposes.purpose4Copy' },
  { icon: Flame, titleKey: 'valuationPurposes.purpose5Title', copyKey: 'valuationPurposes.purpose5Copy' },
  { icon: Landmark, titleKey: 'valuationPurposes.purpose6Title', copyKey: 'valuationPurposes.purpose6Copy' },
  { icon: ShieldCheck, titleKey: 'valuationPurposes.purpose7Title', copyKey: 'valuationPurposes.purpose7Copy' },
];

export function ValuationPurposes() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper
      id="purposes"
      title={getTranslation(locale, 'valuationPurposes.title')}
      subtitle={getTranslation(locale, 'valuationPurposes.subtitle')}
      className="bg-card"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {purposes.map((item, index) => (
          <div
            key={item.titleKey}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-background/70 p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in"
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="mt-4 text-xl font-semibold font-headline text-foreground">
              {getTranslation(locale, item.titleKey)}
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {getTranslation(locale, item.copyKey)}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
