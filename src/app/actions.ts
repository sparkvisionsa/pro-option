"use server";

import { enhanceContent } from "@/ai/flows/enhance-content-with-ai";
import { z } from "zod";

const EnhanceContentInputSchema = z.object({
  content: z.string().min(10, { message: "Content must be at least 10 characters long." }),
});

export async function handleEnhanceContent(prevState: any, formData: FormData) {
  const content = formData.get("content");
  const validatedFields = EnhanceContentInputSchema.safeParse({ content });

  if (!validatedFields.success) {
    return {
      message: "Validation failed",
      errors: validatedFields.error.flatten().fieldErrors,
      enhancedContent: null
    };
  }

  try {
    const result = await enhanceContent({ content: validatedFields.data.content });
    return {
      message: "Success",
      enhancedContent: result.enhancedContent,
      errors: undefined
    };
  } catch (error) {
    console.error(error);
    return {
      message: "An error occurred while enhancing the content. Please try again.",
      enhancedContent: null,
      errors: undefined,
    };
  }
}
