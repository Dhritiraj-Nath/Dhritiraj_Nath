import { motion } from "framer-motion";

const education = [
  {
    institution: "The Assam Kaziranga University",
    degree: "B.Tech in Computer Science Engineering",
    score: "2024 – Present",
  },
  {
    institution: "Jatiya Vidyalaya Sipajhar",
    degree: "Secondary Education (10th)",
    score: "Grade: 93%",
  },
];

const certifications = [
  "Learn by Doing - Prompt Engineering 101 (KodeKloud)",
  "Deloitte Australia - Data Analytics Job Simulation",
  "Google Cloud Generative AI (Google Cloud Skills Boost)",
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-sm tracking-widest uppercase text-primary mb-2">Background</p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-12">Education & Certifications</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <div className="space-y-5">
            <h3 className="font-mono text-sm text-primary mb-4">Education</h3>
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-xl p-6 hover-lift"
              >
                <h4 className="font-semibold text-foreground">{edu.institution}</h4>
                <p className="text-sm text-muted-foreground mt-1">{edu.degree}</p>
                <span className="inline-block mt-2 font-mono text-xs px-2 py-1 rounded bg-primary/10 text-primary">
                  {edu.score}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-mono text-sm text-primary mb-4">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glass rounded-xl p-6 hover-lift flex items-center gap-4"
                >
                  <span className="text-primary text-lg">✦</span>
                  <span className="text-foreground">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
