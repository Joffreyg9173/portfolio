import { createContext, useContext, useState, type ReactNode } from 'react';
import { content, type Lang } from './translations';

type LanguageContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof content.EN;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>('EN');
  const t = content[lang];
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLang = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
};
