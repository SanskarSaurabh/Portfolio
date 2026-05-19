import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { timeline } from '../data/portfolioData';

export default function Timeline() {
  return (
    <section id="journey" className="section-padding bg-[#0b1224]">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Journey"
          title="A focused progression from foundations to full projects"
          text="Each milestone adds a practical layer: programming, querying, dashboard design, frontend craft, and machine learning."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-neon via-violet to-transparent sm:left-1/2" />
          {timeline.map((item, index) => (
            <motion.div
              key={item}
              className={`relative mb-9 flex ${index % 2 ? 'sm:justify-end' : 'sm:justify-start'}`}
              initial={{ opacity: 0, x: index % 2 ? 40 : -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.65 }}
            >
              <span className="absolute left-2.5 top-7 z-10 h-4 w-4 rounded-full border-4 border-night bg-neon shadow-glow sm:left-1/2 sm:-translate-x-1/2" />
              <div className="ml-12 w-[calc(100%-3rem)] rounded-2xl border border-white/10 bg-panel/70 p-5 shadow-2xl backdrop-blur-xl sm:ml-0 sm:w-[44%]">
                <span className="text-sm font-semibold text-neon">Step {String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-paper">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">Built practical confidence through projects, iteration, and consistent skill stacking.</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
