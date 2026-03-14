import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { Github } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] as const },
};

const Projects = () => {
  const { t } = useLang();
  return (
    <section id="projects" className="py-32 px-8 lg:px-24 bg-background">
      <div className="max-w-5xl mx-auto">
        <motion.h2 {...fadeUp} className="text-4xl lg:text-5xl font-black tracking-tighter mb-16">
          {t.projects.title}
          <span className="text-accent">.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i}
              {...fadeUp}
              whileHover={{ y: -10 }}
              className="group border-2 border-foreground p-8 flex flex-col justify-between hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              <div>
                <h3 className="text-xl font-black mb-4 group-hover:text-accent">{project.title}</h3>
                <p className="text-sm mb-6 text-muted-foreground group-hover:text-primary-foreground/70">{project.desc}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-widest border border-current px-2 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-bold text-sm hover:text-accent tracking-widest"
              >
                {t.projects.viewGithub} <Github size={16} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
