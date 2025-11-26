import Link from 'next/link';
import { UtensilsCrossed } from 'lucide-react';

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <UtensilsCrossed className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold text-primary">
        K.Y. Catering Online
      </span>
    </Link>
  );
};

export default Logo;
