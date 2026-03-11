import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import coffeeImg from "@/assets/coffee-item.jpg";
import store1 from "@/assets/store-1.jpg";
import store2 from "@/assets/store-2.jpg";
import dessertImg from "@/assets/dessert-item.jpg";
import sandwichImg from "@/assets/sandwich-item.jpg";

const images = [hero1, coffeeImg, hero2, store1, dessertImg, hero3, sandwichImg, store2];

const GallerySection = () => {
  const [index, setIndex] = useState<number | null>(null);

  const next = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (index !== null) setIndex((index + 1) % images.length);
  };

  const prev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (index !== null) setIndex((index - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setIndex(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [index]);

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle subtitle="Our Moments" title="Sweet Gallery" />
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className="group relative mb-4 cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setIndex(i)}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Maximize2 className="h-8 w-8 text-white" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={() => setIndex(null)}
          >
            <button 
              className="absolute right-6 top-6 z-[60] text-white/70 hover:text-white transition-colors"
              onClick={() => setIndex(null)}
            >
              <X className="h-10 w-10" />
            </button>

            <button 
              className="absolute left-4 top-1/2 z-[60] -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              onClick={prev}
            >
              <ChevronLeft className="h-12 w-12" />
            </button>

            <button 
              className="absolute right-4 top-1/2 z-[60] -translate-y-1/2 text-white/50 hover:text-white transition-colors"
              onClick={next}
            >
              <ChevronRight className="h-12 w-12" />
            </button>
            
            <div className="relative flex items-center justify-center max-h-[85vh] max-w-5xl overflow-hidden w-full h-full">
              <AnimatePresence mode="popLayout">
                <motion.img
                  key={index}
                  initial={{ opacity: 0, x: 100, scale: 0.9 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -100, scale: 0.9 }}
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                  src={images[index]}
                  alt="Preview"
                  className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                />
              </AnimatePresence>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 font-display text-lg">
              {index + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
