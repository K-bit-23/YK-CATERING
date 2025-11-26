'use client';

import { createContext, useState, useEffect, ReactNode, useCallback } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import en from '@/app/i18n/en.json';
import ta from '@/app/i18n/ta.json';

type Language = 'en' | 'ta';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = { en, ta };

function getNestedValue(obj: any, key: string): string {
  return key.split('.').reduce((acc, part) => acc && acc[part], obj) || key;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [lang, setLangState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const langParam = searchParams.get('lang');
    if (langParam === 'ta') {
      setLangState('ta');
    }
  }, [searchParams]);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    current.set('lang', newLang);
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`${pathname}${query}`);
  };

  const t = useCallback((key: string): string => {
    return getNestedValue(translations[lang], key);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}
