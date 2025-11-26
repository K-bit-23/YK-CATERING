'use client';

import { useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm, type ContactState } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { DatePicker } from '@/components/ui/date-picker';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      Send Inquiry
    </Button>
  );
}

export default function ContactSection() {
  const initialState: ContactState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Inquiry Sent!',
        description: state.message,
      });
    } else if (state.message && !state.success) {
        toast({
            title: 'Error',
            description: state.message,
            variant: 'destructive',
        });
    }
  }, [state, toast]);

  return (
    <section id="contact" className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Plan Your Perfect Event
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Get in touch with us to discuss your catering needs. We're excited to help you create an unforgettable experience.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
            <Card>
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                    <CardDescription>Please fill out the form below and we will get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={dispatch} className="space-y-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="name">Full name</Label>
                                <Input type="text" name="name" id="name" required />
                                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="email">Email</Label>
                                <Input type="email" name="email" id="email" required />
                                {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="phone">Phone (optional)</Label>
                                <Input type="tel" name="phone" id="phone" />
                            </div>
                            <div>
                                <Label htmlFor="guestCount">Number of Guests</Label>
                                <Input type="number" name="guestCount" id="guestCount" required />
                                {state.errors?.guestCount && <p className="text-sm text-destructive mt-1">{state.errors.guestCount[0]}</p>}
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="eventDate">Event Date</Label>
                                <DatePicker name="eventDate" />
                                {state.errors?.eventDate && <p className="text-sm text-destructive mt-1">{state.errors.eventDate[0]}</p>}
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea name="message" id="message" rows={4} required />
                                {state.errors?.message && <p className="text-sm text-destructive mt-1">{state.errors.message[0]}</p>}
                            </div>
                        </div>
                        <SubmitButton />
                    </form>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
