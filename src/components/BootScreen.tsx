import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BootScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);

  const logs = [
    "> INITIATING BOOT SEQUENCE",
    "> LOADING KERNEL MODULES",
    "> MOUNTING CLOUD VOLUMES",
    "> STARTING DOCKER DAEMON",
    "> CONNECTING TO KUBERNETES CLUSTER",
    "> SYNCING TERRAFORM STATE",
    "> ESTABLISHING SECURE TUNNEL",
    "> DEPLOYING DHRITIRAJ_PORTFOLIO_V2",
    "> ACCESS GRANTED",
  ];

  useEffect(() => {
    const duration = 2500;
    const interval = 30;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + increment;
      });

      setLogIndex((prev) => Math.min(Math.floor((progress / 100) * logs.length), logs.length - 1));
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete, progress, logs.length]);

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.1 }}
      className="fixed inset-0 z-[9999] bg-[#050505] flex flex-col items-center justify-center p-6 text-primary font-mono"
    >
      <div className="w-full max-w-md">
        <div className="flex justify-between mb-2">
          <span className="text-xs uppercase tracking-widest opacity-70">Booting dhritiraj.sys</span>
          <span className="text-xs">{Math.round(progress)}%</span>
        </div>
        
        <div className="h-[2px] w-full bg-primary/10 rounded-full mb-8 overflow-hidden">
          <motion.div 
            className="h-full bg-primary shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>

        <div className="space-y-1 h-32 overflow-hidden">
          {logs.slice(0, logIndex + 1).map((log, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-[10px] sm:text-xs tracking-tighter"
            >
              {log}
            </motion.p>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-10 text-[10px] opacity-30 uppercase tracking-[0.5em]">
        Dhritir Nath // Portfolio 2026
      </div>
    </motion.div>
  );
};

export default BootScreen;
