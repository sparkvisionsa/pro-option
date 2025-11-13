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

const services = [
  {
    icon: Server,
    title: "IT",
    description:
      "Expert IT consulting to streamline your technology infrastructure and operations.",
  },
  {
    icon: BarChart,
    title: "Statistics",
    description:
      "Data analysis and statistical modeling to drive informed business decisions.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Consulting services to enhance educational programs and institutional effectiveness.",
  },
  {
    icon: Factory,
    title: "Plant and Equipment Valuation",
    description:
      "Accurate and reliable valuation of your industrial assets and machinery.",
  },
  {
    icon: ClipboardList,
    title: "Administration",
    description:
      "Optimizing administrative processes for improved efficiency and productivity.",
  },
];

export function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Our Services"
      subtitle="Tailored solutions to drive your career success."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
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
