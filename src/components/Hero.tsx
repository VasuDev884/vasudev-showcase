import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";

export function Hero() {
  const name = "VASUDEV";
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20">
      {/* animated glows */}
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
        >
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Available for new opportunities
        </motion.div>

        <h1 className="font-display font-bold tracking-tighter text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] mb-6">
          {name.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.06, type: "spring", stiffness: 100 }}
              className="inline-block text-gradient"
            >
              {ch}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-xl md:text-2xl text-foreground/90 font-display mb-3"
        >
          Frontend Engineer
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-sm md:text-base text-muted-foreground mb-12 font-mono"
        >
          React.js · Next.js · TypeScript · Performance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:glow-primary transition-all"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full glass glass-hover px-7 py-3.5 text-sm font-semibold"
          >
            <Download className="h-4 w-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition"
          >
            <Mail className="h-4 w-4" />
            Contact
          </a>
        </motion.div>

        {/* stats strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl glass"
        >
          {[
            { v: "3+", l: "Years Exp" },
            { v: "30%", l: "Perf Boost" },
            { v: "25%", l: "Engagement" },
            { v: "5", l: "Devs Led" },
          ].map((s) => (
            <div key={s.l} className="px-6 py-6 text-center bg-background/40">
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">{s.v}</div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
