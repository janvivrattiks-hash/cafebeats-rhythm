import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";

const reels = [
  {
    id: 1,
    title: "Delicious Food 1",
    videoUrl: "/our-delicious-food-1.webm"
  },
  {
    id: 2,
    title: "Persian Reel",
    videoUrl: "/cb persian reel.webm"
  },
  {
    id: 3,
    title: "Winter Reel",
    videoUrl: "/CB Winter Reel .webm"
  },
];

const FoodCategories = () => (
  <section className="bg-muted py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="What We Serve" title="Our Delicious Food" description="Watch our latest reels and explore the delicious world of CafeBeats." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-10 max-w-5xl mx-auto">
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
