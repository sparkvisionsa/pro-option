/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { cn } from "@/lib/utils";
import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -5%" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={cn(
        "py-24 sm:py-32 min-h-[90vh] opacity-0 translate-y-8 transition-all ease-out",
        visible && "opacity-100 translate-y-0",
        className
      )}
      style={{
        transitionDuration: "1100ms",
        transitionDelay: visible ? "140ms" : "0ms",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 suppressHydrationWarning className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            {title}
          </h2>
          {subtitle && (
            <p suppressHydrationWarning className="mt-4 text-xl text-muted-foreground">{subtitle}</p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}
