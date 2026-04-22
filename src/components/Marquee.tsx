const words = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Performance",
  "Tailwind",
  "Framer Motion",
  "Redux Toolkit",
  "REST APIs",
  "Core Web Vitals",
  "SSR / SEO",
];

export function Marquee() {
  const loop = [...words, ...words];
  return (
    <div className="relative overflow-hidden border-y border-border bg-background/40 py-6">
      <div className="flex gap-12 marquee-track whitespace-nowrap">
        {loop.map((w, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl font-bold tracking-tight text-foreground/80 flex items-center gap-12"
          >
            {w}
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
