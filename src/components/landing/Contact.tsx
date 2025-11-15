'use client';

import { ContactForm } from "./ContactForm";
import { SectionWrapper } from "./SectionWrapper";
import { Mail, Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

export function Contact() {
  const { locale } = useLanguage();
  return (
    <SectionWrapper
      id="contact"
      title={getTranslation(locale, 'contact.collaborate')}
      subtitle={getTranslation(locale, 'contact.collaborateSubtitle')}
      className="bg-card"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <ContactForm />
        <div className="flex flex-col justify-center">
          <h3 className="font-headline text-2xl font-bold text-primary">
            {getTranslation(locale, 'contact.journey')}
          </h3>
          <p className="mt-4 text-muted-foreground">
            {getTranslation(locale, 'contact.ready')}
          </p>

          <div className="mt-8 space-y-6">
            <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">{getTranslation(locale, 'contact.emailLabel')}</h4>
                <Link href="mailto:Info@pro-option.sa" className="text-primary hover:underline">
                  Info@pro-option.sa
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">{getTranslation(locale, 'contact.phoneLabel')}</h4>
                <Link href="tel:+966555931192" className="text-primary hover:underline">
                  +966 55 593 1192
                </Link>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MessageCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">{getTranslation(locale, 'contact.whatsappLabel')}</h4>
                <Link href="https://wa.me/966555931192" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  {getTranslation(locale, 'contact.whatsappText')}
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-lg overflow-hidden border shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.8381350447876!2d46.6953046!3d24.594781799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f0fcb2b754a53%3A0x8b191ed59492134b!2sSuper%20Office!5e0!3m2!1sen!2ssa!4v1763131601324!5m2!1sen!2ssa"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
