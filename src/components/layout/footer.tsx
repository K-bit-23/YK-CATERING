import Link from 'next/link';
import { Facebook, Instagram, Twitter, Phone, Home } from 'lucide-react';
import Logo from '../logo';
import { useI18n } from '@/hooks/use-i18n';

const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="relative bg-transparent border-t">
       <div className="absolute inset-0 bg-banana-leaf opacity-5"/>
       <div className="absolute inset-0 bg-gradient-to-t from-background via-background to-transparent"/>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Logo />
            <p className="mt-2 text-sm text-foreground/70">
              {t('footer.subtitle')}
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="font-headline text-lg font-semibold text-primary">{t('footer.contactInfo.title')}</h3>
            <div className="mt-4 space-y-2 text-sm text-foreground/80">
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Home className="h-4 w-4 text-primary" />
                    <p>{t('footer.contactInfo.address')}</p>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:7448312744" className="hover:text-primary">{t('footer.contactInfo.phone1')}</a>
                </div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <a href="tel:8925626963" className="hover:text-primary">{t('footer.contactInfo.phone2')}</a>
                </div>
            </div>
          </div>

          <div className="text-center md:text-right">
             <h3 className="font-headline text-lg font-semibold text-primary">{t('footer.owner.title')}</h3>
             <p className="mt-4 text-sm text-foreground/80">{t('footer.owner.name')}</p>
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
