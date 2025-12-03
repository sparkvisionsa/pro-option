'use client';

import Link from "next/link";
import Image from "next/image";
import { Linkedin, Twitter, Instagram, Facebook, MessageCircle, X, Pin, TicketCheckIcon } from "lucide-react";
import { getTranslation } from "@/lib/i18n";
import { useLanguage } from "@/context/LanguageContext";
import logo from '../../app/logo.jpeg'

export function Footer() {
  const { locale } = useLanguage();
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image 
              src={logo}
              alt="Pro Option Logo" 
              width={32} 
              height={32}
              className="rounded"
            />
            <span className="font-headline text-xl font-bold">Pro Option Career Consulting</span>
          </Link>
          <p className="text-sm text-primary-foreground/80">
            {getTranslation(locale, 'footer.tagline')}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3 md:col-span-2">
          <div className="grid gap-2">
            <h4 className="font-semibold">{getTranslation(locale, 'footer.quickLinks')}</h4>
            <Link href="/#about" className="hover:text-accent" prefetch={false}>{getTranslation(locale, 'nav.about')}</Link>
            <Link href="/#services" className="hover:text-accent" prefetch={false}>{getTranslation(locale, 'nav.services')}</Link>
            <Link href="/#success" className="hover:text-accent" prefetch={false}>{getTranslation(locale, 'nav.success')}</Link>
            <Link href="/#contact" className="hover:text-accent" prefetch={false}>{getTranslation(locale, 'nav.contact')}</Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">{getTranslation(locale, 'footer.legal')}</h4>
            <Link href="#" className="hover:text-accent" prefetch={false}>{getTranslation(locale, 'footer.privacy')}</Link>
            <Link href="#" className="hover:text-accent" prefetch={false}>{getTranslation(locale, 'footer.terms')}</Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">{getTranslation(locale, 'footer.connect')}</h4>
            <div className="flex gap-4 flex-wrap">
              {/* <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-accent" prefetch={false}><Instagram className="h-5 w-5" /></Link>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-accent" prefetch={false}><Facebook className="h-5 w-5" /></Link> */}
              <Link href="https://www.snapchat.com/@prooption1" target="_blank" rel="noopener noreferrer" aria-label="Snapchat" className="hover:text-accent" prefetch={false}><MessageCircle className="h-5 w-5" /></Link>
              <Link href="https://www.linkedin.com/in/pro-option-7a8344393/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-accent" prefetch={false}><Linkedin className="h-5 w-5" /></Link>
              <Link href="https://x.com/prooption11" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-accent" prefetch={false}><Twitter className="h-5 w-5" /></Link>
              {/* <Link href="https://www.pinterest.com/sparkvisionsa/" target="_blank" rel="noopener noreferrer" aria-label="Pinterest" className="hover:text-accent" prefetch={false}><Pin className="h-5 w-5" /></Link> */}
              <Link href="https://www.tiktok.com/@prooption" target="_blank" rel="noopener noreferrer" aria-label="Tiktok" className="hover:text-accent" prefetch={false}><TicketCheckIcon className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/90 py-4 text-center text-sm text-primary-foreground/70">
        <p>{getTranslation(locale, 'footer.copyright')}</p>
      </div>
    </footer>
  );
}
