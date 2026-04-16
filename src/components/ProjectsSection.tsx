import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { Github, Globe, Box, Server, Cpu, Database, Cloud, Terminal, Laptop } from "lucide-react";

const projects = [
  {
    title: "AI Agent Landing Page 🚀",
    icon: Laptop,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    points: [
      "High-performance, modern landing page featuring interactive AI-themed UI components.",
      "Sophisticated animations and glassmorphic design systems for a premium user experience.",
      "Optimized for SEO and performance with a perfect balance of aesthetics and speed."
    ],
    github: "https://github.com/Dhritiraj-Nath/agent-landing-page"
  },
  {
    title: "AWS Resource Tracker ☁️",
    icon: Cloud,
    tech: ["Bash", "AWS CLI", "Automation"],
    points: [
      "Professional shell-based automation tool monitoring EC2, S3, Lambda, and IAM users.",
      "Automated scheduling and reporting system designed for cloud-native infrastructure.",
      "Efficient resource tracking that reduces manual overhead and prevents resource leakage."
    ],
    github: "https://github.com/Dhritiraj-Nath/Aws_Resource_Tracker"
  },
  {
    title: "Terraform Cloud Infrastructure 🏗️",
    icon: Server,
    tech: ["Terraform", "HCL", "AWS", "IaC"],
    points: [
      "Comprehensive Infrastructure as Code (IaC) repository for automated cloud provisioning.",
      "Automated deployment of VPCs, Subnets, and EC2 instances emphasizing security best practices.",
      "Modular HCL design for high scalability and rapid production environment setup."
    ],
    github: "https://github.com/Dhritiraj-Nath/Terraform_Assignments"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Decorative Grid Background */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-primary/5 blur-[100px] rounded-full" />
      
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-sm tracking-widest uppercase text-primary mb-4 block">Selected Works</span>
          <h2 className="text-4xl md:text-5xl font-bold font-syne">Featured <span className="text-gradient">Projects</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <TiltCard>
                <div className="glass rounded-2xl p-8 h-full flex flex-col group relative overflow-hidden">
                  {/* Icon & Links */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary group-hover:scale-110 transition-transform">
                      <project.icon size={28} />
                    </div>
                    <div className="flex gap-4 text-muted-foreground">
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary transition-colors flex items-center gap-1"
                        title="View Github Repo"
                      >
                        <Github size={24} />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[10px] font-mono font-bold px-2 py-0.5 rounded border border-primary/20 bg-primary/5 text-primary">
                        {t}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="space-y-3 flex-grow">
                    {project.points.map((p, j) => (
                      <li key={j} className="text-sm text-muted-foreground flex gap-3 leading-relaxed">
                        <span className="text-primary font-bold mt-1 shrink-0">→</span>
                        {p}
                      </li>
                    ))}
                  </ul>

                  {/* Visual Decoration */}
                  <div className="absolute -bottom-1 -right-1 w-24 h-24 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
