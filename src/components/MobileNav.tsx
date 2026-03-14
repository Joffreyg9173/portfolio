import { useLang } from '@/lib/LanguageContext';
import { Home, User, Code, Briefcase, Mail, Star } from 'lucide-react';

const navItems = [
  { icon: Home, href: '#home', key: 'home' as const },
  { icon: User, href: '#about', key: 'about' as const },
  { icon: Code, href: '#skills', key: 'skills' as const },
  { icon: Briefcase, href: '#projects', key: 'projects' as const },
  { icon: Star, href: '#interests', key: 'interests' as const },
  { icon: Mail, href: '#contact', key: 'contact' as const },
];

const MobileNav = () => {
  const { t } = useLang();
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary flex justify-around py-3 shadow-2xl">
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className="text-primary-foreground hover:text-accent transition-colors duration-200 flex flex-col items-center gap-1"
        >
          <item.icon size={18} />
          <span className="text-[9px] font-bold tracking-wider">{t.nav[item.key]}</span>
        </a>
      ))}
    </nav>
  );
};

export default MobileNav;
