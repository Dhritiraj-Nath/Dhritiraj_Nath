import { motion, useScroll } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Magnetic from "./Magnetic";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Moving Gradient Mesh Background (Integrated into Background3DEffect mostly, but keeping subtle blobs here) */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" />
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" />
      </div>

      <div className="container px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
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
              Hi, I am <span className="text-gradient hover:text-shimmer transition-all">Dhritiraj</span> <br />
              <span className="text-shimmer">Welcome to my portfolio</span>
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
            <Magnetic>
              <a
                href="#projects"
                className="group relative px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold overflow-hidden flex items-center gap-2"
              >
                <span>View Projects</span>
                <ArrowRight className="transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" size={20} />
              </a>
            </Magnetic>
            <Magnetic>
              <a
                href="#contact"
                className="px-8 py-4 rounded-xl border border-border bg-background hover:bg-secondary transition-colors font-semibold"
              >
                Contact Me
              </a>
            </Magnetic>
            <a
              href="/Dhritiraj_Nath_Resume.pdf"
              download
              className="px-8 py-4 rounded-xl border border-primary/20 bg-primary/5 hover:bg-primary/10 transition-all font-semibold flex items-center gap-2 group"
            >
              <span>Download CV</span>
              <ArrowRight className="transition-all duration-300 group-hover:translate-x-1 group-hover:rotate-90 group-hover:scale-110" size={18} />
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
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.3, 1, 0.3]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 2,
            ease: "easeInOut"
          }}
          className="relative flex items-center justify-center"
        >
          <ChevronDown size={28} className="text-primary" />
          <motion.div 
            animate={{ 
              scale: [1, 2, 1], 
              opacity: [0.5, 0, 0.5] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
            className="absolute w-8 h-8 bg-primary/20 rounded-full blur-md"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;