import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import hero1 from "@/assets/hero-1.jpg";

const outlets = [
  { image: store1, city: "Mumbai", address: "Bandra West, Linking Road" },
  { image: store2, city: "Delhi", address: "Connaught Place, Block A" },
  { image: hero1, city: "Bangalore", address: "Indiranagar, 12th Main" },
];

const OutletsSection = () => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Visit Us" title="CafeBeats Outlets" />
      <div className="grid gap-6 md:grid-cols-3">
        {outlets.map((o, i) => (
          <ScrollReveal key={i} delay={i * 0.15}>
            <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-gold">
              <div className="aspect-video overflow-hidden">
                <img src={o.image} alt={o.city} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-foreground">{o.city}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" /> {o.address}
                </p>
                <Link to="/stores" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:text-gold-light">
                  View Details <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default OutletsSection;
