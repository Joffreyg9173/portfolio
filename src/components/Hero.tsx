import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import portrait from '@/assets/mustafo-portrait.png';

const Hero = () => {
  const { t } = useLang();
  return (
    <section id="home" className="min-h-svh flex flex-col lg:flex-row items-stretch overflow-hidden">
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24 py-24 bg-background">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.2, 0, 0, 1] as const }}
        >
          <h2 className="text-2xl font-bold tracking-tighter mb-2">{t.hero.hi}</h2>
          <h1 className="text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.9] tracking-tighter mb-8">
            {t.hero.im} <br />
            <span className="text-accent">{t.hero.name}</span>
          </h1>
          <p className="text-lg font-bold mb-2 uppercase tracking-wide text-foreground">{t.hero.fullName}</p>
          <p className="text-sm font-semibold mb-4 uppercase tracking-wide text-muted-foreground">{t.hero.sub}</p>
          <p className="max-w-md text-muted-foreground mb-10 leading-relaxed text-sm">{t.hero.desc}</p>
          <motion.a
            href="#about"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-primary text-primary-foreground px-10 py-4 font-bold text-sm tracking-widest hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
          >
            {t.hero.cta}
          </motion.a>
        </motion.div>
      </div>

      <div className="flex-1 relative bg-primary min-h-[50vh] lg:min-h-full">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
          src={portrait}
          alt="Mustafo Xalimov"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-accent/10 mix-blend-multiply" />
      </div>
    </section>
  );
};

export default Hero;
