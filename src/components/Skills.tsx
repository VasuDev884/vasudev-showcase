import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "MongoDB", items: ["Mongoose ODM", "Aggregation Pipelines", "Indexing", "Atlas Cloud", "Schema Design"] },
  { title: "Express.js", items: ["REST API Design", "Middleware", "MVC Architecture", "Rate Limiting", "Joi Validation"] },
  { title: "React.js", items: ["Hooks", "Redux Toolkit", "RTK Query", "React Router", "Memoization"] },
  { title: "Node.js", items: ["Async/Await", "JWT Auth", "bcrypt", "Multer", "Socket.io"] },
  { title: "Frontend", items: ["TypeScript", "JavaScript ES6+", "Tailwind CSS", "Framer Motion", "GSAP"] },
  { title: "Testing & Tools", items: ["Jest", "Supertest", "Docker", "AWS", "GitHub Actions", "Vite"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Technologies I work with."
      description="The full MERN stack — from MongoDB schema design to polished React interfaces — with testing and DevOps baked in."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass glass-hover rounded-2xl p-6"
          >
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-4">
              {g.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="rounded-full border border-border bg-background/40 px-3 py-1.5 text-xs text-foreground/90"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
