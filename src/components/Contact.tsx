import { motion } from 'framer-motion';
import { useLang } from '@/lib/LanguageContext';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.2, 0, 0, 1] },
};

const Contact = () => {
  const { t } = useLang();
  return (
    <section id="contact" className="py-32 px-8 lg:px-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto">
        <motion.h2 {...fadeUp} className="text-4xl lg:text-5xl font-black tracking-tighter mb-4">
          {t.contact.title}
          <span className="text-accent">.</span>
        </motion.h2>
        <motion.p {...fadeUp} className="text-primary-foreground/60 mb-16 text-lg">{t.contact.subtitle}</motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[
            { icon: Mail, label: t.contact.email, href: `mailto:${t.contact.email}` },
            { icon: Phone, label: t.contact.phone, href: `tel:+998915449469` },
            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/mustafo-xalimov-2635a3348/' },
            { icon: Send, label: 'Telegram', href: 'https://t.me/Joffreyg' },
          ].map((item, i) => (
            <motion.a
              key={i}
              {...fadeUp}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="border-2 border-primary-foreground/20 p-6 flex items-center gap-4 hover:border-accent hover:bg-accent/10 transition-all duration-200 group"
            >
              <item.icon size={24} className="text-accent shrink-0" />
              <span className="font-bold text-sm tracking-wide break-all">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
