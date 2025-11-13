import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-24", className)}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
