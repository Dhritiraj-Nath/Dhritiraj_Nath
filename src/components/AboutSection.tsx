import { motion } from "framer-motion";
import { Code, Globe, Shield, Terminal, Download, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-sm tracking-widest uppercase text-primary mb-4 block">Personal Persona</span>
            <h2 className="text-4xl md:text-6xl font-bold font-syne mb-8">
              Architecting <br />
              <span className="text-gradient">Scalable Systems</span>
            </h2>
            
            <p className="text-xl text-foreground font-medium mb-6 leading-relaxed">
              I am a B.Tech CSE student at The Assam Kaziranga University, deeply exploring Cloud Native ecosystems and DevSecOps.
            </p>
            
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-xl">
              Based in Jorhat, Assam, I focus on the intersection of infrastructure and software. My mission is to build systems that aren't just redundant, but resilient and secure by design.
            </p>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className="px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center gap-2 hover:shadow-2xl hover:shadow-primary/40 transition-all hover:-translate-y-1 group"
              >
                Let's Collaborate <ArrowRight size={20} className="transition-transform group-hover:translate-x-1.5" />
              </a>
              <a 
                href="/Dhritiraj_Nath_Resume.pdf" 
                download 
                className="px-8 py-4 glass text-foreground rounded-2xl font-bold flex items-center gap-2 hover:bg-white/10 transition-all cursor-pointer"
              >
                Download CV <Download size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="glass p-6 rounded-3xl aspect-square flex flex-col justify-between group overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                   <Terminal className="text-primary" size={32} />
                   <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-1">Linux</h4>
                    <p className="text-xs text-muted-foreground">My primary workspace and daily driver.</p>
                   </div>
                </div>
                <div className="glass p-6 rounded-3xl bg-primary/5">
                   <Shield className="text-primary mb-4" size={32} />
                   <h4 className="font-bold text-lg mb-1">Security</h4>
                   <p className="text-xs text-muted-foreground">Hardening infrastructure at every layer.</p>
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="glass p-6 rounded-3xl">
                   <Globe className="text-primary mb-4" size={32} />
                   <h4 className="font-bold text-lg mb-1">Cloud</h4>
                   <p className="text-xs text-muted-foreground">Deploying globally across AWS & Azure.</p>
                </div>
                <div className="glass p-6 rounded-3xl aspect-square flex flex-col justify-between group overflow-hidden relative">
                   <div className="absolute inset-0 bg-primary/5 -translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                   <Code className="text-primary" size={32} />
                   <div className="relative z-10">
                    <h4 className="font-bold text-lg mb-1">DevOps</h4>
                    <p className="text-xs text-muted-foreground">Automating workflows with Kubernetes.</p>
                   </div>
                </div>
              </div>
            </div>
            
            {/* Visual background element */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-primary/20 blur-[80px] rounded-full animate-pulse" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
