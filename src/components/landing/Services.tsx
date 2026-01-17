'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ClipboardList, Factory, ShieldCheck, Compass, FileCheck } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

const serviceKeys = [
  {
    icon: ShieldCheck,
    titleKey: "ourServices.advisory",
    descKey: "ourServices.descriptionAdvisory",
  },
  {
    icon: Factory,
    titleKey: "ourServices.valuation",
    descKey: "ourServices.descriptionValuation",
  },
  {
    icon: ClipboardList,
    titleKey: "ourServices.inventory",
    descKey: "ourServices.descriptionInventory",
  },
];

export function Services() {
  const { locale } = useLanguage();
  return (
    <SectionWrapper
      id="services"
      title={getTranslation(locale, 'ourServices.services')}
      subtitle={getTranslation(locale, 'ourServices.tag')}
      className="bg-gradient-to-b from-background via-card to-background"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceKeys.map((service) => (
          <Card
            key={service.titleKey}
            className="group relative overflow-hidden border border-primary/10 bg-white/5 text-left transition-all duration-300 backdrop-blur hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="pt-4 font-headline">
                {getTranslation(locale, service.titleKey)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{getTranslation(locale, service.descKey)}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
