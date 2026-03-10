import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import coffeeImg from "@/assets/coffee-item.jpg";
import teaImg from "@/assets/tea-item.jpg";

const products = [
  { image: product1, name: "Coffee Powder", price: "₹349" },
  { image: product2, name: "Cold Coffee Bottle", price: "₹149" },
  { image: coffeeImg, name: "Instant Coffee", price: "₹249" },
  { image: teaImg, name: "Premium Tea", price: "₹299" },
];

const ProductsSection = () => (
  <section className="bg-secondary py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Take Home" title="Our Delicious Products" description="Enjoy our premium products from the comfort of your home." />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
        {products.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-gold">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
              <div className="p-4 text-center">
                <h3 className="font-display text-base font-bold text-foreground">{p.name}</h3>
                <p className="mt-1 text-sm font-semibold text-accent">{p.price}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
