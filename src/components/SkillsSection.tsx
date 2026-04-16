import { motion } from "framer-motion";

const skills = [
  { category: "Containerization", items: ["Docker", "Kubernetes", "Docker Compose"] },
  { category: "Cloud & DevOps", items: ["AWS", "Terraform", "Ansible", "Cloud Security"] },
  { category: "AI & Data", items: ["Prompt Engineering", "Tableau", "Spreadsheets", "Data Analysis"] },
  { category: "Programming", items: ["Java", "Shell Scripting", "Spring Boot", "DSA"] },
  { category: "Version Control", items: ["Git", "GitHub"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-primary mb-2">Expertise</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">Skills & Tools</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass rounded-xl p-6 hover-lift"
            >
              <h3 className="font-mono text-sm text-primary mb-4">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
