'use client';

import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { BadgeCheck } from "lucide-react";

const steps = [
  { number: '01', titleKey: 'valuationProcess.step1Title', copyKey: 'valuationProcess.step1Copy' },
  { number: '02', titleKey: 'valuationProcess.step2Title', copyKey: 'valuationProcess.step2Copy' },
  { number: '03', titleKey: 'valuationProcess.step3Title', copyKey: 'valuationProcess.step3Copy' },
  { number: '04', titleKey: 'valuationProcess.step4Title', copyKey: 'valuationProcess.step4Copy' },
  { number: '05', titleKey: 'valuationProcess.step5Title', copyKey: 'valuationProcess.step5Copy' },
  { number: '06', titleKey: 'valuationProcess.step6Title', copyKey: 'valuationProcess.step6Copy' },
  { number: '07', titleKey: 'valuationProcess.step7Title', copyKey: 'valuationProcess.step7Copy' },
];

export function ValuationProcess() {
  const { locale } = useLanguage();

  return (
    <SectionWrapper
      id="process"
      title={getTranslation(locale, 'valuationProcess.title')}
      subtitle={getTranslation(locale, 'valuationProcess.subtitle')}
      className="bg-gradient-to-b from-background via-card/70 to-background"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className="relative overflow-hidden rounded-2xl border border-primary/10 bg-white/5 p-6 shadow-lg backdrop-blur transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-in fade-in"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 hover:opacity-100" />
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary font-bold">
                {step.number}
              </div>
              <BadgeCheck className="h-6 w-6 text-accent" />
            </div>
            <h3 className="mt-4 text-xl font-semibold font-headline text-foreground">
              {getTranslation(locale, step.titleKey)}
            </h3>
            <p className="mt-2 text-muted-foreground leading-relaxed">
              {getTranslation(locale, step.copyKey)}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
