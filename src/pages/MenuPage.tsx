import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const tabs = ["Coffee", "Tea", "Shakes", "Snacks", "Desserts"];

const menuData: Record<string, { name: string; desc: string }[]> = {
  Coffee: [
    { name: "Espresso", desc: "Bold and rich single shot" },
    { name: "Cappuccino", desc: "Creamy foam with espresso" },
    { name: "Latte", desc: "Smooth milk and espresso blend" },
    { name: "Americano", desc: "Espresso diluted with hot water" },
    { name: "Cold Brew", desc: "Slow-steeped for 12 hours" },
    { name: "Mocha", desc: "Chocolate meets coffee perfection" },
  ],
  Tea: [
    { name: "Masala Chai", desc: "Traditional Indian spiced tea" },
    { name: "Green Tea", desc: "Light and refreshing" },
    { name: "Matcha Latte", desc: "Japanese ceremonial grade matcha" },
    { name: "Earl Grey", desc: "Bergamot-infused classic" },
  ],
  Shakes: [
    { name: "Chocolate Shake", desc: "Rich Belgian chocolate blend" },
    { name: "Strawberry Shake", desc: "Fresh berry goodness" },
    { name: "Oreo Shake", desc: "Cookie crumble delight" },
    { name: "Mango Shake", desc: "Tropical mango bliss" },
  ],
  Snacks: [
    { name: "French Fries", desc: "Crispy golden perfection" },
    { name: "Garlic Bread", desc: "Butter herb toast" },
    { name: "Nachos", desc: "Loaded with cheese & salsa" },
    { name: "Spring Rolls", desc: "Crunchy veggie rolls" },
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", desc: "Molten center cake" },
    { name: "Tiramisu", desc: "Coffee-soaked Italian classic" },
    { name: "Cheesecake", desc: "New York style creamy" },
    { name: "Brownie Sundae", desc: "Warm brownie with ice cream" },
  ],
};

const MenuPage = () => {
  const [active, setActive] = useState("Coffee");

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[50vh] items-center justify-center overflow-hidden">
          <img src="/banner-2.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
          <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-white"
            >
              <h1 className="font-display text-4xl font-bold text-white md:text-6xl uppercase tracking-wider">Our Menu</h1>
              <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">Handcrafted with love, served with passion. Explore our curated selection of rhythm and brew.</p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-8">
            {/* Tab Bar */}
            <div className="sticky top-20 z-30 mb-16 flex flex-wrap justify-center gap-4 bg-background/80 py-4 backdrop-blur-md">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`rounded-full px-8 py-2.5 font-display text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                    active === tab
                      ? "bg-gradient-accent text-foreground shadow-accent"
                      : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* Category Header */}
                <div className="mb-10 text-center">
                  <h2 className="mt-3 font-display text-3xl font-bold text-foreground">{active}</h2>
                  <div className="mt-2 mx-auto h-1 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
                </div>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {menuData[active as keyof typeof menuData].map((item, i) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group relative overflow-hidden rounded-3xl bg-card border border-border shadow-warm hover:shadow-primary transition-all duration-300 hover:-translate-y-1 p-7"
                    >
                      {/* Decorative number */}
                      <span className="absolute top-4 right-5 font-display text-6xl font-black text-muted/20 select-none group-hover:text-accent/10 transition-colors duration-300">
                        {String(i + 1).padStart(2, "0")}
                      </span>

                      {/* Accent bar */}
                      <div className="mb-5 h-1 w-10 rounded-full bg-gradient-to-r from-primary to-accent group-hover:w-16 transition-all duration-300" />

                      <h3 className="font-display text-xl font-bold text-foreground mb-2 relative z-10">{item.name}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{item.desc}</p>

                      {/* Bottom decorative glow */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-accent/50 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MenuPage;
