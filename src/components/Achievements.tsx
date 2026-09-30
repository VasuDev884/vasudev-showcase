import { motion } from "framer-motion";
import { TrendingUp, Users, Zap, Target } from "lucide-react";

const items = [
  { icon: Zap, value: "30%", label: "Performance boost", sub: "Core Web Vitals" },
  { icon: TrendingUp, value: "25%", label: "Engagement increase", sub: "DAU & retention" },
  { icon: Target, value: "12%", label: "Conversion lift", sub: "Funnel optimization" },
  { icon: Users, value: "5", label: "Developers mentored", sub: "Code reviews & standards" },
];

export function Achievements() {
  return (
    <section id="achievements" className="py-28 px-6 relative">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative glass glass-hover rounded-2xl p-8 overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl" />
              <it.icon className="h-6 w-6 text-primary mb-6" />
              <div className="font-display text-5xl font-bold text-gradient mb-2">{it.value}</div>
              <div className="text-sm font-medium">{it.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{it.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
