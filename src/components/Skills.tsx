import { motion } from "framer-motion";
import { Section } from "./Section";

const groups = [
  { title: "Frontend", items: ["React.js", "Next.js", "TypeScript", "React Native"] },
  { title: "State", items: ["Redux Toolkit", "Context API"] },
  { title: "UI / UX", items: ["Tailwind CSS", "Material UI", "Responsive Design", "Figma"] },
  { title: "Backend & APIs", items: ["REST APIs", "Axios", "JWT Auth"] },
  { title: "Performance", items: ["Code Splitting", "Lazy Loading", "Core Web Vitals"] },
  { title: "Tools", items: ["Vite", "Webpack", "Git", "GitHub Actions", "Jest"] },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolkit"
      title="Technologies I work with."
      description="A curated stack focused on shipping production-quality React apps with performance and DX baked in."
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
