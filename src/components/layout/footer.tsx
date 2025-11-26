import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../logo';
import { useI18n } from '@/hooks/use-i18n';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-foreground/70">
              {t('footer.subtitle')}
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              <Twitter className="h-6 w-6" />
              <span className="sr-only">Twitter</span>
            </Link>
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
