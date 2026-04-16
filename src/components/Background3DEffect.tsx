import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import GravityParticles from "./GravityParticles";

const Background3DEffect = () => {
  const [elements, setElements] = useState<{ id: number; x: number; y: number; size: number; duration: number }[]>([]);

  useEffect(() => {
    const newElements = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 2,
      duration: Math.random() * 20 + 10,
    }));
    setElements(newElements);
  }, []);

  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
      <GravityParticles />
      
      {/* 3D Perspective Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(to right, #888 1px, transparent 1px), linear-gradient(to bottom, #888 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
          perspective: '1000px',
          transform: 'rotateX(60deg) translateY(-20%)',
          transformOrigin: 'top',
        }}
      />

      {/* Floating 3D Particles */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            y: ["0%", "100%"],
            x: [`${el.x}%`, `${el.x + (Math.random() * 10 - 5)}%`],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute rounded-full bg-primary/20 blur-[1px]"
          style={{
            width: el.size,
            height: el.size,
            left: `${el.x}%`,
            top: `-5%`,
          }}
        />
      ))}

      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full" />
    </div>
  );
};

export default Background3DEffect;
