import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import coffeeImg from "@/assets/coffee-item.jpg";
import teaImg from "@/assets/tea-item.jpg";
import shakeImg from "@/assets/shake-item.jpg";
import sandwichImg from "@/assets/sandwich-item.jpg";
import snacksImg from "@/assets/snacks-item.jpg";
import dessertImg from "@/assets/dessert-item.jpg";

const tabs = ["Coffee", "Tea", "Shakes", "Snacks", "Desserts"];

const menuData: Record<string, { name: string; desc: string; price: string; image: string }[]> = {
  Coffee: [
    { name: "Espresso", desc: "Bold and rich single shot", price: "₹149", image: coffeeImg },
    { name: "Cappuccino", desc: "Creamy foam with espresso", price: "₹199", image: coffeeImg },
    { name: "Latte", desc: "Smooth milk and espresso blend", price: "₹219", image: coffeeImg },
    { name: "Americano", desc: "Espresso diluted with hot water", price: "₹179", image: coffeeImg },
    { name: "Cold Brew", desc: "Slow-steeped for 12 hours", price: "₹249", image: coffeeImg },
    { name: "Mocha", desc: "Chocolate meets coffee perfection", price: "₹239", image: coffeeImg },
  ],
  Tea: [
    { name: "Masala Chai", desc: "Traditional Indian spiced tea", price: "₹99", image: teaImg },
    { name: "Green Tea", desc: "Light and refreshing", price: "₹129", image: teaImg },
    { name: "Matcha Latte", desc: "Japanese ceremonial grade matcha", price: "₹249", image: teaImg },
    { name: "Earl Grey", desc: "Bergamot-infused classic", price: "₹149", image: teaImg },
  ],
  Shakes: [
    { name: "Chocolate Shake", desc: "Rich Belgian chocolate blend", price: "₹249", image: shakeImg },
    { name: "Strawberry Shake", desc: "Fresh berry goodness", price: "₹229", image: shakeImg },
    { name: "Oreo Shake", desc: "Cookie crumble delight", price: "₹259", image: shakeImg },
    { name: "Mango Shake", desc: "Tropical mango bliss", price: "₹229", image: shakeImg },
  ],
  Snacks: [
    { name: "French Fries", desc: "Crispy golden perfection", price: "₹149", image: snacksImg },
    { name: "Garlic Bread", desc: "Butter herb toast", price: "₹169", image: snacksImg },
    { name: "Nachos", desc: "Loaded with cheese & salsa", price: "₹199", image: snacksImg },
    { name: "Spring Rolls", desc: "Crunchy veggie rolls", price: "₹179", image: sandwichImg },
  ],
  Desserts: [
    { name: "Chocolate Lava Cake", desc: "Molten center cake", price: "₹299", image: dessertImg },
    { name: "Tiramisu", desc: "Coffee-soaked Italian classic", price: "₹349", image: dessertImg },
    { name: "Cheesecake", desc: "New York style creamy", price: "₹329", image: dessertImg },
    { name: "Brownie Sundae", desc: "Warm brownie with ice cream", price: "₹279", image: dessertImg },
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
              className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {menuData[active as keyof typeof menuData].map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="group overflow-hidden rounded-3xl bg-card shadow-warm border border-border"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <h3 className="font-display text-xl font-bold">{item.name}</h3>
                      <span className="font-display text-lg font-bold text-accent">{item.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
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
