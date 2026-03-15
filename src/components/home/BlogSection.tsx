import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const posts = [
  { 
    id: "beat-pe-coffee", 
    image: hero1, 
    title: "Beat pe Coffee – Cafe beats", 
    desc: "Discover the rhythm of refreshment with our signature blends and handcrafted beverages.", 
    date: "Mar 15, 2026" 
  },
];

const BlogSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Latest Updates" title="The Coffee Herald" centered />
      <div className="flex justify-center mt-12">
        {posts.map((p, i) => (
          <ScrollReveal key={i} delay={0.2} className="w-full max-w-xl">
            <div className="group overflow-hidden rounded-3xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-accent">
              <div className="aspect-video overflow-hidden">
                <img src={p.image} alt={p.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-8 text-center">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  {p.title}
                </h3>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
