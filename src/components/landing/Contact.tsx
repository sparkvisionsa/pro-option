import { ContactForm } from "./ContactForm";
import { SectionWrapper } from "./SectionWrapper";
import { MapPin } from "lucide-react";

export function Contact() {
  return (
    <SectionWrapper
      id="contact"
      title="Let's Collaborate"
      subtitle="Reach out to us to start a conversation about your project."
      className="bg-card"
    >
      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <ContactForm />
        <div className="flex flex-col justify-center">
          <h3 className="font-headline text-2xl font-bold text-primary">
            Based in Riyadh, Serving the Kingdom
          </h3>
          <p className="mt-4 text-muted-foreground">
            While our roots are in Riyadh, our services span the entire Kingdom
            of Saudi Arabia. We are ready to partner with you, wherever you are.
          </p>
          <div className="mt-8 rounded-lg overflow-hidden border shadow-lg">
            <div className="w-full h-80 bg-muted flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                    <MapPin className="h-12 w-12 mx-auto" />
                    <p className="mt-2 font-semibold">Riyadh, Saudi Arabia</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
