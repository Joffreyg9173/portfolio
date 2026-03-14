import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { GraduationCap } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] },
};

const About = () => {
  const { t } = useLang();
  return (
    <section id="about" className="py-32 px-8 lg:px-24 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2 {...fadeUp} className="text-4xl lg:text-5xl font-black tracking-tighter mb-12">
          {t.about.title}
          <span className="text-accent">.</span>
        </motion.h2>
        <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed mb-6 text-lg">{t.about.p1}</motion.p>
        <motion.p {...fadeUp} className="text-muted-foreground leading-relaxed mb-16 text-lg">{t.about.p2}</motion.p>

        <motion.div {...fadeUp} className="border-2 border-foreground p-8 lg:p-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={28} className="text-accent" />
            <h3 className="text-2xl font-black tracking-tight">{t.about.edu}</h3>
          </div>
          <p className="font-bold text-lg mb-1">{t.about.school}</p>
          <p className="text-muted-foreground mb-1">{t.about.degree}</p>
          <p className="text-muted-foreground mb-1">{t.about.year}</p>
          <p className="font-bold text-accent text-lg">{t.about.gpa}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
