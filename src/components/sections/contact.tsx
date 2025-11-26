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
import { useI18n } from '@/hooks/use-i18n';

function SubmitButton() {
  const { pending } = useFormStatus();
  const { t } = useI18n();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {t('contact.form.submit')}
    </Button>
  );
}

export default function ContactSection() {
  const { t } = useI18n();
  const initialState: ContactState = { message: null, errors: {}, success: false };
  const [state, dispatch] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.success) {
      toast({
        title: t('contact.toast.success.title'),
        description: t('contact.toast.success.description'),
      });
    } else if (state.message && !state.success) {
        toast({
            title: t('contact.toast.error.title'),
            description: state.message, // The message from the action is more specific
            variant: 'destructive',
        });
    }
  }, [state, toast, t]);

  return (
    <section id="contact" className="">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            {t('contact.title')}
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-xl">
            <Card>
                <CardHeader>
                    <CardTitle>{t('contact.form.title')}</CardTitle>
                    <CardDescription>{t('contact.form.description')}</CardDescription>
                </CardHeader>
                <CardContent>
                    <form action={dispatch} className="space-y-6">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div>
                                <Label htmlFor="name">{t('contact.form.name.label')}</Label>
                                <Input type="text" name="name" id="name" required />
                                {state.errors?.name && <p className="text-sm text-destructive mt-1">{state.errors.name[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="email">{t('contact.form.email.label')}</Label>
                                <Input type="email" name="email" id="email" required />
                                {state.errors?.email && <p className="text-sm text-destructive mt-1">{state.errors.email[0]}</p>}
                            </div>
                            <div>
                                <Label htmlFor="phone">{t('contact.form.phone.label')}</Label>
                                <Input type="tel" name="phone" id="phone" />
                            </div>
                            <div>
                                <Label htmlFor="guestCount">{t('contact.form.guestCount.label')}</Label>
                                <Input type="number" name="guestCount" id="guestCount" required />
                                {state.errors?.guestCount && <p className="text-sm text-destructive mt-1">{state.errors.guestCount[0]}</p>}
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="eventDate">{t('contact.form.eventDate.label')}</Label>
                                <DatePicker name="eventDate" />
                                {state.errors?.eventDate && <p className="text-sm text-destructive mt-1">{state.errors.eventDate[0]}</p>}
                            </div>
                            <div className="sm:col-span-2">
                                <Label htmlFor="message">{t('contact.form.message.label')}</Label>
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
