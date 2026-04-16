import { motion, useScroll, useVelocity, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, ChevronDown, Binary, Box, Cloud, Cpu, Database, Network } from "lucide-react";

const techIcons = [
  { Icon: Cloud, color: "text-blue-500", top: "15%", left: "10%" },
  { Icon: Box, color: "text-cyan-500", top: "25%", left: "85%" },
  { Icon: Cpu, color: "text-purple-500", top: "65%", left: "15%" },
  { Icon: Database, color: "text-indigo-500", top: "75%", left: "80%" },
  { Icon: Network, color: "text-pink-500", top: "40%", left: "75%" },
  { Icon: Binary, color: "text-emerald-500", top: "10%", left: "70%" },
];

const HeroSection = () => {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [isFalling, setIsFalling] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    return scrollVelocity.onChange((v) => {
      if (Math.abs(v) > 2000 && !isFalling) {
        setIsFalling(true);
        if ("vibrate" in navigator) {
          navigator.vibrate([100, 50, 100]);
        }
        
        // After 3 seconds, reset the icons
        setTimeout(() => {
          setIsFalling(false);
        }, 4000);
      }
    });
  }, [scrollVelocity, isFalling]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Moving Gradient Mesh Background */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Falling/Floating Tech Icons */}
      {techIcons.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 0, rotate: 0 }}
          animate={isFalling ? {
            y: ["0vh", "80vh"],
            x: [0, (Math.random() - 0.5) * 100],
            rotate: [0, Math.random() * 360],
            opacity: 1,
            scale: 1
          } : {
            opacity: [0.2, 0.5, 0.2],
            y: [0, -40, 0],
            rotate: [0, 10, -10, 0],
            scale: 1,
            x: 0,
          }}
          transition={isFalling ? {
            duration: 1.2,
            ease: "bounceOut",
            delay: i * 0.05
          } : {
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className={`absolute -z-10 ${item.color} hidden md:block`}
          style={{ top: item.top, left: item.left }}
        >
          <div className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl">
            <item.Icon size={32} />
          </div>
        </motion.div>
      ))}

      <div className="container px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Reset Message */}
          {isFalling && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute -top-12 left-1/2 -translate-x-1/2 text-xs font-mono text-primary/60 uppercase tracking-widest whitespace-nowrap"
            >
              Whoops! Scroll power overloading physics engine...
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative inline-block group"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-primary blur-3xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full" />
            
            <div 
              onMouseEnter={() => {
                window.speechSynthesis.cancel();
                const utterance = new SpeechSynthesisUtterance("Hey! What's up?");
                const voices = window.speechSynthesis.getVoices();
                const maleVoice = voices.find(v => (v.name.includes("Male") || v.name.includes("David") || v.name.includes("Google US English")) && !v.name.includes("Female")) || voices[0];
                if (maleVoice) utterance.voice = maleVoice;
                utterance.rate = 1.0; 
                utterance.pitch = 0.7;
                utterance.volume = 1.0;
                window.speechSynthesis.speak(utterance);
              }}
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-primary/20 p-2 glass overflow-hidden cursor-pointer"
            >
              <img 
                src="/profile.jpg" 
                alt="Dhritiraj Nath" 
                className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center bg-background rounded-full border border-primary/50 text-primary shadow-lg shadow-primary/20"
            >
              🎓
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase text-primary bg-primary/10 rounded-full border border-primary/20">
              Cloud Computing & DevOps • CS Student
            </span>
            <h1 className="text-5xl md:text-7xl font-bold font-syne tracking-tight mb-6">
              Hi, I am <span className="text-gradient">Dhritiraj</span> <br />
              Welcome to my portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
              Linux Enthusiast & Open Source Contributor. I bridge development and operations through automation with Docker, Kubernetes, and Kubernetes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold overflow-hidden flex items-center gap-2"
            >
              <span>View Projects</span>
              <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-border bg-background hover:bg-secondary transition-colors font-semibold"
            >
              Contact Me
            </a>
            <a
              href="/Dhritiraj_Nath_Resume.pdf"
              download
              className="px-8 py-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all font-semibold flex items-center gap-2 group"
            >
              <span>Download CV</span>
              <ArrowRight className="transition-transform group-hover:rotate-90" size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground"
      >
        <span className="text-xs font-mono uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;