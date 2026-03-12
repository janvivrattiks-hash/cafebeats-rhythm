import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";
import SectionTitle from "../SectionTitle";

const reels = [
  {
    id: 1,
    title: "Latte Art Magic ☕✨",
    videoUrl: "/coffee.mp4"
  },
  {
    id: 2,
    title: "Morning Vibes at CafeBeats 🌅",
    videoUrl: "/coffee.mp4"
  },
  {
    id: 3,
    title: "Our Signature Cold Brew 🧊",
    videoUrl: "/coffee.mp4"
  },
];

const FoodCategories = () => (
  <section className="bg-muted py-20 md:py-28">
    <div className="container mx-auto px-4 md:px-8">
      <SectionTitle subtitle="What We Serve" title="Our Delicious Food" description="Watch our latest reels and explore the delicious world of CafeBeats." />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-10 max-w-5xl mx-auto">
        {reels.map((reel, i) => (
          <ScrollReveal key={reel.id} delay={i * 0.2}>
            <div className="group relative block overflow-hidden rounded-3xl bg-black shadow-warm aspect-[9/16] cursor-pointer">
              {/* Auto-playing Background Video */}
              <video
                src={reel.videoUrl}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none" />

              {/* Reel Info Bottom */}
              <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end pointer-events-none">
                <h3 className="font-display text-lg font-bold text-white leading-tight drop-shadow-md z-10 relative">{reel.title}</h3>
                <p className="mt-2 text-xs text-white/70 font-medium drop-shadow-md z-10 relative">@cafebeats.india</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  </section>
);

export default FoodCategories;
