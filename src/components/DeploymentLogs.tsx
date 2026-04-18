import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Shield, Zap, CheckCircle2 } from "lucide-react";

const logs = [
  "Initializing cloud environment...",
  "Applying Terraform configs...",
  "Docker image pushed to ECR",
  "Kubernetes pod: dhritiraj-portfolio running",
  "Security audit: 0 vulnerabilities found",
  "Optimizing asset delivery via CDN",
  "SSL Certificates active",
  "CI/CD Pipeline: Success",
  "Monitoring stats: Healthy",
];

const DeploymentLogs = () => {
  const [currentLog, setCurrentLog] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentLog((prev) => (prev + 1) % logs.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden lg:block pointer-events-none">
      <div className="glass px-4 py-3 rounded-2xl flex items-center gap-4 min-w-[280px]">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Zap size={20} className="animate-pulse" />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary/60">
              System Status
            </span>
            <div className="h-1 w-1 rounded-full bg-green-500 animate-ping" />
          </div>
          <div className="h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentLog}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-xs font-mono text-foreground/80 truncate"
              >
                {logs[currentLog]}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeploymentLogs;
