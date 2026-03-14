import { LanguageProvider } from '@/lib/LanguageContext';
import TopBar from '@/components/TopBar';
import VerticalNav from '@/components/VerticalNav';
import MobileNav from '@/components/MobileNav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Interests from '@/components/Interests';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <LanguageProvider>
      <TopBar />
      <VerticalNav />
      <MobileNav />
      <main className="pb-16 md:pb-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Interests />
        <Contact />
      </main>
    </LanguageProvider>
  );
};

export default Index;
