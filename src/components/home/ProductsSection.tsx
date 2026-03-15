import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";
const products = [
  { image: "/our-delicious-products-1.webp", name: "Coffee Powder" },
  { image: "/our-delicious-products-2.webp", name: "Cold Coffee Bottle" },
  { image: "/our-delicious-products-3.webp", name: "Instant Coffee" },
  { image: "/our-delicious-products-4.webp", name: "Premium Tea" },
];

const ProductsSection = () => (
  <section className="bg-muted py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="Take Home" title="Our Delicious Products" description="Enjoy our premium products from the comfort of your home." />
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
        {products.map((p, i) => (
          <ScrollReveal key={i} delay={i * 0.1}>
            <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-accent">
              <div className="aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
