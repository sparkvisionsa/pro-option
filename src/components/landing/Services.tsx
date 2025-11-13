import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Briefcase,
  Users,
  Linkedin,
} from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const services = [
  {
    icon: FileText,
    title: "Resume Review",
    description:
      "Get a professional resume that stands out and gets you noticed by recruiters.",
  },
  {
    icon: Briefcase,
    title: "Interview Prep",
    description:
      "Ace your interviews with mock sessions and expert feedback.",
  },
  {
    icon: Users,
    title: "Career Coaching",
    description:
      "Personalized guidance to help you navigate career transitions and growth.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Optimization",
    description:
      "Enhance your professional brand and attract opportunities with a powerful LinkedIn profile.",
  },
];

export function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Our Services"
      subtitle="Tailored solutions to drive your career success."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service) => (
          <Card
            key={service.title}
            className="text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
          >
            <CardHeader>
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="pt-4 font-headline">
                {service.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
