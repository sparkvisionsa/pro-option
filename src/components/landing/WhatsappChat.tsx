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
        className="h-16 w-16 rounded-full bg-[#25D366] text-white hover:bg-[#128C7E] shadow-xl shadow-black/30"
        aria-label="Chat on WhatsApp"
      >
        <Link href="https://wa.me/+966555765446" target="_blank" rel="noopener noreferrer">
          <MessageCircle className="h-7 w-7" />
        </Link>
      </Button>
    </div>
  );
}
