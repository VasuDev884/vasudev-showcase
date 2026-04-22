import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code2, Gauge, Layers } from "lucide-react";

const pillars = [
  { icon: Gauge, title: "Performance First", text: "Core Web Vitals optimization, code-splitting, lazy loading — 30% measured uplift in production." },
  { icon: Layers, title: "Scalable Architecture", text: "Reusable component libraries, design systems, and SSR with Next.js for SEO-critical apps." },
  { icon: Code2, title: "End-to-End Ownership", text: "From Figma handoff to deployment — REST integrations, JWT auth, CI/CD with GitHub Actions." },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building fast, scalable interfaces."
      description="Frontend Engineer with 3+ years of production experience crafting web and mobile applications that combine pixel-perfect design with measurable business impact. I own the full lifecycle — concept, architecture, code, and deployment."
    >
      <div className="grid md:grid-cols-3 gap-6">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="glass glass-hover rounded-2xl p-8"
          >
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <p.icon className="h-6 w-6" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
