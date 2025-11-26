import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Logo from '../logo';

const Header = () => {
  const navItems = [
    { name: 'Menu', href: '#menu' },
    { name: 'AI Suggestions', href: '#ai-suggester' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
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
        <Button asChild className="hidden md:inline-flex bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#contact">Get a Quote</Link>
        </Button>
        {/* Add mobile menu trigger here if needed in the future */}
      </div>
    </header>
  );
};

export default Header;
