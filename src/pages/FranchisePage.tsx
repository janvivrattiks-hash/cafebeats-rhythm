import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap, Megaphone, Palette, Truck, Eye, Send, Check, Star } from "lucide-react";
import { toast } from "sonner";
import store1 from "@/assets/store-1.jpg";

const supports = [
  { icon: GraduationCap, title: "Training Support", desc: "Complete barista and operations training for your team" },
  { icon: Megaphone, title: "Marketing Support", desc: "Brand marketing, social media, and promotional campaigns" },
  { icon: Palette, title: "Interior Design", desc: "Premium café interior design and setup assistance" },
  { icon: Truck, title: "Supply Chain", desc: "Reliable supply of raw materials and ingredients" },
];

const investmentModels = [
  {
    title: "Kiosk Model",
    size: "200-300 sq.ft",
    costs: [
      { label: "Franchise Fee:", value: "₹3 Lakh" },
      { label: "Kitchen Equipment:", value: "₹4-5 Lakh" },
      { label: "Interior & Furniture:", value: "₹5-7 Lakh" },
      { label: "Marketing Cost:", value: "₹1 Lakh" },
    ],
    total: "₹15-16 Lakh",
    popular: false,
  },
  {
    title: "Lounge Model",
    size: "800-1000 sq.ft",
    costs: [
      { label: "Franchise Fee:", value: "₹5 Lakh" },
      { label: "Kitchen Equipment:", value: "₹5-6 Lakh" },
      { label: "Interior & Furniture:", value: "₹15-16 Lakh" },
      { label: "Marketing Cost:", value: "₹1.5 Lakh" },
    ],
    total: "₹22-26 Lakh",
    popular: true,
  },
  {
    title: "Open Plot Model",
    size: "2000-3000 sq.ft",
    costs: [
      { label: "Franchise Fee:", value: "₹6.5 Lakh" },
      { label: "Kitchen Equipment:", value: "₹6-7 Lakh" },
      { label: "Interior & Furniture:", value: "₹20-25 Lakh" },
      { label: "Marketing Cost:", value: "₹2 Lakh" },
    ],
    total: "₹35-40 Lakh",
    popular: false,
  },
];

const investments = [
  { label: "Store Setup Cost", value: "₹8–12 Lakhs", note: "Includes interior, furniture, signage" },
  { label: "Equipment Cost", value: "₹4–6 Lakhs", note: "Coffee machines, refrigeration, POS" },
  { label: "Royalty Model", value: "5% Monthly", note: "On gross revenue" },
];

