'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { useI18n } from '@/hooks/use-i18n';

export default function StickyContact() {
  const { t } = useI18n();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-primary/20 p-3">
      <div className="flex gap-3">
        <a 
          href="https://wa.me/917448312744" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium shadow-lg transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          WhatsApp
        </a>
        <a 
          href="tel:8925626963"
          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-lg font-medium shadow-lg transition-colors"
        >
          <Phone className="h-5 w-5" />
          {t('hero.call')}
        </a>
      </div>
    </div>
  );
}
