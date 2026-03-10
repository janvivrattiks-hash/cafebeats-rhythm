import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
import coffeeImg from "@/assets/coffee-item.jpg";
import teaImg from "@/assets/tea-item.jpg";
import shakeImg from "@/assets/shake-item.jpg";
import sandwichImg from "@/assets/sandwich-item.jpg";
import snacksImg from "@/assets/snacks-item.jpg";
import dessertImg from "@/assets/dessert-item.jpg";

const categories = [
  { name: "Coffee", image: coffeeImg },
  { name: "Tea", image: teaImg },
  { name: "Shakes", image: shakeImg },
  { name: "Sandwiches", image: sandwichImg },
  { name: "Snacks", image: snacksImg },
  { name: "Desserts", image: dessertImg },
];

const FoodCategories = () => (
  <section className="bg-secondary py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="What We Serve" title="Our Delicious Food" description="Explore our wide range of handcrafted beverages and freshly prepared food." />
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:gap-6">
        {categories.map((cat, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <Link to="/menu" className="group relative block overflow-hidden rounded-2xl">
              <div className="aspect-square overflow-hidden">
                <img src={cat.image} alt={cat.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-chocolate/70 to-transparent p-5 transition-all">
                <h3 className="font-display text-xl font-bold text-cream md:text-2xl">{cat.name}</h3>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FoodCategories;
