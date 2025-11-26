'use client';

import Link from 'next/link';
import { Phone, MapPin, MessageCircle, User } from 'lucide-react';
import Logo from '../logo';
import { useI18n } from '@/hooks/use-i18n';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="relative bg-transparent border-t border-primary/20 pb-20 md:pb-0">
      <div className="absolute inset-0 bg-banana-leaf opacity-5"/>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent"/>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-foreground/70">
              {t('footer.subtitle')}
            </p>
            <p className="mt-2 text-xs text-primary/80 font-medium">
              {t('hero.blessing')}
            </p>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold text-primary">{t('footer.contactInfo.title')}</h3>
            <div className="mt-4 space-y-3 text-sm text-foreground/80">
              <div className="flex items-start justify-center md:justify-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <p>{t('footer.contactInfo.address')}</p>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <MessageCircle className="h-4 w-4 text-green-600" />
                <a href="https://wa.me/917448312744" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{t('footer.contactInfo.phone1')}</a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:8925626963" className="hover:text-primary transition-colors">{t('footer.contactInfo.phone2')}</a>
              </div>
              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=K.K.+Nagar+Chennai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline text-sm"
                >
                  <MapPin className="h-4 w-4" />
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h3 className="font-headline text-lg font-semibold text-primary">{t('footer.owner.title')}</h3>
            <div className="mt-4 flex items-center justify-center md:justify-end gap-2 text-foreground/80">
              <User className="h-4 w-4 text-primary" />
              <p className="text-sm font-medium">{t('footer.owner.name')}</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-primary/10 pt-8 text-center text-sm text-foreground/50">
          <p>&copy; {new Date().getFullYear()} {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
