
'use server';

import { suggestMenu } from '@/ai/flows/suggest-menu';
import { menuItems } from '@/lib/data';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

// AI Suggester Action
const suggestionSchema = z.object({
  occasionType: z.string().min(1, { message: 'Occasion type is required.' }),
  dietaryPreferences: z.string().optional(),
  budget: z.string().min(1, { message: 'Budget is required.' }),
});

export type SuggestionState = {
  message?: string | null;
  errors?: {
    occasionType?: string[];
    dietaryPreferences?: string[];
    budget?: string[];
  } | null;
  suggestion?: string | null;
};

export async function getMenuSuggestions(
  prevState: SuggestionState,
  formData: FormData
): Promise<SuggestionState> {
  const validatedFields = suggestionSchema.safeParse({
    occasionType: formData.get('occasionType'),
    dietaryPreferences: formData.get('dietaryPreferences'),
    budget: formData.get('budget'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid form data.',
    };
  }

  const menuItemsString = menuItems
    .map((item) => `${item.name}: ${item.description} (Price: ${item.price})`)
    .join('\n');

  try {
    const result = await suggestMenu({
      ...validatedFields.data,
      dietaryPreferences: validatedFields.data.dietaryPreferences || 'None',
      menuItems: menuItemsString,
    });
    revalidatePath('/');
    return { message: 'Success', suggestion: result.suggestions };
  } catch (error) {
    console.error('AI suggestion error:', error);
    return { message: 'Error: Could not retrieve suggestions at this time.' };
  }
}

// Contact Form Action
const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  phone: z.string().optional(),
  eventDate: z.string().min(1, { message: 'Please select an event date.' }),
  guestCount: z.string().min(1, { message: 'Please enter the number of guests.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

export type ContactState = {
  message?: string | null;
  errors?: {
    name?: string[];
    email?: string[];
    phone?: string[];
    eventDate?: string[];
    guestCount?: string[];
    message?: string[];
  } | null;
  success?: boolean;
};

export async function submitContactForm(
  prevState: ContactState,
  formData: FormData
): Promise<ContactState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    eventDate: formData.get('eventDate'),
    guestCount: formData.get('guestCount'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Send Inquiry.',
      success: false,
    };
  }

  // In a real app, you would process this data, e.g., send an email or save to a database.
  // For this example, we'll just log it and return a success message.
  console.log('New Contact Inquiry:', validatedFields.data);
  revalidatePath('/');

  return {
    message: "Thank you for your inquiry! We'll be in touch shortly.",
    success: true,
  };
}
