import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';
import { fadeUp, staggerContainer } from '../animations/variants';
import { services } from '../data/portfolioData';

export default function Services() {
  return (
    <section className="section-padding bg-night">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Services" title="Ways I can help teams move faster" text="Focused offerings that blend analysis, automation, dashboard design, and polished frontend delivery." />
        <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={staggerContainer}>
          {services.map(({ title, text, icon: Icon }) => (
            <motion.div key={title} variants={fadeUp} whileHover={{ y: -8 }}>
              <GlassCard className="h-full">
                <div className="mb-6 grid h-14 w-14 place-items-center rounded-2xl border border-neon/30 bg-neon/10 text-3xl text-neon shadow-glow">
                  <Icon />
                </div>
                <h3 className="font-display text-xl font-semibold text-paper">{title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{text}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
