import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import { FaGithub } from 'react-icons/fa';
import GlassCard from './GlassCard';
import SectionHeader from './SectionHeader';
import { fadeUp, staggerContainer } from '../animations/variants';
import { projects } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-night">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeader
          eyebrow="Projects"
          title="Premium project cards with analytical substance"
          text="Interactive case-study style cards for analytics, dashboards, machine learning, and frontend product work."
        />

        <motion.div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }} variants={staggerContainer}>
          {projects.map((project) => (
            <motion.article key={project.title} variants={fadeUp} whileHover={{ y: -10, rotateX: 2, rotateY: -2 }} transition={{ type: 'spring', stiffness: 220, damping: 18 }}>
              <GlassCard className="group h-full overflow-hidden p-0">
                <div className={`relative h-52 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.65),transparent_18%),linear-gradient(135deg,rgba(15,23,42,0.2),rgba(15,23,42,0.75))]" />
                  <div className="absolute inset-x-6 bottom-6 rounded-xl border border-white/20 bg-night/35 p-4 backdrop-blur-md">
                    <div className="mb-3 flex gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                      {[64, 88, 52, 78].map((height, index) => (
                        <span key={height} className="rounded-t bg-white/70" style={{ height: `${height + index * 2}px` }} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl font-semibold text-paper">{project.title}</h3>
                  <p className="mt-4 min-h-24 leading-7 text-slate-300">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="rounded-full border border-neon/20 bg-neon/10 px-3 py-1 text-xs font-semibold text-neon">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="https://github.com/" className="secondary-button flex-1 justify-center" target="_blank" rel="noreferrer">
                      <FaGithub />
                      GitHub
                    </a>
                    <a href="#contact" className="primary-button flex-1 justify-center">
                      <FiExternalLink />
                      Demo
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
