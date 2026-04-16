import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

const experiences = [
  {
    role: "Cloud Market Strategist Intern",
    organization: "Devmonk",
    description:
      "Spearheading technical market research and strategic positioning for cloud-native security solutions. Bridging the gap between engineering and market needs by analyzing AI-driven automation trends and cloud security vulnerabilities to enhance product visibility and developer engagement.",
    type: "Internship",
    period: "March 2026 – Present",
  },
  {
    role: "NSS Volunteer",
    organization: "National Service Scheme (NSS)",
    description:
      "Volunteered in local villages, contributing to community service and awareness programs.",
    type: "Volunteering",
    period: "Previous",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-primary mb-2">
            Journey
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-syne mb-12">Experience</h2>
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 space-y-10">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="relative pl-8"
            >
              <span className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background z-10" />

              <TiltCard>
                <div className="glass rounded-xl p-6 h-full">
                  <span className="inline-block font-mono text-xs px-2 py-1 rounded bg-primary/10 text-primary mb-3">
                    {exp.type}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-primary/80 font-medium mt-1">
                    {exp.organization} • {exp.period}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
