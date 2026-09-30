import { motion } from "framer-motion";
import { Section } from "./Section";

const jobs = [
  {
    company: "B4T (Buddy For Travel)",
    role: "Full Stack Developer",
    period: "Jun 2026 — Present",
    bullets: [
      "Own full-stack delivery across the consumer website (Nuxt 3/Vue) and native mobile apps (React Native + Flutter).",
      "Maintain the core Consumer API (Node.js/Express) powering auth, bookings, wallets, matching, payments, and notifications.",
      "Built a RAG-based AI support chat (FastAPI + pgvector) with a Next.js admin UI.",
      "Manage cross-service infrastructure — PostgreSQL, MongoDB, Redis, and a self-hosted WhatsApp API on Google Cloud Run.",
    ],
  },
  {
    company: "Coursi Academy",
    role: "MERN Stack Developer",
    period: "Nov 2023 — Present",
    bullets: [
      "Shipped full-stack features end-to-end — React + TypeScript frontend, Node/Express REST APIs, MongoDB with Mongoose.",
      "Designed RESTful APIs with JWT auth, role-based access (Teacher / Student / Parent), and rate limiting.",
      "Achieved 30% performance improvement via MongoDB indexing and query optimization.",
      "Deployed on AWS EC2 with Docker, Nginx, and GitHub Actions CI/CD — zero production regressions.",
    ],
  },
  {
    company: "UpMyRanks",
    role: "React Frontend Developer",
    period: "Sep 2022 — Oct 2023",
    bullets: [
      "Shipped production React features for a B2B SaaS dashboard — reusable components, custom hooks, Redux state management.",
      "Built dynamic data tables with filters across multi-role admin panels.",
      "Resolved UI bugs with root-cause fixes using Chrome DevTools and Lighthouse — no regression patches.",
      "Delivered 25% engagement increase across mobile and desktop.",
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
              viewport={{ once: true }}
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
