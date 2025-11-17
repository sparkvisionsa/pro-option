import MaintenancePage from "./maintenance/page";
import { Hero } from "@/components/landing/Hero";
import { AboutUs } from "@/components/landing/AboutUs";
import { Services } from "@/components/landing/Services";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { Contact } from "@/components/landing/Contact";

const MAINTENANCE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'false';

export default function Home() {
  if (MAINTENANCE) {
    return <MaintenancePage />;
  }

  return (
    <>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <SuccessStories />
      <Contact />
    </>
  );
}
