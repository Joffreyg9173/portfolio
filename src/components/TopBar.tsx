import { useLang } from '@/lib/LanguageContext';
import { Github } from 'lucide-react';

const TopBar = () => {
  const { lang, setLang } = useLang();
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5">
      <div className="flex gap-2 font-bold text-sm tracking-widest">
        <button
          onClick={() => setLang('EN')}
          className={`transition-colors duration-200 ${lang === 'EN' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
        >
          EN
        </button>
        <span className="text-muted-foreground">|</span>
        <button
          onClick={() => setLang('RU')}
          className={`transition-colors duration-200 ${lang === 'RU' ? 'text-accent' : 'text-foreground hover:text-accent'}`}
        >
          RU
        </button>
      </div>
      <a
        href="https://github.com/Joffreyg9173"
        target="_blank"
        rel="noopener noreferrer"
        className="text-foreground hover:text-accent transition-colors duration-200"
      >
        <Github size={20} />
      </a>
    </header>
  );
};

export default TopBar;
