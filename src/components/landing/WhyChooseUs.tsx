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
    <SectionWrapper id="why-us" title={getTranslation(locale, 'features.choose')} className="bg-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {featureKeys.map((feature) => (
          <div
            key={feature.titleKey}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
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
