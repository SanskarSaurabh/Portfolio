import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';
import { fadeUp, staggerContainer } from '../animations/variants';
import { stats } from '../data/portfolioData';

gsap.registerPlugin(ScrollTrigger);

function StatCard({ stat }) {
  const numberRef = useRef(null);

  useEffect(() => {
    const node = numberRef.current;
    if (!node) return undefined;
    const tween = gsap.fromTo(
      node,
      { textContent: 0 },
      {
        textContent: stat.value,
        duration: 1.8,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: { trigger: node, start: 'top 85%', once: true },
      }
    );
    return () => tween.kill();
  }, [stat.value]);

  return (
    <GlassCard className="text-center">
      <div className="font-display text-4xl font-bold text-paper">
        <span ref={numberRef}>0</span>
        <span className="text-neon">{stat.suffix}</span>
      </div>
      <p className="mt-3 text-sm font-medium text-slate-300">{stat.label}</p>
    </GlassCard>
  );
}

export default function About() {
  return (
    <section id="about" className="section-padding bg-night">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="About"
          title="Data thinking with product-grade execution"
          text="I build dashboards, analysis workflows, and polished React interfaces that make information easier to understand and act on."
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_1.15fr]">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={fadeUp}>
            <GlassCard className="h-full">
              <p className="text-lg leading-9 text-slate-300">
                I am an aspiring Data Analyst focused on Python, SQL, Power BI, Tableau, Excel, and React. My goal is to connect analytical clarity with beautiful product experiences: clean data models, expressive dashboards, and interfaces that feel confident from the first interaction.
              </p>
              <p className="mt-5 text-lg leading-9 text-slate-300">
                I enjoy solving practical business questions, designing dashboard systems, and building frontend experiences with smooth motion, responsive layouts, and modern UI patterns.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div
            className="grid gap-5 sm:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeUp}>
                <StatCard stat={stat} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
