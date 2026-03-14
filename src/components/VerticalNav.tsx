import { Home, User, Code, Briefcase, Mail, Star } from 'lucide-react';
import { useLang } from '@/lib/LanguageContext';

const navItems = [
  { icon: Home, href: '#home', key: 'home' as const },
  { icon: User, href: '#about', key: 'about' as const },
  { icon: Code, href: '#skills', key: 'skills' as const },
  { icon: Briefcase, href: '#projects', key: 'projects' as const },
  { icon: Star, href: '#interests', key: 'interests' as const },
  { icon: Mail, href: '#contact', key: 'contact' as const },
];

const VerticalNav = () => {
  const { t } = useLang();
  return (
    <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-5 bg-primary p-3 rounded-full shadow-2xl">
      {navItems.map((item) => (
        <a
          key={item.key}
          href={item.href}
          title={t.nav[item.key]}
          className="text-primary-foreground hover:text-accent transition-colors duration-200"
        >
          <item.icon size={18} />
        </a>
      ))}
    </nav>
  );
};

export default VerticalNav;
