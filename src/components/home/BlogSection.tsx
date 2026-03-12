import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const posts = [
  { id: "perfect-espresso", image: hero1, title: "The Art of Perfect Espresso", desc: "Discover the secrets behind crafting the perfect shot of espresso every time.", date: "Mar 5, 2026" },
  { id: "milestone-50", image: hero2, title: "CafeBeats Opens 50th Store", desc: "We're thrilled to announce our milestone of 50 stores across the country.", date: "Feb 20, 2026" },
  { id: "seasonal-menu", image: hero3, title: "New Seasonal Menu Launch", desc: "Explore our limited-edition spring collection of refreshing beverages.", date: "Feb 10, 2026" },
];

const BlogSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Latest Updates" title="The Coffee Herald" />
      <div className="grid gap-6 md:grid-cols-3">
        {posts.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-accent">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-muted-foreground">{p.date}</span>
                <h3 className="mt-2 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
