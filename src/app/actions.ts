
'use server';

import { z } from 'zod';
import { revalidatePath } from 'next/cache';

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
