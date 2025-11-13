import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function AboutUs() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === "about-us-visual");

  return (
    <section id="about" className="py-16 sm:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            About Riyadh Vision Consulting
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h3 className="font-headline text-2xl font-bold text-primary/90">
              Your Partner in Progress
            </h3>
            <p className="text-muted-foreground">
              Our mission is to empower organizations across Saudi Arabia by
              providing unparalleled consulting services. With deep local
              expertise and a commitment to excellence, we align our strategies
              with the ambitious goals of Vision 2030. We are more than
              consultants; we are your dedicated partners in navigating the
              future.
            </p>
            <p className="text-muted-foreground">
              We blend international best practices with an intrinsic
              understanding of the Saudi market, ensuring our solutions are not
              only innovative but also culturally resonant and impactful.
            </p>
          </div>
          <div className="w-full">
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
