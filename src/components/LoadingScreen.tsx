import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ['Design', 'Create', 'Inspire'];

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const rafRef = useRef<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startTimeRef = useRef<number | null>(null);

  // RAF counter: 000 → 100 over 2700ms
  useEffect(() => {
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      const elapsed = timestamp - startTimeRef.current;
      const newCount = Math.min(100, Math.floor((elapsed / 2700) * 100));
      setCount(newCount);

      if (newCount >= 100) {
        setTimeout(onComplete, 400);
        return;
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [onComplete]);

  // Word rotation every 900ms
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900);

    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] bg-bg flex items-center justify-center">
      {/* Top-left: Portfolio label */}
      <motion.span
        className="absolute top-8 left-8 md:top-12 md:left-12 text-xs text-muted uppercase tracking-[0.3em]"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Portfolio
      </motion.span>

      {/* Center: Rotating words */}
      <div className="flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={wordIndex}
            className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/80"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {words[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Bottom-right: Counter */}
      <span className="absolute bottom-8 right-8 md:bottom-12 md:right-12 text-6xl md:text-8xl lg:text-9xl font-display italic text-text-primary tabular-nums">
        {String(count).padStart(3, '0')}
      </span>

      {/* Bottom progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-stroke/50">
        <div
          className="h-full accent-gradient"
          style={{
            transform: `scaleX(${count / 100})`,
            transformOrigin: 'left',
            boxShadow: '0 0 8px rgba(137, 170, 204, 0.35)',
          }}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
