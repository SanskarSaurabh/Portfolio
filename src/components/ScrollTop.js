import { useEffect, useState } from 'react';
import { FiArrowUp } from 'react-icons/fi';

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a href="#home" className={`scroll-top ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`} aria-label="Back to top">
      <FiArrowUp />
    </a>
  );
}
