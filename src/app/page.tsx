import MaintenancePage from "./maintenance/page";
import { Hero } from "@/components/landing/Hero";
import { AboutUs } from "@/components/landing/AboutUs";
import { Services } from "@/components/landing/Services";
import { ValuationProcess } from "@/components/landing/ValuationProcess";
import { ValuationPurposes } from "@/components/landing/ValuationPurposes";
import { Values } from "@/components/landing/Values";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { FAQ } from "@/components/landing/FAQ";
import { Contact } from "@/components/landing/Contact";

const IS_MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true';

export default function Home() {
  if (IS_MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <ValuationProcess />
      <ValuationPurposes />
      <Values />
      <WhyChooseUs />
      <FAQ />
      <Contact />
    </>
  );
}
