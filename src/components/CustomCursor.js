import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring || window.matchMedia('(pointer: coarse)').matches) return undefined;

    const moveDot = gsap.quickTo(dot, 'x', { duration: 0.16, ease: 'power3.out' });
    const moveDotY = gsap.quickTo(dot, 'y', { duration: 0.16, ease: 'power3.out' });
    const moveRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const moveRingY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    const onMove = (event) => {
      moveDot(event.clientX);
      moveDotY(event.clientY);
      moveRing(event.clientX);
      moveRingY(event.clientY);
    };

    const onEnter = () => gsap.to(ring, { scale: 1.65, borderColor: '#8b5cf6', duration: 0.25 });
    const onLeave = () => gsap.to(ring, { scale: 1, borderColor: '#38bdf8', duration: 0.25 });

    window.addEventListener('mousemove', onMove);
    document.querySelectorAll('a, button, input, textarea').forEach((node) => {
      node.addEventListener('mouseenter', onEnter);
      node.addEventListener('mouseleave', onLeave);
    });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.querySelectorAll('a, button, input, textarea').forEach((node) => {
        node.removeEventListener('mouseenter', onEnter);
        node.removeEventListener('mouseleave', onLeave);
      });
    };
  }, []);

  return (
    <>
      <span ref={ringRef} className="cursor-ring" />
      <span ref={dotRef} className="cursor-dot" />
    </>
  );
}
