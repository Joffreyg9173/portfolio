import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] },
};

const skillGroups = (t: ReturnType<typeof useLang>['t']) => [
  { title: t.skills.programming, items: ['Python', 'Java', 'C'] },
  { title: t.skills.systems, items: ['Client–Server Architecture', 'Multithreading', 'Socket Programming', 'REST API Development'] },
  { title: t.skills.databases, items: ['MySQL', 'Oracle Database'] },
  { title: t.skills.tools, items: ['Git', 'Kali Linux', 'Ubuntu Linux'] },
];

const Skills = () => {
  const { t } = useLang();
  return (
    <section id="skills" className="py-32 px-8 lg:px-24 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeUp} className="text-4xl lg:text-5xl font-black tracking-tighter mb-16">
          {t.skills.title}
          <span className="text-accent">.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skillGroups(t).map((group) => (
            <motion.div key={group.title} {...fadeUp}>
              <h3 className="text-xl font-black mb-6 tracking-tight">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-bold uppercase tracking-widest border-2 border-foreground px-4 py-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
