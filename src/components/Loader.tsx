import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoaderProps {
  key?: string;
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 400); // Small delay after 100% for smooth exit
          return 100;
        }
        return prev + 1;
      });
    }, 12);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white font-sans overflow-hidden bg-dot-pattern">
      {/* Sleek subtle linear gradient glowing line at the top */}
      <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>

      <div className="relative flex flex-col items-center max-w-lg px-6 text-center z-10">
        {/* Futuristic Minimal Tech Emblem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8 flex items-center justify-center w-16 h-16 rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl"
        >
          {/* Subtle breathing light dot */}
          <div className="absolute w-3 h-3 bg-blue-500 rounded-full blur-md animate-pulse"></div>
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="absolute inset-0 rounded-2xl border border-white/5 animate-ping opacity-30"></div>
        </motion.div>

        {/* Company Name */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.2em" }}
          animate={{ opacity: 1, letterSpacing: "0.3em" }}
          transition={{ duration: 1 }}
          className="text-2xl font-bold tracking-[0.3em] uppercase text-white font-sans"
        >
          Jasmine Advisory
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-3 text-[10px] tracking-[0.25em] uppercase text-zinc-400 font-mono"
        >
          Global Commodities • Algorithmic Supply Pipeline
        </motion.p>

        {/* Dynamic Modern Progress Line */}
        <div className="mt-12 w-48 h-[1px] bg-zinc-800 relative">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-white"
            style={{ width: `${progress}%` }}
          ></motion.div>
        </div>

        {/* Progress Percentage */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          className="mt-3 font-mono text-[9px] tracking-wider text-zinc-500 uppercase"
        >
          Loading core engine — {progress}%
        </motion.div>
      </div>

      {/* Modern, clean bottom text */}
      <div className="absolute bottom-8 font-mono text-[9px] tracking-[0.2em] text-zinc-600 uppercase">
        ESTABLISHED 2026 • SECURITY ENCRYPTED
      </div>
    </div>
  );
}
