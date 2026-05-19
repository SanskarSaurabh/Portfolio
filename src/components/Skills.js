import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';
import { fadeUp, staggerContainer } from '../animations/variants';
import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0b1224]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Skills"
          title="A toolkit for analytics, dashboards, and modern interfaces"
          text="Grouped capabilities with animated confidence indicators, built to read clearly on every viewport."
        />

        <motion.div className="grid gap-6 lg:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={staggerContainer}>
          {skills.map((group) => (
            <motion.div key={group.category} variants={fadeUp}>
              <GlassCard className="h-full">
                <h3 className="mb-6 font-display text-2xl font-semibold text-paper">{group.category}</h3>
                <div className="space-y-5">
                  {group.items.map(({ name, level, icon: Icon }) => (
                    <div key={name} className="group">
                      <div className="mb-2 flex items-center justify-between">
                        <span className="flex items-center gap-3 font-semibold text-slate-200">
                          <Icon className="text-xl text-neon transition group-hover:text-violet" />
                          {name}
                        </span>
                        <span className="text-sm text-slate-400">{level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
                        <motion.span
                          className="block h-full rounded-full bg-gradient-to-r from-neon to-violet"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
