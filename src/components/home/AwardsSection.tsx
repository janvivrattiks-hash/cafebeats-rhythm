import { Award, TrendingUp, Heart } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";

const awards = [
  { icon: Award, title: "Best Café Brand", desc: "Recognized for excellence in café culture and quality beverages" },
  { icon: TrendingUp, title: "Fast Growing Coffee Chain", desc: "One of the fastest expanding café brands in the region" },
  { icon: Heart, title: "Customer Choice Award", desc: "Voted #1 by coffee lovers for taste and experience" },
];

const AwardsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Our Achievements" title="Awards & Recognition" />
      <div className="grid gap-6 md:grid-cols-3">
        {awards.map((a, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="group rounded-2xl border border-border bg-card p-8 text-center shadow-warm transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-gold transition-transform duration-300 group-hover:scale-110">
                <a.icon className="h-8 w-8 text-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default AwardsSection;
