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
        <section className="bg-gradient-coffee pt-32 pb-16">
          <div className="container mx-auto px-4 text-center md:px-8">
            <ScrollReveal>
              <h1 className="font-display text-4xl font-bold text-cream md:text-6xl">Our Menu</h1>
              <p className="mt-4 text-lg text-cream/80">Handcrafted with love, served with passion</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <div className="mb-12 flex flex-wrap justify-center gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActive(tab)}
                  className={`relative rounded-full px-6 py-2.5 font-body text-sm font-semibold transition-all ${
                    active === tab
                      ? "bg-gradient-coffee text-primary-foreground shadow-warm"
                      : "border border-border bg-card text-muted-foreground hover:border-accent hover:text-foreground"
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
                className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
              >
                {menuData[active]?.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    className="group flex gap-4 overflow-hidden rounded-2xl border border-border bg-card p-4 shadow-warm transition-all hover:-translate-y-1 hover:shadow-gold"
                  >
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                      <img src={item.image} alt={item.name} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h3 className="font-display text-lg font-bold text-foreground">{item.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{item.desc}</p>
                      <span className="mt-2 text-sm font-bold text-accent">{item.price}</span>
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
