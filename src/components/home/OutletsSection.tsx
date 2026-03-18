import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
const outlets = [
  { image: "/sarthana.webp", city: "Sarthana - Surat", address: "Surat, Gujarat" },
  { image: "/varachha.webp", city: "Mota Varachha - Surat", address: "Surat, Gujarat" },
  { image: "/Vapi.webp", city: "Vapi", address: "Vapi, Gujarat" },
];

const OutletsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Visit Us" title="CafeBeats Outlets" />
      <div className="grid gap-6 md:grid-cols-3">
        {outlets.map((o, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-accent">
              <div className="aspect-video overflow-hidden">
                <img src={o.image} alt={o.city} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{o.city}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {o.address}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OutletsSection;
