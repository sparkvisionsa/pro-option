'use client';

import { ShieldCheck, BrainCircuit, MapPin, Lightbulb } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

const featureKeys = [
  {
    icon: ShieldCheck,
    titleKey: "features.trust",
    descKey: "features.trustDescription",
  },
  {
    icon: BrainCircuit,
    titleKey: "features.expertise",
    descKey: "features.expertiseDescription",
  },
  {
    icon: MapPin,
    titleKey: "features.localInsight",
    descKey: "features.localInsightDescription",
  },
  {
    icon: Lightbulb,
    titleKey: "features.innovation",
    descKey: "features.innovationDescription",
  },
];

export function WhyChooseUs() {
  const { locale } = useLanguage();
  return (
    <SectionWrapper id="why-us" title={getTranslation(locale, 'features.choose')} className="bg-card/70 backdrop-blur">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureKeys.map((feature) => (
          <div
            key={feature.titleKey}
            className="group relative flex flex-col items-center text-center gap-4 overflow-hidden rounded-2xl border border-primary/10 bg-background/60 p-6 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10 shadow-inner shadow-accent/20">
              <feature.icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold font-headline">{getTranslation(locale, feature.titleKey)}</h3>
            <p className="text-muted-foreground">{getTranslation(locale, feature.descKey)}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
