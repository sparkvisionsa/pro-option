'use client';

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

const storyIds = [
  {
    id: "case-study-1",
    titleKey: "successStories.story1",
    outcomeKey: "successStories.story1Outcome",
    imageHint: "tech office",
  },
  {
    id: "case-study-2",
    titleKey: "successStories.story2",
    outcomeKey: "successStories.story2Outcome",
    imageHint: "collaboration meeting",
  },
  {
    id: "case-study-3",
    titleKey: "successStories.story3",
    outcomeKey: "successStories.story3Outcome",
    imageHint: "professional headshot",
  },
];

export function SuccessStories() {
  const { locale } = useLanguage();
  return (
    <SectionWrapper
      id="success"
      title={getTranslation(locale, 'successStories.title')}
      subtitle={getTranslation(locale, 'successStories.subtitle')}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {storyIds.map((story) => {
          const storyImage = PlaceHolderImages.find((p) => p.id === story.id);
          return (
            <Card key={story.id} className="overflow-hidden group">
              {storyImage && (
                <div className="overflow-hidden">
                  <Image
                    src={storyImage.imageUrl}
                    alt={getTranslation(locale, story.titleKey)}
                    width={600}
                    height={400}
                    className="object-cover aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={story.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{getTranslation(locale, story.titleKey)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{getTranslation(locale, story.outcomeKey)}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-accent"
                >
                  {getTranslation(locale, 'successStories.readMore')} <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
