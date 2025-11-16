"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/context/LanguageContext";
import { getTranslation } from "@/lib/i18n";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z.enum([
    "resume-review",
    "interview-prep",
    "career-coaching",
    "linkedin-profile",
    "other",
  ]),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500),
});

export function ContactForm() {
  const { locale } = useLanguage();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: "other",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      if (res.ok) {
        // helpful debugging in the browser console
        console.log("Contact form response status:", res.status);

        const data = await res.json().catch(() => ({}));
        console.log("Contact form response body:", data);

        // If the API returned a warning we surface that separately so dev knows
        if (data?.warning) {
          if (data.warning === "nodemailer-not-installed") {
            toast({
              title: getTranslation(locale, "contactForm.messageSent"),
              description: getTranslation(locale, "contactForm.warningNodemailer"),
            });
          } else if (data?.warning === "smtp-not-configured") {
            toast({
              title: getTranslation(locale, "contactForm.messageSent"),
              description: getTranslation(locale, "contactForm.warningSmtp"),
            });
          } else {
            toast({
              title: getTranslation(locale, "contactForm.messageSent"),
              description: getTranslation(locale, "contactForm.messageDescription"),
            });
          }
        } else {
          toast({
            title: getTranslation(locale, "contactForm.messageSent"),
            description: getTranslation(locale, "contactForm.messageDescription"),
          });
        }

        form.reset();
      } else {
        const err = await res.json().catch(() => ({}));
        toast({
          title: getTranslation(locale, "contactForm.sendError") || "Error sending message",
          description: err?.error || getTranslation(locale, "contactForm.sendErrorDescription") || "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error: any) {
      console.error("Contact submit error:", error);
      toast({
        title: getTranslation(locale, "contactForm.sendError") || "Error sending message",
        description: error?.message || getTranslation(locale, "contactForm.sendErrorDescription") || "Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{getTranslation(locale, 'contactForm.name')}</FormLabel>
                  <FormControl>
                    <Input placeholder={getTranslation(locale, 'contactForm.namePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{getTranslation(locale, 'contactForm.email')}</FormLabel>
                  <FormControl>
                    <Input placeholder={getTranslation(locale, 'contactForm.emailPlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{getTranslation(locale, 'contactForm.phone')}</FormLabel>
                  <FormControl>
                    <Input placeholder={getTranslation(locale, 'contactForm.phonePlaceholder')} {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{getTranslation(locale, 'contactForm.service')}</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder={getTranslation(locale, 'contactForm.serviceSelect')} />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="resume-review">
                        {getTranslation(locale, 'contactForm.resumeReview')}
                      </SelectItem>
                      <SelectItem value="interview-prep">
                        {getTranslation(locale, 'contactForm.interviewPrep')}
                      </SelectItem>
                      <SelectItem value="career-coaching">
                        {getTranslation(locale, 'contactForm.careerCoaching')}
                      </SelectItem>
                      <SelectItem value="linkedin-profile">
                        {getTranslation(locale, 'contactForm.linkedinProfile')}
                      </SelectItem>
                      <SelectItem value="other">{getTranslation(locale, 'contactForm.other')}</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>{getTranslation(locale, 'contactForm.message')}</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder={getTranslation(locale, 'contactForm.messagePlaceholder')}
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting 
                ? getTranslation(locale, 'contactForm.sending')
                : getTranslation(locale, 'contactForm.sendMessage')}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
