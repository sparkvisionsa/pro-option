"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="h-6 w-6"
    fill="currentColor"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 .4c101.2 0 183.3 82.1 183.3 183.3 0 32.7-8.9 63.7-25.3 90.8l-15.6 22.5 44.1 11.6-11.9 42.6-24.5-6.5-22.3-15.5c-27.1 16.3-58.3 26-90.8 26-101.2 0-183.3-82.1-183.3-183.3S122.7 97.5 223.9 97.5zm70.3 123.3c-3.3-1.8-19.8-9.8-23-11s-5.5-1.8-7.8 1.8c-2.3 3.6-8.7 11-10.7 13.2s-4 2.3-7.3 1c-3.3-1.3-14.1-5.2-26.8-16.6-9.9-8.9-16.6-19.8-18.6-23.2s-2-5.5 0-7.3c1.8-1.8 4-4.7 6-6.2s3.2-3 4.8-5c1.6-2 2.3-3.6 1.5-6.2s-7.8-18.6-10.7-25.6c-2.9-7-5.8-6-7.8-6.1s-4 .1-6.2 .1c-2.2 0-5.8 1-8.7 3.6s-11.3 11-11.3 26.8c0 15.8 11.5 31.1 13.2 33.2s22.3 34.1 53.9 47.5c7.9 3.4 14.1 5.4 18.9 6.9 8.7 2.6 16.6 2.2 22.8 1.4 6.9-1 19.8-8.1 22.6-15.8s2.8-14.4 2-15.8c-.8-1.4-3-2.3-6.2-4.1z" />
  </svg>
);

export function WhatsappChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Link href="https://wa.me/966000000000" target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon />
        </Link>
      </Button>
    </div>
  );
}
