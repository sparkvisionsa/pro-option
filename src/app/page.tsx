import { Hero } from "@/components/landing/Hero";
import { AboutUs } from "@/components/landing/AboutUs";
import { Services } from "@/components/landing/Services";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { SuccessStories } from "@/components/landing/SuccessStories";
import { Contact } from "@/components/landing/Contact";

export default function Home() {
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
