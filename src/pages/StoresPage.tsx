import { Link } from "react-router-dom";
import { MapPin, Phone, Navigation, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import hero1 from "@/assets/hero-1.jpg";

const stores = [
  { name: "CafeBeats Bandra", address: "Shop 12, Linking Road, Bandra West, Mumbai 400050", phone: "+91 98765 43210", image: store1, mapUrl: "https://maps.google.com" },
  { name: "CafeBeats CP", address: "Block A-23, Connaught Place, New Delhi 110001", phone: "+91 98765 43211", image: store2, mapUrl: "https://maps.google.com" },
  { name: "CafeBeats Indiranagar", address: "12th Main Road, Indiranagar, Bangalore 560038", phone: "+91 98765 43212", image: hero1, mapUrl: "https://maps.google.com" },
  { name: "CafeBeats Koregaon", address: "Lane 5, Koregaon Park, Pune 411001", phone: "+91 98765 43213", image: store1, mapUrl: "https://maps.google.com" },
  { name: "CafeBeats Jubilee Hills", address: "Road No. 36, Jubilee Hills, Hyderabad 500033", phone: "+91 98765 43214", image: store2, mapUrl: "https://maps.google.com" },
  { name: "CafeBeats Alwarpet", address: "TTK Road, Alwarpet, Chennai 600018", phone: "+91 98765 43215", image: hero1, mapUrl: "https://maps.google.com" },
];

const StoresPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="bg-gradient-coffee pt-32 pb-16">
        <div className="container mx-auto px-4 text-center md:px-8">
          <ScrollReveal>
            <h1 className="font-display text-4xl font-bold text-cream md:text-6xl">Our Stores</h1>
            <p className="mt-4 text-lg text-cream/80">Find a CafeBeats near you</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stores grid */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Locations" title="Store Locations" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stores.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-gold">
                  <div className="aspect-video overflow-hidden">
                    <img src={s.image} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">{s.name}</h3>
                    <p className="mt-2 flex items-start gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {s.address}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0 text-accent" /> {s.phone}
                    </p>
                    <a
                      href={s.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-gold px-5 py-2 text-sm font-semibold text-foreground transition-all hover:shadow-gold"
                    >
                      <Navigation className="h-3.5 w-3.5" /> Get Directions
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-coffee py-20 md:py-28">
        <div className="container mx-auto px-4 text-center md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-cream md:text-5xl">
              Want to Open a CafeBeats Store?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-cream/70">
              Start your CafeBeats franchise today and be part of India's most exciting café brand.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/franchise"
                className="group flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 font-body text-sm font-semibold text-foreground transition-all hover:shadow-gold"
              >
                Apply for Franchise <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/franchise"
                className="rounded-full border-2 border-cream/30 px-8 py-3.5 font-body text-sm font-semibold text-cream transition-all hover:border-gold hover:bg-gold/10"
              >
                Contact Us
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default StoresPage;
