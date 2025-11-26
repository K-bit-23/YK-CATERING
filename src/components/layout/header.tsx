'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '../logo';
import { useI18n } from '@/hooks/use-i18n';
import { Globe, Phone, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { t, setLang, lang } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: t('header.nav.menu'), href: '#menu' },
    { name: t('header.nav.gallery'), href: '#gallery' },
    { name: t('header.nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ta' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/20 bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-2'>
          <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language" className="text-foreground/70 hover:text-primary">
            <Globe className="h-5 w-5" />
          </Button>
          
          <a href="https://wa.me/917448312744" target="_blank" rel="noopener noreferrer" className="hidden md:inline-flex">
            <Button variant="outline" size="sm" className="border-green-500 text-green-600 hover:bg-green-50 hover:text-green-700 gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </Button>
          </a>
          
          <a href="tel:8925626963" className="hidden md:inline-flex">
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10 gap-2">
              <Phone className="h-4 w-4" />
              {t('header.call')}
            </Button>
          </a>
          
          <Button asChild className="hidden lg:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-md">
            <Link href="#contact">{t('header.getAQuote')}</Link>
          </Button>
          
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-primary/10 bg-background/98 backdrop-blur-md">
          <nav className="container mx-auto px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="block py-2 text-foreground/80 hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-3 border-t border-primary/10 flex flex-col gap-2">
              <a href="https://wa.me/917448312744" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 gap-2">
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>
              </a>
              <a href="tel:8925626963">
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10 gap-2">
                  <Phone className="h-4 w-4" />
                  {t('header.call')}
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
