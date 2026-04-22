import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import workspace from "@/assets/workspace.jpg";

export function Parallax() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1.15, 1.25]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], ["40%", "-40%"]);

  return (
    <section
      ref={ref}
      className="relative h-[80vh] overflow-hidden my-20"
      aria-label="Workspace showcase"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -inset-y-32">
        <img
          src={workspace}
          alt="Late-night coding workspace"
          loading="lazy"
          width={1280}
          height={800}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />
      </motion.div>

      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <div className="text-xs font-mono uppercase tracking-[0.4em] text-primary mb-6">
          // craft.mode = obsessive
        </div>
        <h2 className="font-display text-5xl md:text-8xl font-bold tracking-tighter max-w-4xl leading-[0.95]">
          Pixels with <span className="text-gradient-anim">purpose</span>.
          <br />
          Code with <span className="text-gradient-anim">intent</span>.
        </h2>
        <p className="mt-6 max-w-xl text-muted-foreground">
          Every interaction tuned. Every bundle measured. Every component reusable.
        </p>
      </motion.div>
    </section>
  );
}
