import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import GlassCard from './GlassCard';
import { testimonials } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="section-padding overflow-hidden bg-[#0b1224]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader eyebrow="Testimonials" title="Mentor and collaborator feedback" text="A smooth carousel-style row with social proof for analytical thinking and interface craft." />
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
              <GlassCard key={`${item.name}-${index}`} className="min-w-[310px] sm:min-w-[390px]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-neon to-violet font-display font-bold text-night">
                    {item.image}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-paper">{item.name}</h3>
                    <p className="text-sm text-slate-400">{item.role}</p>
                  </div>
                </div>
                <p className="leading-8 text-slate-300">"{item.quote}"</p>
              </GlassCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
