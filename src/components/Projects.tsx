import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Github } from "lucide-react";
import erp from "@/assets/project-erp.jpg";
import resume from "@/assets/project-resume.jpg";
import remote from "@/assets/project-remote.jpg";
import ecom from "@/assets/project-ecom.jpg";
import video from "@/assets/project-video.jpg";
import digivridh from "@/assets/project-digivridh.jpg";
import studio from "@/assets/project-studio.jpg";

const projects = [
  {
    title: "School ERP Platform",
    desc: "Full frontend ownership of a multi-role ERP with dashboards for admins, teachers, students and parents. JWT auth, role-based routing, CI/CD.",
    tags: ["Next.js", "TypeScript", "Redux", "JWT", "GitHub Actions"],
    img: erp, github: "https://github.com/VasuDev884", live: "#", featured: true,
  },
  {
    title: "AI Resume Optimizer",
    desc: "AI-driven tool that analyzes resumes against job descriptions and rewrites sections for better ATS performance.",
    tags: ["React", "OpenAI", "Tailwind"],
    img: resume, github: "https://github.com/VasuDev884", live: "#",
  },
  {
    title: "Remote Desk MVP",
    desc: "Browser-based remote desktop with WebRTC peer connections, low-latency video, and clipboard sharing.",
    tags: ["React", "WebRTC", "Node"],
    img: remote, github: "https://github.com/VasuDev884", live: "#",
  },
  {
    title: "E-commerce MERN",
    desc: "Full-stack store with product catalog, cart, checkout, and order management on the MERN stack.",
    tags: ["MongoDB", "Express", "React", "Node"],
    img: ecom, github: "https://github.com/VasuDev884", live: "#",
  },
  {
    title: "AI Video Course Generator",
    desc: "Generates structured video courses from a single prompt — script, slides, and narration pipeline.",
    tags: ["Next.js", "AI", "FFmpeg"],
    img: video, github: "https://github.com/VasuDev884", live: "#",
  },
  {
    title: "DigiVridh",
    desc: "Agri-tech dashboard surfacing crop analytics, yield forecasts, and inventory across regions.",
    tags: ["React", "Charts", "REST"],
    img: digivridh, github: "https://github.com/VasuDev884", live: "#",
  },
  {
    title: "Thirtysixstudios",
    desc: "Experimental studio site with bold typography, scroll-driven motion, and immersive transitions.",
    tags: ["React", "GSAP", "Locomotive"],
    img: studio, github: "https://github.com/VasuDev884", live: "#",
  },
];

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected Work"
      title="Projects I've shipped."
      description="A mix of production platforms and experiments. Each one taught me something I now apply to client work."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
        {projects.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.live}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
            className={`group glass glass-hover rounded-2xl overflow-hidden flex flex-col ${
              p.featured ? "lg:col-span-2 lg:row-span-1" : ""
            }`}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-muted">
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                width={1024}
                height={640}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition">
                <a href={p.github} onClick={(e) => e.stopPropagation()} className="h-9 w-9 rounded-full glass flex items-center justify-center" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-primary shrink-0 group-hover:rotate-45 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border rounded px-2 py-0.5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
