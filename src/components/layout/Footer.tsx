import Link from "next/link";
import { Mountain, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Mountain className="h-6 w-6 text-accent" />
            <span className="font-headline text-xl font-bold">Riyadh Vision</span>
          </Link>
          <p className="text-sm text-primary-foreground/80">
            Empowering Decisions with Data, Technology, and Insight.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm md:grid-cols-3 md:col-span-2">
          <div className="grid gap-2">
            <h4 className="font-semibold">Quick Links</h4>
            <Link href="/#about" className="hover:text-accent" prefetch={false}>About Us</Link>
            <Link href="/#services" className="hover:text-accent" prefetch={false}>Services</Link>
            <Link href="/#success" className="hover:text-accent" prefetch={false}>Success Stories</Link>
            <Link href="/#contact" className="hover:text-accent" prefetch={false}>Contact</Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Legal</h4>
            <Link href="#" className="hover:text-accent" prefetch={false}>Privacy Policy</Link>
            <Link href="#" className="hover:text-accent" prefetch={false}>Terms of Service</Link>
          </div>
          <div className="grid gap-2">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex gap-4">
              <Link href="#" aria-label="LinkedIn" className="hover:text-accent" prefetch={false}><Linkedin className="h-5 w-5" /></Link>
              <Link href="#" aria-label="Twitter" className="hover:text-accent" prefetch={false}><Twitter className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary/90 py-4 text-center text-sm text-primary-foreground/70">
        <p>Copyright © 2025 Riyadh Vision Consulting. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
