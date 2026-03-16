import { motion } from "framer-motion";
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
        <img src="/banner-1.webp" alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl font-bold text-white md:text-6xl">About CafeBeats</h1>
            <p className="mt-4 text-lg text-white/80">Our Journey, Our Passion</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-full min-h-[300px] overflow-hidden rounded-3xl"
            >
              <img src="/about-cafebeat.webp" alt="Cafe Interior" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">About Cafe Beats</h2>
              <div className="space-y-4 text-base leading-relaxed">
                <p className="text-muted-foreground">
                  CafeBeats is a chain of progressive, themed cafés founded by Dr. Mahesh Khunt and Mr. Shailesh Kheni in 2018. With a shared vision rooted in hospitality, we create destinations where people enjoy fine food, music, and leisure.
                </p>
                <h3 className="mb-4 font-display text-3xl font-bold md:text-5xl">Growth Plan</h3>
                <p className="text-muted-foreground capitalize">
                  With A Slow Yet Sustainablerate , Brand Cafebeats Is Growing Well . All The 6 Outlets Are Operational And Are The Most Liked Outlets In The Locality. As Per The Vision 2022, Cafe Beats Is Planning To Reach 20 Outlets Across India With Upcoming Outlets Of Surat , Anand, Ahmedabad, Daman, Navsari,
                  And Many More . Strong Business Support , Visionary Ownership And Collective Strategy Is Helping The Brand To Satisfy The Brand Promise And Customer Expectations. With The Lowest Investment In The Industry, Cafebeats Ensures Highroi
                  And Sustainable Growth.

                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-muted py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle title="Our Milestones" subtitle="The journey of rhythm and brew" centered />

          <div className="relative mt-16 max-w-4xl mx-auto">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-primary to-accent md:left-1/2 md:-translate-x-px" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative mb-12 flex flex-col md:mb-20 ${i % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg md:absolute md:left-1/2 md:-translate-x-5 z-10">
                  <div className="h-4 w-4 rounded-full bg-accent" />
                </div>

                <div className={`mt-4 rounded-2xl bg-card p-6 shadow-warm md:mt-0 md:w-[45%] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <span className="font-display text-xl font-bold text-accent">{item.year}</span>
                  <p className="mt-2 text-muted-foreground">{item.event}</p>
                </div>
              </motion.div>
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
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="h-full rounded-2xl border border-border bg-card p-8 shadow-warm transition-all hover:shadow-primary flex flex-col">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent">
                    <item.icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground flex-grow">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-muted/30 py-20 md:py-28 border-y border-border/50">
        <div className="container mx-auto px-4 md:px-8">
          <SectionTitle subtitle="What We Stand For" title="Our Values" />
          <div className="grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="group rounded-2xl border border-border bg-card p-6 text-center shadow-sm transition-all hover:border-accent/30 hover:shadow-warm">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent/10 transition-transform group-hover:scale-110">
                    <v.icon className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">{v.label}</h3>
                  <p className="mt-2 text-xs text-muted-foreground">{v.desc}</p>
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