const FranchisePage = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex h-[60vh] min-h-[400px] items-center overflow-hidden">
        <img src="/banner-3.webp" alt="Franchise Opportunity" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl font-bold text-white md:text-6xl">Franchise Opportunity</h1>
            <p className="mt-4 text-lg text-white/80">Partner with one of India's fastest growing café brands</p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6 font-display text-3xl font-bold md:text-5xl">Why Partner with CafeBeats?</h2>
              <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
                We've built a brand that resonates with the youth — blending the love for exceptional coffee 
                with a modern, high-energy environment. Our proven business model and robust support system 
                make us the ideal choice for aspiring entrepreneurs.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Proven ROI", text: "Healthy profit margins and optimized operational costs ensuring a quick return on investment." },
                  { title: "End-to-End Support", text: "From site selection and interior design to staff training and supply chain management." },
                  { title: "Marketing Muscle", text: "Nationwide brand presence and target digital marketing campaigns to drive footfall." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-lg">
                      <Check className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="font-bold">{item.title}</h4>
                      <p className="text-muted-foreground">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-muted p-8 md:p-12"
            >
              <h3 className="mb-8 font-display text-2xl font-bold">Investment Breakdown</h3>
              <div className="space-y-6">
                {investments.map((stat, i) => (
                  <div key={i} className="flex items-center justify-between border-b border-border pb-4 last:border-0">
                    <div>
                      <h4 className="font-semibold">{stat.label}</h4>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.note}</p>
                    </div>
                    <span className="font-display text-xl font-bold text-accent">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

        {/* Support */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle subtitle="What You Get" title="Brand Support" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {supports.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group rounded-2xl border border-border bg-card p-6 text-center shadow-warm transition-all hover:-translate-y-1 hover:shadow-accent">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-accent transition-transform group-hover:scale-110">
                      <s.icon className="h-7 w-7 text-foreground" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle subtitle="Investment Details" title="INVESTMENT STRUCTURE" centered />
            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {investmentModels.map((model, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`relative flex flex-col h-full rounded-2xl border bg-card p-10 shadow-warm transition-transform hover:-translate-y-2 ${model.popular ? "border-accent ring-1 ring-accent/20" : "border-border"}`}>
                    {model.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-foreground shadow-accent">
                        <Star className="h-3 w-3 fill-current" /> Most Popular
                      </div>
                    )}
                    
                    <div className="text-center mb-10">
                      <h3 className="font-display text-2xl font-bold">{model.title}</h3>
                      <p className="mt-1 text-muted-foreground">{model.size}</p>
                    </div>

                    <div className="space-y-5 flex-grow">
                      {model.costs.map((cost, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground font-medium">{cost.label}</span>
                          <span className="font-bold text-foreground">{cost.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 border-t border-border pt-8">
                      <div className="flex items-center justify-between">
                        <span className="font-display text-base font-bold">Total Investment:</span>
                        <span className="font-display text-2xl font-bold text-accent">{model.total}</span>
                      </div>
                    </div>

                    <motion.button 
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        const message = encodeURIComponent(`Hi, I am interested in the ${model.title} franchise model of CafeBeats.`);
                        window.open(`https://wa.me/919924574894?text=${message}`, '_blank');
                      }}
                      className={`mt-10 w-full rounded-xl py-4 font-display text-sm font-bold transition-all ${
                        model.popular 
                          ? "bg-gradient-accent text-foreground shadow-accent" 
                          : "bg-muted text-muted-foreground hover:bg-muted/80 border border-border"
                      }`}
                    >
                      Inquire Now
                    </motion.button>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-16 rounded-2xl bg-card p-8 border border-border shadow-warm">
                <h4 className="font-display text-xl font-bold text-foreground mb-6">Important Notes:</h4>
                <ul className="grid gap-3 md:grid-cols-2">
                  {[
                    "Government taxes as applicable",
                    "Franchise fees ₹5 Lakh for 400+ sq.ft area",
                    "Cost shown is an estimate and will depend on area of shop/property",
                    "Franchisee have to pay additional INR 50,000 refundable security deposit apart from franchise fees (Lock-in period 1 year)",
                    "For coffee setup additional Franchise Fee ₹1.5 lakh"
                  ].map((note, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-gradient-dark py-20 md:py-28">
          <div className="container mx-auto px-4 text-center md:px-8">
            <ScrollReveal>
              <Eye className="mx-auto mb-4 h-12 w-12 text-accent" />
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl">Our Vision</h2>
              <p className="mx-auto mt-4 max-w-2xl text-white/70">
                To establish CafeBeats as India's most loved café brand with 500+ outlets by 2028, 
                creating thousands of jobs and building a community of coffee enthusiasts.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Simplified Inquiry */}
        <section id="inquiry-form" className="py-20 md:py-32 bg-muted/30">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl uppercase tracking-wider">For More Inquire</h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-6">
                <a 
                  href="tel:+919924574894" 
                  className="font-display text-2xl font-bold text-accent transition-colors hover:text-accent-light md:text-4xl"
                >
                  +91 99245 74894
                </a>
                
                <p className="max-w-xl text-lg text-muted-foreground">
                  Have questions about our franchise models? Reach out to us directly on WhatsApp for instant assistance and detailed brochures.
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = encodeURIComponent("Hi CafeBeats, I'm interested in knowing more about your Franchise Opportunities.");
                    window.open(`https://wa.me/919924574894?text=${message}`, '_blank');
                  }}
                  className="mt-4 flex items-center gap-3 rounded-full bg-gradient-accent px-10 py-5 font-display text-lg font-bold text-foreground shadow-accent"
                >
                  <Send className="h-5 w-5" /> Chat on WhatsApp
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FranchisePage;
