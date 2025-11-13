import { ContactForm } from "./ContactForm";
import { SectionWrapper } from "./SectionWrapper";

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
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.2415770981506!2d46.50943418628744!3d24.6153573690804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f21fc0c1e05dd%3A0x2a74126884075bff!2zUkRMRjMyNzTYjCAzMjc0INi02KfYsdi5INix2YLZhSAyNTTYjCA3MTg32Iwg2K3ZiiDYuNmH2LHYqSDZhNio2YYsIFJpeWFkaCAxMzc4Nw!5e0!3m2!1sen!2ssa!4v1763030496029!5m2!1sen!2ssa"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-96"
            ></iframe>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
