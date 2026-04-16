import { motion } from "framer-motion";
import profileImg from "@/assets/profile.jpeg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="font-mono text-sm tracking-widest uppercase text-muted-foreground mb-4">
            DevOps & Cloud Engineer
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Hi, I'm{" "}
            <span className="text-gradient">Dhritiraj</span>
            <br />
            Nath
          </h1>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8">
            B.Tech CSE student passionate about containerization, cloud infrastructure, and building scalable systems with modern DevOps practices.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-secondary transition-colors"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30 hero-glow">
            <img src={profileImg} alt="Dhritiraj Nath" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -bottom-3 -right-3 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
