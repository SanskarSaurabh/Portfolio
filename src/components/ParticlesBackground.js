import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { useCallback, useMemo } from 'react';

export default function ParticlesBackground() {
  const init = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const options = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: 'transparent' },
      fpsLimit: 60,
      particles: {
        number: { value: 70, density: { enable: true, area: 900 } },
        color: { value: ['#38bdf8', '#8b5cf6', '#f8fafc'] },
        links: { enable: true, color: '#38bdf8', opacity: 0.16, distance: 150 },
        move: { enable: true, speed: 0.45, outModes: 'bounce' },
        opacity: { value: { min: 0.18, max: 0.7 } },
        size: { value: { min: 1, max: 3 } },
      },
      interactivity: {
        events: { onHover: { enable: true, mode: 'repulse' }, resize: true },
        modes: { repulse: { distance: 120, duration: 0.4 } },
      },
      detectRetina: true,
    }),
    []
  );

  return <Particles id="tsparticles" className="absolute inset-0" init={init} options={options} />;
}
