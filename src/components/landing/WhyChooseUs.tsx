import { ShieldCheck, BrainCircuit, MapPin, Lightbulb } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const features = [
  {
    icon: ShieldCheck,
    title: "Trust",
    description: "Unwavering commitment to integrity and confidentiality.",
  },
  {
    icon: BrainCircuit,
    title: "Expertise",
    description: "A team of seasoned professionals with diverse industry knowledge.",
  },
  {
    icon: MapPin,
    title: "Local Insight",
    description: "Deep understanding of the Saudi market and its unique dynamics.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Cutting-edge solutions that anticipate market trends.",
  },
];

export function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" title="Why Choose Us?" className="bg-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center text-center gap-4"
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-accent bg-accent/10">
              <feature.icon className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-bold font-headline">{feature.title}</h3>
            <p className="text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
