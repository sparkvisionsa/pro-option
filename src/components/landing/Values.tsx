'use client';

import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { ShieldCheck, Target, Eye, Scale, Sparkles } from "lucide-react";

const valueCards = [
  { icon: ShieldCheck, titleKey: 'values.integrityTitle', copyKey: 'values.integrityCopy' },
  { icon: Target, titleKey: 'values.objectivityTitle', copyKey: 'values.objectivityCopy' },
  { icon: Eye, titleKey: 'values.transparencyTitle', copyKey: 'values.transparencyCopy' },
  { icon: Scale, titleKey: 'values.fairnessTitle', copyKey: 'values.fairnessCopy' },
  { icon: Sparkles, titleKey: 'values.excellenceTitle', copyKey: 'values.excellenceCopy' },
];

export function Values() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper
      id="values"
      title={getTranslation(locale, 'values.title')}
      subtitle={getTranslation(locale, 'values.subtitle')}
      className="bg-gradient-to-b from-background via-card/50 to-background"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {valueCards.map((item, index) => (
          <div
            key={item.titleKey}
            className="group relative overflow-hidden rounded-2xl border border-primary/10 bg-white/5 p-6 shadow-lg backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in"
            style={{ animationDelay: `${index * 70}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-accent bg-accent/10 shadow-inner shadow-accent/20">
              <item.icon className="h-6 w-6 text-accent" />
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
