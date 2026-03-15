import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Phone, Navigation, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
const stores = [
  { name: "Mota Varachha - Surat", address: "Surat, Gujarat", phone: "+91 99245 74894", image: "/varachha.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Mota+Varachha,+Surat" },
  { name: "Dumas - Surat", address: "Surat, Gujarat", phone: "+91 99245 74894", image: "/Dumas.webp", mapUrl: "https://www.google.com/maps/search/Cafe+Beats+Arena+Dumas+Road,+Surat" },
  { name: "Mumbai", address: "Mumbai, Maharashtra", phone: "+91 99245 74894", image: "/mumbai.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Bandra+Mumbai" },
  { name: "Piplod - Surat", address: "Surat, Gujarat", phone: "+91 99245 74894", image: "/Piplod.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Piplod,+Surat" },
  { name: "Khadki (NH-48)", address: "NH-48, Gujarat", phone: "+91 99245 74894", image: "/Khadki(NH-48).webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Khadki,+NH-48" },
  { name: "Sarthana - Surat", address: "Surat, Gujarat", phone: "+91 99245 74894", image: "/sarthana.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Sarthana+Jakat+Naka,+Surat" },
  { name: "Vapi", address: "Vapi, Gujarat", phone: "+91 99245 74894", image: "/Vapi.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Vapi,+Gujarat" },
  { name: "Vadodara", address: "Vadodara, Gujarat", phone: "+91 99245 74894", image: "/Vadodara.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Akota,+Vadodara" },
  { name: "Navsari", address: "Navsari, Gujarat", phone: "+91 99245 74894", image: "/Navsari.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Navsari,+Gujarat" },
  { name: "Hajira-Ghogha Roao Ferry", address: "Multiple Outlets, Gujarat", phone: "+91 99245 74894", image: "/HAJIRA-GHOGHA ROAO FERRY (MULTIPLE OUTLETS).webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Hajira+Ghogha+Ferry" },
  { name: "Daman", address: "Daman, India", phone: "+91 99245 74894", image: "/Daman.webp", mapUrl: "https://www.google.com/maps/search/Cafe+Beats+Dabhel,+Daman" },
  { name: "Anthem Circle", address: "Surat, Gujarat", phone: "+91 99245 74894", image: "/Anthem-circle.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Anthem+Circle,+Surat" },
  { name: "Pal-Adajan", address: "Surat, Gujarat", phone: "+91 99245 74894", image: "/Pal-Adajan.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Pal-Adajan,+Surat" },
  { name: "Katargam", address: "Surat, Gujarat", phone: "+91 99245 74894", image: "/katargam.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Katargam,+Surat" },
  { name: "Rajkot", address: "Rajkot, Gujarat", phone: "+91 99245 74894", image: "/rajkot.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+Kalavad+Road,+Rajkot" },
  { name: "IIT Indore(Madhya Pradesh)", address: "Indore, Madhya Pradesh", phone: "+91 99245 74894", image: "/sarthana.webp", mapUrl: "https://www.google.com/maps/search/CafeBeats+IIT+Indore" },
];

const StoresPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
        <img src="/banner-4.webp" alt="CafeBeats Stores" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-4xl font-bold text-white md:text-6xl uppercase tracking-wider">Our Stores</h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto italic font-medium">Find the rhythm of CafeBeats near you. Exploring our vibrant locations across India.</p>
          </motion.div>
        </div>
      </section>

      {/* Stores grid */}

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Locations" title="Store Locations" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stores.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-warm transition-all hover:-translate-y-1 hover:shadow-accent">
                  <div className="aspect-video overflow-hidden">
                    <img src={s.image} alt={s.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold text-foreground">{s.name}</h3>
                    <p className="mt-2 flex items-start gap-1.5 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> {s.address}
                    </p>
                    <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 shrink-0 text-accent" /> 
                      <a href={`tel:${s.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">{s.phone}</a>
                    </p>
                    <a
                      href={s.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-accent px-5 py-2 text-sm font-semibold text-foreground transition-all hover:shadow-accent"
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
      <section className="bg-background py-20 md:py-28 border-t border-border/50">
        <div className="container mx-auto px-4 text-center md:px-8">
          <ScrollReveal>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">
              Want to Open a CafeBeats Store?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Start your CafeBeats franchise today and be part of India's most exciting café brand.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/franchise"
                className="group flex items-center gap-2 rounded-full bg-gradient-accent px-8 py-3.5 font-body text-sm font-semibold text-foreground transition-all hover:shadow-accent"
              >
                Apply for Franchise <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="rounded-full border-2 border-border px-8 py-3.5 font-body text-sm font-semibold text-foreground transition-all hover:border-accent hover:bg-accent/5"
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
