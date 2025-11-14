"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { cn } from "@/lib/utils";
import React from "react";
import logo from '../../app/logo.jpeg'

const navLinks = [
  { href: "/#about", labelKey: "nav.about" },
  { href: "/#services", labelKey: "nav.services" },
  { href: "/#success", labelKey: "nav.success" },
  { href: "/#contact", labelKey: "nav.contact" },
];

export function Header() {
  const isMobile = useIsMobile();
  const { locale } = useLanguage();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <Image 
            src={logo} 
            alt="Pro Option Logo" 
            width={32} 
            height={32}
            className="rounded"
          />
          <span className="font-headline text-xl font-bold text-primary">
            Pro Option Career Consulting
          </span>
        </Link>
        {isMobile ? (
          <div className="flex items-center gap-2">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side={locale === 'ar' ? 'left' : 'right'}>
                <SheetHeader className={locale === 'ar' ? 'text-right' : 'text-left'}>
                  <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                  <SheetDescription className="sr-only">
                    Navigation links for Pro Option Career Consulting.
                  </SheetDescription>
                  <Link href="/" className="flex items-center gap-2" prefetch={false}>
                    <Image 
                      src={logo}
                      alt="Pro Option Logo" 
                      width={32} 
                      height={32}
                      className="rounded"
                    />
                    <span className="font-headline text-xl font-bold text-primary">Pro Option Career Consulting</span>
                  </Link>
                </SheetHeader>
                <nav className="grid gap-6 text-lg font-medium mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                      prefetch={false}
                    >
                      {getTranslation(locale, link.labelKey)}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
                prefetch={false}
              >
                {getTranslation(locale, link.labelKey)}
              </Link>
            ))}
            <Button asChild>
              <Link href="/#contact">{getTranslation(locale, 'nav.consultation')}</Link>
            </Button>
            <LanguageSwitcher />
          </nav>
        )}
      </div>
    </header>
  );
}
