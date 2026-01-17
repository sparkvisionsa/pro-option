'use client';

import Image from "next/image";
import { Target, Sparkles } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

export function AboutUs() {
  const { locale } = useLanguage();
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-us-visual");
  const highlights = [
    {
      icon: Target,
      title: getTranslation(locale, 'aboutPro.visionTitle'),
      copy: getTranslation(locale, 'aboutPro.visionCopy'),
    },
    {
      icon: Sparkles,
      title: getTranslation(locale, 'aboutPro.missionTitle'),
      copy: getTranslation(locale, 'aboutPro.missionCopy'),
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {getTranslation(locale, 'aboutPro.headingMain')}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-5 animate-in fade-in slide-in-from-left duration-500">
            <h3 className="font-headline text-2xl font-bold text-primary/90">
              {getTranslation(locale, 'aboutPro.headingSecond')}
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {getTranslation(locale, 'aboutPro.description')}
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              {getTranslation(locale, 'aboutPro.description2')}
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-primary/10 bg-white/5 p-4 shadow-md backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full animate-in fade-in slide-in-from-right duration-500">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                width={800}
                height={600}
                className="rounded-lg shadow-xl object-cover aspect-[4/3]"
                data-ai-hint={aboutImage.imageHint}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
