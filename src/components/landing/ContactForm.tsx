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

const serviceOptions = [
  "valuation-assets",
  "administrative-consulting",
  "educational-consulting",
  "other",
] as const;

const formSchema = z.object({
  name: z.string().min(2, "Please provide your contact details."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().optional(),
  service: z
    .enum(serviceOptions)
    .optional()
    .refine(
      (value): value is (typeof serviceOptions)[number] => value !== undefined,
      "Please select a service."
    ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(500),
});

const FORM_SUBMIT_ENDPOINT = "https://formsubmit.co/ajax/Info@pro-option.sa";

export function ContactForm() {
  const { locale } = useLanguage();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      service: undefined,
      message: "",
    },
  });

  const CONTACT_EMAIL = "Info@pro-option.sa";
  const serviceLabelMap: Record<(typeof serviceOptions)[number], string> = {
    "valuation-assets": getTranslation(locale, "contactForm.valuationMachinery"),
    "administrative-consulting": getTranslation(locale, "contactForm.administrativeConsulting"),
    "educational-consulting": getTranslation(locale, "contactForm.educationalConsulting"),
    other: getTranslation(locale, "contactForm.other"),
  };

  function openMailClient(values: z.infer<typeof formSchema>) {
    if (typeof window === "undefined") return;

    const serviceLabel = serviceLabelMap[values.service] || values.service;
    const labels = {
      name: getTranslation(locale, "contactForm.name"),
      email: getTranslation(locale, "contactForm.email"),
      phone: getTranslation(locale, "contactForm.phone"),
      service: getTranslation(locale, "contactForm.service"),
      message: getTranslation(locale, "contactForm.message"),
    };

    const subject = `${labels.service} - ${values.name}`;
    const bodyLines = [
      `${labels.name}: ${values.name}`,
      `${labels.email}: ${values.email}`,
      `${labels.phone}: ${values.phone || "-"}`,
      `${labels.service}: ${serviceLabel}`,
      "",
      `${labels.message}:`,
      values.message,
    ];

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      bodyLines.join("\n")
    )}`;

    window.location.href = mailtoUrl;
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch(FORM_SUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || "-",
          service: values.service,
          message: values.message,
        }),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err?.message || "Failed to send request.");
      }

      toast({
        title: getTranslation(locale, "contactForm.messageSent"),
        description: getTranslation(locale, "contactForm.messageDescription"),
      });
      form.reset();
    } catch (error: any) {
      console.error("Contact submit error:", error);
      toast({
        title: getTranslation(locale, "contactForm.warningTitle"),
        description:
          error?.message ||
          getTranslation(locale, "contactForm.sendErrorDescription") ||
          "Unable to submit your request.",
        variant: "destructive",
      });
      openMailClient(values);
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
                    <Input
                      placeholder=""
                      {...field}
                    />
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
                      value={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder={getTranslation(locale, 'contactForm.serviceSelect')} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="valuation-assets">
                          {getTranslation(locale, 'contactForm.valuationMachinery')}
                        </SelectItem>
                      <SelectItem value="administrative-consulting">
                        {getTranslation(locale, 'contactForm.administrativeConsulting')}
                      </SelectItem>
                      <SelectItem value="educational-consulting">
                        {getTranslation(locale, 'contactForm.educationalConsulting')}
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
