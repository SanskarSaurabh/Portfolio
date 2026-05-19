import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiArrowDown, FiDownload, FiMail, FiZap } from 'react-icons/fi';
import { socials } from '../data/portfolioData';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const smoothX = useSpring(x, { stiffness: 80, damping: 18 });
  const smoothY = useSpring(y, { stiffness: 80, damping: 18 });
  const blobX = useTransform(smoothX, [-500, 500], [-24, 24]);
  const blobY = useTransform(smoothY, [-500, 500], [-18, 18]);

  const onMouseMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set(event.clientX - rect.left - rect.width / 2);
    y.set(event.clientY - rect.top - rect.height / 2);
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-aurora pt-28" onMouseMove={onMouseMove}>
      <ParticlesBackground />
      <div className="absolute inset-0 bg-grid bg-[length:42px_42px] opacity-40" />
      <motion.span style={{ x: blobX, y: blobY }} className="glow-blob left-[7%] top-[18%] bg-neon/25" />
      <motion.span style={{ x: blobY, y: blobX }} className="glow-blob bottom-[12%] right-[10%] bg-violet/25" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-7rem)] max-w-7xl items-center gap-12 px-5 pb-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-white/5 px-4 py-2 text-sm font-semibold text-neon backdrop-blur"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <FiZap />
            Data Analyst + React Developer
          </motion.div>

          <motion.h1
            className="mt-7 max-w-5xl font-display text-4xl font-bold leading-tight text-paper sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.12 }}
          >
            Turning Data Into Insights & Ideas Into Reality
          </motion.h1>

          <motion.div
            className="mt-6 min-h-16 max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.26 }}
          >
            <TypeAnimation
              sequence={[
                'Aspiring Data Analyst skilled in Python, SQL, Power BI, Tableau & React',
                1800,
                'Building dashboards, analytics stories, and premium interfaces',
                1800,
                'Transforming messy data into decisions people can trust',
                1800,
              ]}
              speed={58}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            className="mt-9 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.38 }}
          >
            <a href="#projects" className="primary-button justify-center">View Projects</a>
            <a href="/resume.pdf" className="secondary-button justify-center" download>
              <FiDownload />
              Download Resume
            </a>
            <a href="#contact" className="secondary-button justify-center">
              <FiMail />
              Contact Me
            </a>
          </motion.div>

          <motion.div className="mt-8 flex gap-3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.58 }}>
            {socials.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} className="icon-button h-12 w-12" target="_blank" rel="noreferrer" aria-label={label}>
                <Icon />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.92, rotateX: 12 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 0.9, delay: 0.28 }}
        >
          <div className="dashboard-panel">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.26em] text-slate-400">Insight Engine</p>
                <h3 className="font-display text-2xl font-semibold text-paper">Portfolio OS</h3>
              </div>
              <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">Live</span>
            </div>
            <div className="grid gap-4">
              {['Python Models', 'SQL Pipelines', 'Power BI Dashboards', 'React Interfaces'].map((item, index) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="mb-3 flex justify-between text-sm">
                    <span className="font-semibold text-slate-200">{item}</span>
                    <span className="text-neon">{82 + index * 4}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.span
                      className="block h-full rounded-full bg-gradient-to-r from-neon to-violet"
                      initial={{ width: 0 }}
                      animate={{ width: `${82 + index * 4}%` }}
                      transition={{ duration: 1.1, delay: 0.7 + index * 0.12 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a href="#about" className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-neon" aria-label="Scroll down">
        <FiArrowDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  );
}
