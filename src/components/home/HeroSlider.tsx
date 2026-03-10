import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";

const slides = [
  { image: hero1, tagline: "Where Coffee Meets Rhythm", subtitle: "Premium handcrafted beverages & delicious food" },
  { image: hero2, tagline: "Crafted With Passion", subtitle: "Every cup tells a story of dedication & artistry" },
  { image: hero3, tagline: "Taste the Experience", subtitle: "Indulge in our curated menu of flavors & aromas" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => setCurrent((p) => (p + dir + slides.length) % slides.length);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slides[current].image} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-chocolate/80 via-chocolate/50 to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span className="text-gradient-gold mb-4 inline-block font-body text-sm font-semibold uppercase tracking-[0.2em]">
                CafeBeats
              </span>
              <h1 className="font-display text-4xl font-bold leading-tight text-cream md:text-6xl lg:text-7xl">
                {slides[current].tagline}
              </h1>
              <p className="mt-4 text-base text-cream/80 md:text-lg">{slides[current].subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="group flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-3.5 font-body text-sm font-semibold text-foreground transition-all hover:shadow-gold"
                >
                  Explore Menu <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/stores"
                  className="rounded-full border-2 border-cream/30 px-8 py-3.5 font-body text-sm font-semibold text-cream transition-all hover:border-gold hover:bg-gold/10"
                >
                  Find Our Stores
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Nav arrows */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-3">
        <button onClick={() => go(-1)} className="rounded-full border border-cream/30 p-3 text-cream transition-all hover:border-gold hover:bg-gold/20">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button onClick={() => go(1)} className="rounded-full border border-cream/30 p-3 text-cream transition-all hover:border-gold hover:bg-gold/20">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-full transition-all ${i === current ? "w-8 bg-gold" : "w-2 bg-cream/40"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
