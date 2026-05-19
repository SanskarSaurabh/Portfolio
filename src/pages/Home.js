import About from '../components/About';
import Contact from '../components/Contact';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Services from '../components/Services';
import Skills from '../components/Skills';
import Testimonials from '../components/Testimonials';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Services />
      <Testimonials />
      <Contact />
    </>
  );
}
