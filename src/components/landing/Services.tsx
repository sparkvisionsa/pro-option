'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Server,
  BarChart,
  GraduationCap,
  Factory,
  ClipboardList,
} from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

const serviceKeys = [
  {
    icon: Factory,
    titleKey: "ourServices.plant",
    descKey: "ourServices.descriptionPlant",
  },
  {
    icon: Server,
    titleKey: "ourServices.it",
    descKey: "ourServices.descriptionIT",
  },
  {
    icon: BarChart,
    titleKey: "ourServices.statistics",
    descKey: "ourServices.descriptionStatistics",
  },
  {
    icon: GraduationCap,
    titleKey: "ourServices.education",
    descKey: "ourServices.descriptionEducation",
  },
  {
    icon: ClipboardList,
    titleKey: "ourServices.administration",
    descKey: "ourServices.descriptionAdministration",
  },
];

export function Services() {
  const { locale } = useLanguage();
  return (
    <SectionWrapper
      id="services"
      title={getTranslation(locale, 'ourServices.services')}
      subtitle={getTranslation(locale, 'ourServices.tag')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {serviceKeys.map((service) => (
          <Card
            key={service.titleKey}
            className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
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
