// src/ai/flows/enhance-content-with-ai.ts
'use server';
/**
 * @fileOverview An AI-powered tool to rewrite and refine content for a Saudi Arabian audience,
 * aligning with Vision 2030 objectives and incorporating design cues.
 *
 * - enhanceContent - A function that enhances content using AI.
 * - EnhanceContentInput - The input type for the enhanceContent function.
 * - EnhanceContentOutput - The return type for the enhanceContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EnhanceContentInputSchema = z.object({
  content: z.string().describe('The content to be enhanced.'),
});
export type EnhanceContentInput = z.infer<typeof EnhanceContentInputSchema>;

const EnhanceContentOutputSchema = z.object({
  enhancedContent: z.string().describe('The enhanced content, tailored for a Saudi Arabian audience and aligned with Vision 2030.'),
});
export type EnhanceContentOutput = z.infer<typeof EnhanceContentOutputSchema>;

export async function enhanceContent(input: EnhanceContentInput): Promise<EnhanceContentOutput> {
  return enhanceContentFlow(input);
}

const prompt = ai.definePrompt({
  name: 'enhanceContentPrompt',
  input: {schema: EnhanceContentInputSchema},
  output: {schema: EnhanceContentOutputSchema},
  prompt: `You are a content enhancement expert specializing in tailoring content for the Saudi Arabian audience, ensuring alignment with Vision 2030 objectives and incorporating relevant design cues such as elegant geometric patterns.

  Please rewrite the following content to resonate better with the Saudi Arabian audience, align with Vision 2030 objectives, and subtly incorporate design cues such as elegant geometric patterns:

  Original Content: {{{content}}}

  Enhanced Content:`, 
});

const enhanceContentFlow = ai.defineFlow(
  {
    name: 'enhanceContentFlow',
    inputSchema: EnhanceContentInputSchema,
    outputSchema: EnhanceContentOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
