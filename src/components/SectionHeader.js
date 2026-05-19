import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

export default function SectionHeader({ eyebrow, title, text }) {
  return (
    <motion.div
      className="mx-auto mb-12 max-w-3xl text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      <span className="text-sm font-semibold uppercase tracking-[0.28em] text-neon">{eyebrow}</span>
      <h2 className="mt-4 font-display text-3xl font-bold text-paper sm:text-4xl lg:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-slate-300">{text}</p>}
    </motion.div>
  );
}
