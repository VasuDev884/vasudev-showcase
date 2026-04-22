import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Contact } from "@/components/Contact";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Cursor } from "@/components/Cursor";
import { Marquee } from "@/components/Marquee";
import { Parallax } from "@/components/Parallax";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vasudev — Frontend Engineer · React, Next.js, TypeScript" },
      { name: "description", content: "Premium portfolio of Vasudev, a Frontend Engineer with 3+ years building scalable React, Next.js, and TypeScript applications. 30% performance gains, 25% engagement lift." },
      { property: "og:title", content: "Vasudev — Frontend Engineer" },
      { property: "og:description", content: "Frontend Engineer crafting premium React & Next.js experiences. 3+ years production experience." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative overflow-x-hidden">
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Experience />
      <Parallax />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
