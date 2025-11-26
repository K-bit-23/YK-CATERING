import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '../logo';
import { useI18n } from '@/hooks/use-i18n';
import { Globe } from 'lucide-react';

const Header = () => {
  const { t, setLang, lang } = useI18n();

  const navItems = [
    { name: t('header.nav.menu'), href: '#menu' },
    { name: t('header.nav.reviews'), href: '#reviews' },
    { name: t('header.nav.contact'), href: '#contact' },
  ];

  const toggleLanguage = () => {
    setLang(lang === 'en' ? 'ta' : 'en');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-2'>
            <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
              <Globe className="h-[1.2rem] w-[1.2rem]" />
            </Button>
            <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground shadow-md shadow-accent/20">
              <Link href="#contact">{t('header.getAQuote')}</Link>
            </Button>
        </div>
        {/* Add mobile menu trigger here if needed in the future */}
      </div>
    </header>
  );
};

export default Header;
