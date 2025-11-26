'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { getMenuSuggestions, type SuggestionState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Sparkles, Loader2 } from 'lucide-react';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Getting Suggestions...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get AI Suggestions
        </>
      )}
    </Button>
  );
}

export default function AiSuggesterSection() {
  const initialState: SuggestionState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(getMenuSuggestions, initialState);

  return (
    <section id="ai-suggester" className="bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Need Help Deciding?
          </h2>
          <p className="mt-4 text-lg leading-8 text-foreground/80">
            Use our AI-powered tool to get personalized menu suggestions based on your event details.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-xl">
          <Card className="shadow-lg">
            <form action={dispatch}>
              <CardHeader>
                <CardTitle>AI Menu Planner</CardTitle>
                <CardDescription>Fill in your event details below.</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="occasionType">Occasion Type</Label>
                  <Select name="occasionType" required>
                    <SelectTrigger id="occasionType">
                      <SelectValue placeholder="Select an occasion" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wedding">Wedding</SelectItem>
                      <SelectItem value="corporate-event">Corporate Event</SelectItem>
                      <SelectItem value="birthday-party">Birthday Party</SelectItem>
                      <SelectItem value="private-dinner">Private Dinner</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {state.errors?.occasionType && <p className="text-sm text-destructive">{state.errors.occasionType[0]}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="budget">Budget (per person)</Label>
                  <Input id="budget" name="budget" placeholder="e.g., $50, $75-100" required />
                  {state.errors?.budget && <p className="text-sm text-destructive">{state.errors.budget[0]}</p>}
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="dietaryPreferences">Dietary Preferences</Label>
                  <Textarea id="dietaryPreferences" name="dietaryPreferences" placeholder="e.g., Vegetarian, Gluten-Free, Nut Allergies" />
                </div>
              </CardContent>
              <CardFooter>
                <SubmitButton />
              </CardFooter>
            </form>
          </Card>
          {state?.suggestion && (
            <div className="mt-8">
              <Card className="bg-primary/10 border-primary/20">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Sparkles className="mr-2 h-5 w-5" />
                    Our Suggestions For You
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="whitespace-pre-wrap font-body text-foreground/90">{state.suggestion}</p>
                </CardContent>
              </Card>
            </div>
          )}
          {state?.message && !state.suggestion && state.message !== 'Success' &&(
             <p className="mt-4 text-center text-sm text-destructive">{state.message}</p>
          )}
        </div>
      </div>
    </section>
  );
}
