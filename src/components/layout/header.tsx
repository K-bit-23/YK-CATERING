import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '../logo';
import { useI18n } from '@/hooks/use-i18n';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';

const Header = () => {
  const { t, setLang, lang } = useI18n();

  const navItems = [
    { name: t('header.nav.menu'), href: '#menu' },
    { name: t('header.nav.reviews'), href: '#reviews' },
    { name: t('header.nav.contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
              {item.name}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-4'>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-[1.2rem] w-[1.2rem]" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLang('en')} disabled={lang === 'en'}>
                  English
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLang('ta')} disabled={lang === 'ta'}>
                  தமிழ்
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="#contact">{t('header.getAQuote')}</Link>
            </Button>
        </div>
        {/* Add mobile menu trigger here if needed in the future */}
      </div>
    </header>
  );
};

export default Header;
