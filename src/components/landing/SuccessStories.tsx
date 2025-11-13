import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight } from "lucide-react";

const stories = [
  {
    id: "case-study-1",
    title: "Digital Overhaul for a Government Agency",
    outcome: "Increased efficiency by 40% through AI automation and cloud migration.",
    imageHint: "business meeting",
  },
  {
    id: "case-study-2",
    title: "Market Entry Strategy for a Tech Startup",
    outcome: "Secured $5M in funding with our data-driven feasibility study.",
    imageHint: "data charts",
  },
  {
    id: "case-study-3",
    title: "E-Learning Platform for a Top University",
    outcome: "Boosted student engagement by 60% and expanded remote learning.",
    imageHint: "digital transformation",
  },
];

export function SuccessStories() {
  return (
    <SectionWrapper
      id="success"
      title="Success Stories"
      subtitle="See how we've helped our clients achieve remarkable results."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story) => {
          const storyImage = PlaceHolderImages.find((p) => p.id === story.id);
          return (
            <Card key={story.id} className="overflow-hidden group">
              {storyImage && (
                <div className="overflow-hidden">
                  <Image
                    src={storyImage.imageUrl}
                    alt={story.title}
                    width={600}
                    height={400}
                    className="object-cover aspect-[3/2] w-full transition-transform duration-500 group-hover:scale-105"
                    data-ai-hint={story.imageHint}
                  />
                </div>
              )}
              <CardHeader>
                <CardTitle className="font-headline">{story.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{story.outcome}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-semibold hover:text-accent"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
