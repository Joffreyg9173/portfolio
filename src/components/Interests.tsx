import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { Shield, Target, Monitor, FlaskConical, Binary } from 'lucide-react';

const icons = [Shield, Target, Monitor, FlaskConical, Binary];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] },
};

const Interests = () => {
  const { t } = useLang();
  return (
    <section id="interests" className="py-32 px-8 lg:px-24 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeUp} className="text-4xl lg:text-5xl font-black tracking-tighter mb-16">
          {t.interests.title}
          <span className="text-accent">.</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.interests.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                {...fadeUp}
                whileHover={{ scale: 1.03 }}
                className="border-2 border-foreground p-6 flex items-center gap-4 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              >
                <Icon size={24} className="text-accent shrink-0" />
                <span className="font-bold text-sm uppercase tracking-widest">{item}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Interests;
