import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="bg-gradient-coffee py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8">
        <SectionTitle subtitle="Our Moments" title="Sweet Gallery" light />
        <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
          {images.map((img, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div
                className="group mb-4 cursor-pointer overflow-hidden rounded-xl"
                onClick={() => setSelected(img)}
              >
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-chocolate/90 p-4"
            onClick={() => setSelected(null)}
          >
            <button className="absolute right-6 top-6 text-cream"><X className="h-8 w-8" /></button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={selected}
              alt="Preview"
              className="max-h-[85vh] max-w-full rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
