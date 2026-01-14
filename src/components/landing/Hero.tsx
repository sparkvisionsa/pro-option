'use client';

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

export function Hero() {
  const { locale } = useLanguage();
  const heroImage = PlaceHolderImages.find((p) => p.id === "hero-skyline");
  const metrics = [
    {
      title: getTranslation(locale, 'hero.metricPrecisionTitle'),
      copy: getTranslation(locale, 'hero.metricPrecisionCopy'),
    },
    {
      title: getTranslation(locale, 'hero.metricSpeedTitle'),
      copy: getTranslation(locale, 'hero.metricSpeedCopy'),
    },
    {
      title: getTranslation(locale, 'hero.metricCoverageTitle'),
      copy: getTranslation(locale, 'hero.metricCoverageCopy'),
    },
  ];

  return (
    <section className="relative flex min-h-[90vh] w-full items-center overflow-hidden bg-background text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          fill
          className="object-cover scale-110"
          priority
          data-ai-hint={heroImage.imageHint}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-background/55" />
      <div className="absolute -right-24 -bottom-24 h-[28rem] w-[28rem] bg-primary/35 blur-3xl" />
      <div className="absolute -left-32 top-10 h-[24rem] w-[24rem] bg-accent/30 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_38%)]" />

      <div className="relative z-10 container mx-auto px-4 md:px-6 py-20 animate-in fade-in slide-in-from-bottom duration-500">
        <div className="max-w-5xl space-y-8 text-left">
          <h1 className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl leading-tight drop-shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
            {getTranslation(locale, 'hero.head')}
          </h1>
          <p className="max-w-4xl text-xl text-gray-100 md:text-2xl leading-relaxed drop-shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            {getTranslation(locale, 'hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-5">
            <Button
              asChild
              size="lg"
              className="bg-accent text-background hover:bg-accent/90 shadow-xl shadow-black/30 px-12 py-6 text-xl rounded-full border border-accent/30"
            >
              <Link href="/#contact">{locale === 'ar' ? 'تواصل معنا' : 'Contact Us'}</Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 px-12 py-6 text-xl rounded-full shadow-xl shadow-black/30 border border-primary/20"
            >
              <Link href="/#services">{getTranslation(locale, 'hero.learnMore')}</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {metrics.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-lg shadow-lg shadow-black/20 transition-transform duration-300 hover:-translate-y-2"
              >
                <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-base text-gray-200 leading-relaxed">{item.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

