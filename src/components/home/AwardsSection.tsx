import { Award } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";

const AwardsSection = () => (
  <section className="py-20 md:py-28 bg-secondary/10">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Our Achievements" title="Awards & Recognition" centered />
      <ScrollReveal delay={0.2}>
        <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-border bg-card shadow-2xl transition-all duration-500 hover:shadow-accent/20">
          <img 
            src="/award.webp" 
            alt="CafeBeats Awards and Recognition" 
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default AwardsSection;
