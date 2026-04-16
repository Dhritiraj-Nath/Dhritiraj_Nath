import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CursorFollower = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fast spring for the core dot
  const dotConfig = { damping: 30, stiffness: 250 };
  const dotX = useSpring(mouseX, dotConfig);
  const dotY = useSpring(mouseY, dotConfig);

  // Slower, trailing spring for the halo ring
  const haloConfig = { damping: 20, stiffness: 100 };
  const haloX = useSpring(mouseX, haloConfig);
  const haloY = useSpring(mouseY, haloConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
      
      const target = e.target as HTMLElement;
      setIsHovering(target.closest("a, button, [role='button']") !== null);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Halo Ring (Trailing) */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] hidden md:block"
        style={{
          x: haloX,
          y: haloY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ 
            scale: isHovering ? 1.5 : 1,
            borderColor: isHovering ? "rgb(168, 85, 247)" : "rgba(168, 85, 247, 0.3)",
            borderWidth: isHovering ? "2px" : "1px"
          }}
          className="w-full h-full rounded-full border border-primary/30"
        />
      </motion.div>

      {/* Main Core Dot (Fast) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 pointer-events-none z-[9999] hidden md:block"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{ 
            scale: isHovering ? 0 : 1,
            opacity: isHovering ? 0 : 1
          }}
          className="w-full h-full rounded-full bg-primary"
        />
      </motion.div>
    </>
  );
};

export default CursorFollower;
