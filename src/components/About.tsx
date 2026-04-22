import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "./Section";
import { Code2, Gauge, Layers } from "lucide-react";
import portrait from "@/assets/portrait.jpg";

const pillars = [
  { icon: Gauge, title: "Performance First", text: "Core Web Vitals optimization, code-splitting, lazy loading — 30% measured uplift in production." },
  { icon: Layers, title: "Scalable Architecture", text: "Reusable component libraries, design systems, and SSR with Next.js for SEO-critical apps." },
  { icon: Code2, title: "End-to-End Ownership", text: "From Figma handoff to deployment — REST integrations, JWT auth, CI/CD with GitHub Actions." },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);

  return (
    <Section
      id="about"
      eyebrow="About"
      title="Building fast, scalable interfaces."
      description="Frontend Engineer with 3+ years of production experience crafting web and mobile applications that combine pixel-perfect design with measurable business impact."
    >
      <div ref={ref} className="grid lg:grid-cols-5 gap-10 items-center mb-14">
        <motion.div
          style={{ y, scale, rotate }}
          className="lg:col-span-2 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-transparent blur-2xl rounded-3xl" />
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative rounded-3xl overflow-hidden glass tilt-hover"
          >
            <img
              src={portrait}
              alt="Vasudev — Frontend Engineer"
              loading="lazy"
              width={768}
              height={960}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute bottom-5 left-5 right-5 flex items-center justify-between"
            >
              <div>
                <div className="font-display text-xl font-bold">Vasudev</div>
                <div className="text-xs text-muted-foreground font-mono">@VasuDev884</div>
              </div>
              <div className="glass rounded-full px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-primary">
                Available
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="lg:col-span-3 space-y-6">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ x: 6 }}
              className="glass glass-hover rounded-2xl p-6 flex gap-5"
            >
              <div className="shrink-0 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
