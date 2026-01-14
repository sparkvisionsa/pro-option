'use client';

import { useState } from "react";
import { SectionWrapper } from "./SectionWrapper";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { ChevronDown } from "lucide-react";

const faqItems = [
  {
    qKey: "faq.q1",
    aKey: "faq.a1",
  },
  {
    qKey: "faq.q2",
    aKey: "faq.a2",
  },
  {
    qKey: "faq.q3",
    aKey: "faq.a3",
  },
  {
    qKey: "faq.q4",
    aKey: "faq.a4",
  },
];

export function FAQ() {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper
      id="success"
      title={getTranslation(locale, 'faq.title')}
      subtitle={getTranslation(locale, 'faq.subtitle')}
      className="bg-gradient-to-b from-background via-card/70 to-background"
    >
      <div className="mx-auto max-w-4xl space-y-4">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={item.qKey}
              className="rounded-2xl border border-primary/10 bg-background/80 backdrop-blur shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className="font-semibold text-lg">
                  {getTranslation(locale, item.qKey)}
                </span>
                <ChevronDown
                  className={`h-5 w-5 transition-transform ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`px-5 pb-4 text-muted-foreground transition-all duration-300 ${
                  isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                }`}
              >
                {getTranslation(locale, item.aKey)}
              </div>
            </div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
