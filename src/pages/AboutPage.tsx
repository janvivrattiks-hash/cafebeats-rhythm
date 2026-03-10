import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import { Eye, Target, Heart, Lightbulb, Users, Star } from "lucide-react";
import hero2 from "@/assets/hero-2.jpg";
import store2 from "@/assets/store-2.jpg";

const timeline = [
  { year: "2022", event: "Brand Started – First CafeBeats café opened in Mumbai" },
  { year: "2023", event: "10 Stores – Expanded across 5 major cities" },
  { year: "2024", event: "25 Stores – Launched franchise model" },
  { year: "2025", event: "50+ Stores – Pan-India presence achieved" },
];

const values = [
  { icon: Star, label: "Quality", desc: "Only the finest ingredients in every cup" },
  { icon: Heart, label: "Customer Happiness", desc: "Your smile is our success" },
  { icon: Lightbulb, label: "Innovation", desc: "Always experimenting with new flavors" },
  { icon: Users, label: "Community", desc: "Building connections one coffee at a time" },
];

const AboutPage = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
        <img src={store2} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-chocolate/70" />
        <div className="relative z-10 text-center">
          <ScrollReveal>
            <h1 className="font-display text-4xl font-bold text-cream md:text-6xl">About CafeBeats</h1>
            <p className="mt-4 text-lg text-cream/80">Our Journey, Our Passion</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-12 px-4 md:grid-cols-2 md:px-8">
          <ScrollReveal direction="left">
            <div className="overflow-hidden rounded-2xl">
              <img src={hero2} alt="Our Story" className="w-full object-cover" />
            </div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <span className="text-gradient-gold text-sm font-semibold uppercase tracking-[0.2em]">Our Story</span>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">About CafeBeats</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Born from a passion for great coffee and good vibes, CafeBeats started as a small café in Mumbai in 2022. 
              What began as a dream to create the perfect coffee experience has grown into a nationwide movement. 
              We believe every cup of coffee should be an experience — one that blends premium quality with a 
              warm, inviting atmosphere that makes you feel at home.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Today, CafeBeats is more than just a café chain. We're a community of coffee lovers, food enthusiasts, 
              and dreamers who believe that great things happen over a cup of coffee.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="Our Journey" title="Growth Plan of CafeBeats" />
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-gold to-coffee md:left-1/2 md:-translate-x-px" />
            {timeline.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.15} direction={i % 2 === 0 ? "left" : "right"}>
                <div className={`relative mb-10 flex ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                  <div className="absolute left-4 top-2 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-gold bg-background md:left-1/2" />
                  <div className={`ml-10 rounded-2xl border border-border bg-card p-6 shadow-warm md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"}`}>
                    <span className="text-xl font-bold text-accent">{t.year}</span>
                    <p className="mt-2 text-sm text-muted-foreground">{t.event}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="What Drives Us" title="Vision & Mission" />
          <div className="grid gap-6 md:grid-cols-2">
            {[
              { icon: Eye, title: "Our Vision", text: "To become India's most loved café brand — creating spaces where people connect, create, and celebrate life over exceptional coffee." },
              { icon: Target, title: "Our Mission", text: "To deliver premium quality beverages and food in a warm, inviting atmosphere while building a sustainable business that empowers local communities." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="rounded-2xl border border-border bg-card p-8 shadow-warm transition-all hover:shadow-gold">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold">
                    <item.icon className="h-7 w-7 text-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gradient-coffee py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="What We Stand For" title="Our Values" light />
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-cream/10 bg-cream/5 p-6 text-center backdrop-blur-sm transition-all hover:border-gold/30 hover:bg-cream/10">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gold/20 transition-transform group-hover:scale-110">
                    <v.icon className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-cream">{v.label}</h3>
                  <p className="mt-2 text-xs text-cream/60">{v.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default AboutPage;
