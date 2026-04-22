import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[120px]" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-mono uppercase tracking-widest text-primary">Contact</span>
            <span className="h-px w-8 bg-primary" />
          </div>
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter mb-4">
            Let's build something <span className="text-gradient">amazing.</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Open to frontend engineering roles, freelance projects, and product collaborations.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-3"
          >
            <a href="mailto:vasudev.8847@gmail.com" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4 group">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Mail className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="text-sm font-medium">vasudev.8847@gmail.com</div>
              </div>
            </a>
            <a href="tel:+918847279783" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Phone className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="text-sm font-medium">+91 88472 79783</div>
              </div>
            </a>
            <a href="https://linkedin.com/in/vasudev--" target="_blank" rel="noreferrer" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Linkedin className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">LinkedIn</div>
                <div className="text-sm font-medium">linkedin.com/in/vasudev--</div>
              </div>
            </a>
            <a href="https://github.com/VasuDev884" target="_blank" rel="noreferrer" className="glass glass-hover rounded-2xl p-5 flex items-center gap-4">
              <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center"><Github className="h-5 w-5" /></div>
              <div>
                <div className="text-xs text-muted-foreground">GitHub</div>
                <div className="text-sm font-medium">github.com/VasuDev884</div>
              </div>
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="lg:col-span-3 glass rounded-2xl p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Name</label>
                <input required className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm" />
              </div>
              <div>
                <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</label>
                <input required type="email" className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm" />
              </div>
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Subject</label>
              <input className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm" />
            </div>
            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea required rows={4} className="mt-2 w-full bg-transparent border-b border-border focus:border-primary outline-none py-2 text-sm resize-none" />
            </div>
            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground hover:glow-primary transition-all"
            >
              {sent ? "Message sent ✓" : "Send Message"}
              <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.form>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Vasudev. Crafted with React + Tailwind.</div>
          <div className="font-mono">v.portfolio / 2025</div>
        </div>
      </div>
    </section>
  );
}
