import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap, Megaphone, Palette, Heart, Users, MapPin, Lightbulb, Send, Check, Star, Eye } from "lucide-react";
import { toast } from "sonner";
import store1 from "@/assets/store-1.jpg";

const supports = [
  { icon: Heart, title: "Genuine Commitments", desc: "Our promise of transparency and long-term partnership" },
  { icon: Users, title: "Working with Experience Team", desc: "Expert guidance from founders and operational leads" },
  { icon: Users, title: "Manpower Support", desc: "Assistance in recruitment and staff management" },
  { icon: Megaphone, title: "Grand Opning Event Launch", desc: "(With Marketing Guidelines)" },
  { icon: GraduationCap, title: "Kitchen Equipment & Accessories Purchase Support", desc: "(With Nominal Rates than Market)" },
  { icon: MapPin, title: "Complete Site Development Support", desc: "Expert assistance in location selection and site layout" },
  { icon: Lightbulb, title: "Regular Innovations in Menu", desc: "Periodic introduction of new flavors and trending beverages" },
  { icon: Palette, title: "Interior Planning, Designing & Developments Support", desc: "Creating a themed, premium atmosphere for your café" },
];

const investmentModels = [
  {
    title: "Lounge Model",
    size: "800-1200 sq.ft",
    costs: [
      { label: "Area Of Shop (Sq.Ft):", value: "800-1200" },
      { label: "Franchise Fees:", value: "12 Lakh" },
      { label: "Kitchen Equipment:", value: "12 Lakh" },
      { label: "Interior & Civil Work:", value: "25-28 Lakh" },
      { label: "Opening/Marketing Co.:", value: "2 Lakh" },
    ],
    total: "45-50 Lakh",
    popular: false,
  },
  {
    title: "Signature Model",
    size: "2000-6000 sq.ft",
    costs: [
      { label: "Area Of Shop (Sq.Ft):", value: "2000-6000" },
      { label: "Franchise Fees:", value: "15 Lakh" },
      { label: "Kitchen Equipment:", value: "18-20 Lakh" },
      { label: "Interior & Civil Work:", value: "40-50 Lakh" },
      { label: "Opening/Marketing Co.:", value: "3 Lakh" },
    ],
    total: "80-90 Lakh",
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

        {/* Support */}
        <section className="bg-secondary/30 py-24 md:py-32">
          <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
              <ScrollReveal>
                <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20">
                  What You Get
                </div>
                <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl">Brand Support</h2>
              </ScrollReveal>
            </div>

            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              {supports.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-dark text-accent transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-white shadow-xl">
                      <s.icon className="h-10 w-10" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-3">{s.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Simplified Inquiry */}
        <section className="py-16 md:py-24 bg-muted/30 border-y border-border/50">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-4xl uppercase tracking-wider">For More Inquire</h2>
              <div className="mt-8 flex flex-col items-center justify-center gap-6">
                <a 
                  href="tel:+919924574894" 
                  className="font-display text-xl font-bold text-accent transition-colors hover:text-accent-light md:text-3xl"
                >
                  +91 99245 74894
                </a>
                
                <p className="max-w-xl text-base text-muted-foreground">
                  Have questions about our franchise models? Reach out to us directly on WhatsApp for instant assistance and detailed brochures.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const message = encodeURIComponent("Hi CafeBeats, I'm interested in knowing more about your Franchise Opportunities.");
                    window.open(`https://wa.me/919924574894?text=${message}`, '_blank');
                  }}
                  className="mt-4 flex items-center gap-3 rounded-full bg-gradient-accent px-8 py-4 font-display text-base font-bold text-foreground shadow-accent"
                >
                  <Send className="h-5 w-5" /> Chat on WhatsApp
                </motion.button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Why Royalty Section */}
        <section className="py-24 md:py-32 bg-background overflow-hidden border-t border-border">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <ScrollReveal>
                <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20">
                  Transparency
                </div>
                <h2 className="font-display text-4xl font-bold text-foreground md:text-5xl mb-12">Why Royalty?</h2>
                
                <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 text-left">
                  {[
                    "Man power support.",
                    "Social media postings and designing support.",
                    "Raw Material Management And Supply Support.",
                    "Monthly Visits of Company Operation Manager.",
                    "Staff Work Audit Regularly.",
                    "New Product Training Support.",
                    "Dedicated Operation Manager Will Also be Assigned For Direct Discus",
                    "Regular Guidance For Sales Growth."
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_rgba(var(--accent-rgb),0.5)] group-hover:scale-150 transition-transform" />
                      <p className="text-lg text-foreground/80 font-medium group-hover:text-accent transition-colors">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Investment Structure Section */}
        <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle subtitle="Choose the perfect franchise model for your business goal" title="INVESTMENT STRUCTURE" centered />
            
            <div className="mt-16 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {investmentModels.map((model, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className={`relative flex flex-col h-full rounded-3xl border p-10 transition-all hover:shadow-2xl hover:shadow-accent/10 ${
                    model.popular 
                      ? "bg-gradient-dark border-accent/30 shadow-xl" 
                      : "bg-card border-border shadow-warm hover:border-accent/20"
                  }`}>
                    {model.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-gradient-accent px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                        <Star className="h-3 w-3 fill-current" /> Recommended
                      </div>
                    )}
                    
                    <div className="text-center mb-10">
                      <h3 className={`font-display text-2xl font-bold ${model.popular ? "text-white" : "text-foreground"}`}>{model.title}</h3>
                      <p className={`mt-1 font-medium ${model.popular ? "text-accent" : "text-muted-foreground"}`}>{model.size}</p>
                    </div>

                    <div className="space-y-5 flex-grow">
                      {model.costs.map((cost, idx) => (
                        <div key={idx} className={`flex items-center justify-between text-sm border-b pb-3 ${model.popular ? "border-white/10" : "border-border/50"}`}>
                          <span className={`${model.popular ? "text-white/70" : "text-muted-foreground"}`}>{cost.label}</span>
                          <span className={`font-bold ${model.popular ? "text-white" : "text-foreground"}`}>{cost.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className={`mt-8 pt-8 border-t ${model.popular ? "border-white/10" : "border-border"}`}>
                      <div className="flex items-center justify-between mb-8">
                        <span className={`font-bold ${model.popular ? "text-white" : "text-foreground"}`}>Total Investment:</span>
                        <span className={`font-display text-3xl font-bold ${model.popular ? "text-accent" : "text-accent"}`}>{model.total}</span>
                      </div>
                      
                      <button 
                        onClick={() => {
                          const message = encodeURIComponent(`Hi, I am interested in the ${model.title} of CafeBeats.`);
                          window.open(`https://wa.me/919924574894?text=${message}`, '_blank');
                        }}
                        className={`w-full rounded-xl py-4 font-display text-sm font-bold transition-all ${
                          model.popular 
                            ? "bg-gradient-accent text-white shadow-accent" 
                            : "bg-secondary text-foreground hover:bg-accent hover:text-white border border-border"
                        }`}
                      >
                        Inquire Now
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="mt-16 rounded-3xl bg-card p-10 border border-border shadow-warm max-w-5xl mx-auto">
                <h4 className="font-display text-xl font-bold text-foreground mb-6">Important Notes:</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  {[
                    "*Government taxes as applicable.",
                    "*Investment of store setup cost shown as estimated.",
                    "*Cost shown is an estimate and will depend on area of shop/property.",
                    "*Franchise fees 12 Lakh for up to 2000 sq.ft area.",
                    "*Franchise fees 15 Lakh for 2000+ sq.ft area.",
                    "*Franchisee have to pay additional 1 lakhs refundable security deposit apart from franchise fees. (Lock-in period 1 year)"
                  ].map((note, idx) => (
                    <div key={idx} className="flex gap-3 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {note}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        {/* ROI Section */}
        <section className="py-24 md:py-36 bg-background relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-8 relative z-10">
            <div className="text-center mb-16">
              <ScrollReveal>
                <div className="inline-block rounded-full bg-accent/10 px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-widest text-accent border border-accent/20">
                  Financial Projections
                </div>
                <h2 className="font-display text-4xl font-bold text-foreground md:text-6xl mb-6">Return on Investment (ROI)</h2>
                <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
                  Explore our comprehensive financial projections based on different growth scenarios.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="mt-8 overflow-x-auto rounded-[2rem] border border-border bg-card shadow-2xl">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="border-b border-border">
                    <th className="p-8 font-display text-xl font-bold text-foreground border-r border-border w-1/4">Metric</th>
                    <th className="p-8 font-display text-xl font-bold text-center border-r border-border text-muted-foreground">Conservative</th>
                    <th className="p-8 font-display text-xl font-bold text-center border-r border-border text-accent">Moderate</th>
                    <th className="p-8 font-display text-xl font-bold text-center bg-accent/5 text-accent relative">
                      Optimistic
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[10px] bg-accent text-white px-2 py-0.5 rounded-full uppercase tracking-tighter">Growth</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    { label: "Avg. Daily Order", cons: "50", mod: "80", opt: "100" },
                    { label: "Avg. Billing Size", cons: "400", mod: "525", opt: "650" },
                    { label: "Avg. Daily Sales", cons: "20,000", mod: "42,000", opt: "65,000" },
                    { label: "Total Monthly Sales", cons: "6,00,000", mod: "12,60,000", opt: "19,50,000" },
                    { label: "Gross Profit (60%)", cons: "3,60,000", mod: "7,56,000", opt: "11,70,000" },
                    { label: "Fixed Cost", cons: "", mod: "", opt: "", isHeader: true },
                    { label: "Rent", cons: "80,000", mod: "1,20,000", opt: "1,80,000" },
                    { label: "Staff Salary", cons: "75,000", mod: "1,50,000", opt: "2,50,000" },
                    { label: "Electricity", cons: "15,000", mod: "30,000", opt: "40,000" },
                    { label: "Man Power Accommodation", cons: "10,000", mod: "15,000", opt: "20,000" },
                    { label: "Marketing & Other Expenses", cons: "20,000", mod: "30,000", opt: "40,000" },
                    { label: "Royalty (5%)", cons: "30,000", mod: "63,000", opt: "97,500" },
                  ].map((row, idx) => (
                    <tr key={idx} className={`group hover:bg-muted/30 transition-colors ${row.isHeader ? "bg-muted/50" : ""}`}>
                      <td className={`p-5 pl-8 font-medium border-r border-border ${row.isHeader ? "text-accent font-bold uppercase tracking-wider text-sm" : "text-foreground/80"}`}>
                        {row.label}
                      </td>
                      {!row.isHeader && (
                        <>
                          <td className="p-5 text-center text-muted-foreground border-r border-border">{row.cons}</td>
                          <td className="p-5 text-center text-foreground border-r border-border">{row.mod}</td>
                          <td className="p-5 text-center text-accent font-bold bg-accent/[0.02]">{row.opt}</td>
                        </>
                      )}
                      {row.isHeader && <td className="p-5" colSpan={3}></td>}
                    </tr>
                  ))}
                  <tr className="bg-accent/10 border-t-2 border-accent/20">
                    <td className="p-8 font-display text-2xl font-bold text-foreground border-r border-border">Monthly Returns</td>
                    <td className="p-8 text-center font-display text-2xl font-bold text-muted-foreground border-r border-border">₹1,30,000</td>
                    <td className="p-8 text-center font-display text-3xl font-bold text-accent border-r border-border">₹3,48,000</td>
                    <td className="p-8 text-center font-display text-4xl font-bold text-accent">₹5,42,500</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
