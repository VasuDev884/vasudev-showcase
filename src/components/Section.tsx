import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">{eyebrow}</span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tight mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground text-lg leading-relaxed">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
