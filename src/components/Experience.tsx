import { motion } from "framer-motion";
import { Section } from "./Section";

const jobs = [
  {
    company: "Coursi Academy",
    role: "Frontend Engineer",
    period: "Nov 2023 — Present",
    bullets: [
      "Built scalable React + Next.js applications powering core learning platform.",
      "Created an internal reusable component library used across 4 products.",
      "Implemented SSR + SEO optimization, lifting organic reach significantly.",
      "Improved performance by 30% via code-splitting and Core Web Vitals tuning.",
    ],
  },
  {
    company: "UpMyRanks",
    role: "Frontend Developer · Team Lead",
    period: "Sep 2022 — Oct 2023",
    bullets: [
      "Led a team of 5 developers across feature delivery and code reviews.",
      "Built a high-performance SPA with Redux Toolkit and modular architecture.",
      "Migrated legacy stack to Next.js for SSR and improved SEO.",
      "Increased user engagement by 25% through UX and perf improvements.",
    ],
  },
];

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've shipped."
      description="Production roles where I owned features end-to-end and delivered measurable business outcomes."
    >
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
        <div className="space-y-12">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6 h-4 w-4 rounded-full bg-primary glow-primary" />
              <div className="pl-12 md:pl-0 md:pr-12 md:text-right">
                <div className="text-xs font-mono uppercase tracking-widest text-primary">
                  {job.period}
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mt-2">{job.company}</h3>
                <div className="text-muted-foreground">{job.role}</div>
              </div>
              <div className="pl-12 md:pl-12">
                <ul className="space-y-3 text-muted-foreground">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm leading-relaxed">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
