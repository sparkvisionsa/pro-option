import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, BarChart3, GraduationCap, TrendingUp } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const services = [
  {
    icon: Bot,
    title: "IT Consulting",
    description:
      "Digital transformation, cloud migration, and AI automation to future-proof your business.",
  },
  {
    icon: BarChart3,
    title: "Statistics Consulting",
    description:
      "Harness the power of your data with advanced analytics, surveys, and predictive modeling.",
  },
  {
    icon: GraduationCap,
    title: "Education Consulting",
    description:
      "Forge academic partnerships, develop training programs, and design cutting-edge e-learning.",
  },
  {
    icon: TrendingUp,
    title: "Valuation & Financial Consulting",
    description:
      "In-depth business valuation, feasibility studies, and market analysis for strategic decisions.",
  },
];

export function Services() {
  return (
    <SectionWrapper
      id="services"
      title="Our Services"
      subtitle="Tailored solutions to drive your success."
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
