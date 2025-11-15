"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChartGanttIcon, MessageCircle } from "lucide-react";



export function WhatsappChat() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        asChild
        size="icon"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg"
        aria-label="Chat on WhatsApp"
      >
        <Link href="https://wa.me/+966555931192" target="_blank" rel="noopener noreferrer">
          <MessageCircle />
        </Link>
      </Button>
    </div>
  );
}
