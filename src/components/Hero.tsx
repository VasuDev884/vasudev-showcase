import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import avatarCartoon from "@/assets/avatar-cartoon.png";

const ROLES = [
  "Frontend Engineer",
  "React Specialist",
  "Next.js Developer",
  "Performance Nerd",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = ROLES[i % ROLES.length];
    const speed = del ? 45 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) setTimeout(() => setDel(true), 1400);
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span>
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle blink-caret" />
    </span>
  );
}

export function Hero() {
  const vasu = "VASU".split("");
  const dev = "DEV".split("");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 pb-20"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <motion.div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-primary/20 blur-[120px]"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-primary/10 blur-[100px]"
        animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* floating accent chips */}
      <motion.div
        className="hidden md:block absolute top-32 left-12 glass rounded-full px-4 py-2 text-xs font-mono floaty"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
      >
        ⚛️ React 19
      </motion.div>
      <motion.div
        className="hidden md:block absolute top-44 right-16 glass rounded-full px-4 py-2 text-xs font-mono floaty"
        style={{ animationDelay: "-3s" }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
      >
        ▲ Next.js 15
      </motion.div>
      <motion.div
        className="hidden md:block absolute bottom-40 left-20 glass rounded-full px-4 py-2 text-xs font-mono floaty"
        style={{ animationDelay: "-1.5s" }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6 }}
      >
        ⚡ 30% faster
      </motion.div>

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

        <motion.div
          initial={{ opacity: 0, scale: 0, rotate: -30 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 0.15, type: "spring", stiffness: 140, damping: 12 }}
          whileHover={{ scale: 1.08, rotate: [0, -5, 5, 0] }}
          className="mx-auto mb-6 relative w-28 h-28 md:w-36 md:h-36"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/40 to-transparent blur-2xl" />
          <div className="relative h-full w-full rounded-full overflow-hidden ring-2 ring-primary/60 glow-primary">
            <img
              src={avatarCartoon}
              alt="Vasudev cartoon avatar"
              width={288}
              height={288}
              className="h-full w-full object-cover"
            />
          </div>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-2 rounded-full border border-dashed border-primary/40"
          />
        </motion.div>

        <h1 className="font-display font-bold tracking-tighter text-[clamp(3.5rem,15vw,12rem)] leading-[0.85] mb-6 flex items-center justify-center flex-wrap">
          {vasu.map((ch, i) => (
            <motion.span
              key={`v-${i}`}
              initial={{ y: 120, opacity: 0, rotateX: -90 }}
              animate={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ delay: 0.3 + i * 0.07, type: "spring", stiffness: 110 }}
              whileHover={{ y: -12, color: "var(--primary)", transition: { duration: 0.2 } }}
              className="inline-block text-foreground cursor-default"
            >
              {ch}
            </motion.span>
          ))}
          {dev.map((ch, i) => (
            <motion.span
              key={`d-${i}`}
              initial={{ y: 120, opacity: 0, scale: 0.4, rotate: -20 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{ delay: 0.65 + i * 0.1, type: "spring", stiffness: 140, damping: 10 }}
              whileHover={{ scale: 1.15, rotate: [0, -6, 6, 0], transition: { duration: 0.5 } }}
              className="inline-block text-gradient-anim cursor-default drop-shadow-[0_0_30px_oklch(0.87_0.18_95_/_0.5)]"
            >
              {ch}
            </motion.span>
          ))}
          <motion.span
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
            className="inline-block ml-3"
          >
            <Sparkles
              className="h-10 w-10 md:h-16 md:w-16 text-primary"
              style={{ animation: "floaty 4s ease-in-out infinite" }}
            />
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0 }}
          className="text-xl md:text-2xl text-foreground/90 font-display mb-3 h-8"
        >
          <Typewriter />
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1 }}
          className="text-sm md:text-base text-muted-foreground mb-12 font-mono"
        >
          React.js · Next.js · TypeScript · Performance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:glow-primary transition-all"
          >
            View Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-full glass glass-hover px-7 py-3.5 text-sm font-semibold"
          >
            <Download className="h-4 w-4" />
            Resume
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition"
          >
            <Mail className="h-4 w-4" />
            Contact
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl glass"
        >
          {[
            { v: "3+", l: "Years Exp" },
            { v: "30%", l: "Perf Boost" },
            { v: "25%", l: "Engagement" },
            { v: "5", l: "Devs Led" },
          ].map((s, i) => (
            <motion.div
              key={s.l}
              whileHover={{ y: -4, backgroundColor: "oklch(0.87 0.18 95 / 0.08)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 + i * 0.08 }}
              className="px-6 py-6 text-center bg-background/40"
            >
              <div className="font-display text-3xl md:text-4xl font-bold text-primary">
                {s.v}
              </div>
              <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                {s.l}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-12 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-10 w-6 rounded-full border-2 border-muted-foreground/40 flex justify-center pt-2"
          >
            <div className="h-2 w-1 rounded-full bg-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
