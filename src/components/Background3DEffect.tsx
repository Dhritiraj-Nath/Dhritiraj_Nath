import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import GravityParticles from "./GravityParticles";
import Floating3DObjects from "./Floating3DObjects";

const Background3DEffect = () => {
  const { scrollYProgress } = useScroll();
  const [elements, setElements] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  // Parallax transforms for "sliding" effect
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const glow1Y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const glow2Y = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);

  useEffect(() => {
    const newElements = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      duration: Math.random() * 25 + 15,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <GravityParticles />
      <Floating3DObjects />
      
      {/* 3D Perspective Grid with Parallax Sliding */}
      <motion.div 
        className="absolute inset-x-0 top-0 bottom-[-50%] opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          perspective: '1500px',
          transform: 'rotateX(60deg)',
          transformOrigin: 'top',
          y: gridY
        }}
      />

      {/* Dynamic Floating Elements */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.4, 0.1],
            y: ["0vh", "110vh"],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.id * 0.2
          }}
          className="absolute rounded-full bg-primary/20 blur-[2px]"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `-10vh`,
          }}
        />
      ))}

      {/* Background Glows with Parallax */}
      <motion.div 
        style={{ y: glow1Y }}
        className="absolute top-1/4 -left-40 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full" 
      />
      <motion.div 
        style={{ y: glow2Y }}
        className="absolute bottom-1/4 -right-40 w-[800px] h-[800px] bg-secondary/10 blur-[150px] rounded-full" 
      />
      
      {/* Vignette Overlay */}
      <div 
        className="absolute inset-0" 
        style={{ background: 'radial-gradient(circle at center, transparent 0%, transparent 70%, hsl(var(--background) / 0.4) 100%)' }}
      />
    </div>
  );
};

export default Background3DEffect;
