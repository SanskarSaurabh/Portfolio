import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1350);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center bg-night"
          exit={{ opacity: 0, transition: { duration: 0.55 } }}
        >
          <motion.div
            className="relative h-28 w-28"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <span className="absolute inset-0 rounded-full border border-neon/30" />
            <motion.span
              className="absolute inset-3 rounded-full border-2 border-transparent border-t-neon border-r-violet"
              animate={{ rotate: 360 }}
              transition={{ duration: 1.1, repeat: Infinity, ease: 'linear' }}
            />
            <span className="absolute inset-0 grid place-items-center font-display text-xl font-bold text-paper">DA</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
