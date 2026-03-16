import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";

const reels = [
  {
    id: 1,
    title: "Latte Art Magic ☕✨",
    videoUrl: "/our-delicious-food-1.MOV"
  },
  {
    id: 2,
    title: "Morning Vibes at CafeBeats 🌅",
    videoUrl: "/our-delicious-food-2.MOV"
  },
  {
    id: 3,
    title: "Our Signature Cold Brew 🧊",
    videoUrl: "/our-delicious-food-3.MOV"
  },
  {
    id: 4,
    title: "Delicious Bites 🍕✨",
    videoUrl: "/our-delicious-food-4.MOV"
  },
];

const FoodCategories = () => (
  <section className="bg-muted py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="What We Serve" title="Our Delicious Food" description="Watch our latest reels and explore the delicious world of CafeBeats." />
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-10 max-w-6xl mx-auto">
        {reels.map((reel, i) => (
          <ScrollReveal key={reel.id} delay={i * 0.2}>
            <div className="group relative block overflow-hidden rounded-3xl bg-black shadow-warm aspect-[9/16] cursor-pointer">
              <video
                src={reel.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500 pointer-events-none"
              />
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FoodCategories;
