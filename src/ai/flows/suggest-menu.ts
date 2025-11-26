'use server';
/**
 * @fileOverview AI-powered menu suggestion flow.
 *
 * - suggestMenu - A function that suggests menu items and catering packages.
 * - SuggestMenuInput - The input type for the suggestMenu function.
 * - SuggestMenuOutput - The return type for the suggestMenu function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestMenuInputSchema = z.object({
  occasionType: z
    .string()
    .describe('The type of occasion (e.g., wedding, corporate event, birthday party).'),
  dietaryPreferences: z
    .string()
    .describe('Any dietary restrictions or preferences (e.g., vegetarian, vegan, gluten-free).'),
  budget: z
    .string()
    .describe('The budget for the catering service (e.g., $500, $1000, budget range).'),
  menuItems: z
    .string()
    .describe('A list of available menu items and catering packages.'),
});
export type SuggestMenuInput = z.infer<typeof SuggestMenuInputSchema>;

const SuggestMenuOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('A list of suggested menu items and catering packages based on the input criteria.'),
});
export type SuggestMenuOutput = z.infer<typeof SuggestMenuOutputSchema>;

export async function suggestMenu(input: SuggestMenuInput): Promise<SuggestMenuOutput> {
  return suggestMenuFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestMenuPrompt',
  input: {schema: SuggestMenuInputSchema},
  output: {schema: SuggestMenuOutputSchema},
  prompt: `You are a catering expert specializing in menu planning for K.Y. Catering.

  Based on the occasion type, dietary preferences, and budget, suggest suitable menu items and catering packages from the following list:

  Available Menu Items and Packages: {{{menuItems}}}

  Consider the following criteria:
  Occasion Type: {{{occasionType}}}
  Dietary Preferences: {{{dietaryPreferences}}}
  Budget: {{{budget}}}

  Provide a detailed list of suggested menu items and catering packages that best fit the customer's needs. Explain why each suggestion is suitable.
  Your output must be only a text string of suggestions.
`,
});

const suggestMenuFlow = ai.defineFlow(
  {
    name: 'suggestMenuFlow',
    inputSchema: SuggestMenuInputSchema,
    outputSchema: SuggestMenuOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
