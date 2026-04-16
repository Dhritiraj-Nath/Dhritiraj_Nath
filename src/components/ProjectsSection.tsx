import { motion } from "framer-motion";

const projects = [
  {
    title: "Containerized MERN Stack Application",
    tech: ["Docker", "Docker Compose", "React", "Node.js", "MongoDB"],
    points: [
      "Orchestrated multi-container deployment with Docker Compose for a 3-tier MERN stack.",
      "Implemented data persistence with Docker Volumes and secure Bridge Network communication.",
      "Optimized image builds with efficient Dockerfiles and layer caching.",
    ],
  },
  {
    title: "AWS Resource Monitoring & Alerting",
    tech: ["AWS CLI", "Bash", "SMTP", "Cron"],
    points: [
      "Built an AWS Resource Tracker monitoring EC2, S3, Lambda, and IAM users.",
      "Automated reporting with cron jobs and real-time email notifications via SMTP.",
    ],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-primary mb-2">Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Featured Projects</h2>
        </motion.div>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-xl p-8 hover-lift"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span key={t} className="font-mono text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                    {t}
                  </span>
                ))}
              </div>
              <ul className="space-y-2">
                {project.points.map((p, j) => (
                  <li key={j} className="text-muted-foreground text-sm flex gap-2">
                    <span className="text-primary mt-1">▹</span>
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
