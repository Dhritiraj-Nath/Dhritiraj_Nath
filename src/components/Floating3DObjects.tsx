import React from "react";
import { motion } from "framer-motion";

const GeometricShape = ({ delay = 0, size = "w-12 h-12", color = "bg-primary/20", shape = "rounded-lg", top = "10%", left = "10%", rotate = true }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, rotateY: 0, rotateX: 0 }}
      animate={{ 
        opacity: [0, 0.4, 0],
        scale: [1, 1.2, 1],
        rotateY: rotate ? [0, 180, 360] : 0,
        rotateX: rotate ? [0, 180, 360] : 0,
        y: ["-20px", "20px", "-20px"],
        x: ["-10px", "10px", "-10px"]
      }}
      transition={{ 
        duration: 8, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute ${size} ${color} ${shape} blur-[1px] -z-30 pointer-events-none`}
      style={{ 
        top, 
        left,
        transformStyle: "preserve-3d",
        boxShadow: "0 0 20px rgba(0,0,0,0.1), inset 0 0 10px rgba(255,255,255,0.2)"
      }}
    >
      {/* 3D Sides realization with CSS (Simplified) */}
      <div className="absolute inset-0 bg-white/10 rounded-inherit border border-white/20 translate-z-[10px]" />
      <div className="absolute inset-0 bg-black/5 rounded-inherit border border-white/5 translate-z-[-10px]" />
    </motion.div>
  );
};

const Floating3DObjects = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-30">
      <GeometricShape top="15%" left="5%" size="w-16 h-16" delay={0} />
      <GeometricShape top="65%" left="12%" size="w-20 h-20" color="bg-secondary/20" delay={2} shape="rounded-full" />
      <GeometricShape top="25%" left="85%" size="w-12 h-12" color="bg-primary/20" delay={1} rotate={false} />
      <GeometricShape top="75%" left="75%" size="w-24 h-24" color="bg-accent/20" delay={4} />
      <GeometricShape top="40%" left="80%" size="w-14 h-14" color="bg-primary/30" delay={3} shape="rounded-full" />
      <GeometricShape top="10%" left="70%" size="w-10 h-10" color="bg-secondary/30" delay={5} />
      
      {/* Floating Rings */}
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[40%] aspect-square border-[1px] border-primary/10 rounded-full"
      />
      <motion.div 
        animate={{ rotate: -360 }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] aspect-square border-[1px] border-secondary/10 rounded-full"
      />
    </div>
  );
};

export default Floating3DObjects;
