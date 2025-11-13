"use client";

import Link from "next/link";
import { Menu, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import React from "react";

const navLinks = [
  { href: "/#about", label: "About Us" },
  { href: "/#services", label: "Services" },
  { href: "/#success", label: "Success Stories" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  const isMobile = useIsMobile();
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
          <Mountain className="h-6 w-6 text-primary" />
          <span className="font-headline text-xl font-bold text-primary">
            Pro Option
          </span>
        </Link>
        {isMobile ? (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader className="sr-only">
                <SheetTitle>Mobile Menu</SheetTitle>
                <SheetDescription>
                  Navigation links for Pro Option Career Consulting.
                </SheetDescription>
              </SheetHeader>
              <nav className="grid gap-6 text-lg font-medium mt-12">
                <Link href="/" className="flex items-center gap-2 text-lg font-semibold mb-4" prefetch={false}>
                  <Mountain className="h-6 w-6 text-primary" />
                  <span className="sr-only">Pro Option Career Consulting</span>
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    prefetch={false}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        ) : (
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
                prefetch={false}
              >
                {link.label}
              </Link>
            ))}
             <Button asChild>
                <Link href="/#contact">Book a Consultation</Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
