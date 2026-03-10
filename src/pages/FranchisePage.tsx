import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import SectionTitle from "@/components/SectionTitle";
import { GraduationCap, Megaphone, Palette, Truck, Eye, Send } from "lucide-react";
import { toast } from "sonner";
import store1 from "@/assets/store-1.jpg";

const supports = [
  { icon: GraduationCap, title: "Training Support", desc: "Complete barista and operations training for your team" },
  { icon: Megaphone, title: "Marketing Support", desc: "Brand marketing, social media, and promotional campaigns" },
  { icon: Palette, title: "Interior Design", desc: "Premium café interior design and setup assistance" },
  { icon: Truck, title: "Supply Chain", desc: "Reliable supply of raw materials and ingredients" },
];

const investments = [
  { label: "Store Setup Cost", value: "₹8–12 Lakhs", note: "Includes interior, furniture, signage" },
  { label: "Equipment Cost", value: "₹4–6 Lakhs", note: "Coffee machines, refrigeration, POS" },
  { label: "Royalty Model", value: "5% Monthly", note: "On gross revenue" },
];

const FranchisePage = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", city: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll get back to you soon.");
    setForm({ name: "", phone: "", email: "", city: "", budget: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
          <img src={store1} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-chocolate/70" />
          <div className="relative z-10 text-center">
            <ScrollReveal>
              <h1 className="font-display text-4xl font-bold text-cream md:text-6xl">Franchise Opportunity</h1>
              <p className="mt-4 text-lg text-cream/80">Partner with one of India's fastest growing café brands</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Intro */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle subtitle="Join the Family" title="Why CafeBeats?" description="CafeBeats is more than a café — it's a lifestyle brand that resonates with the modern Indian consumer. Join our franchise network and be part of a rapidly growing community." />
          </div>
        </section>

        {/* Support */}
        <section className="bg-secondary py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle subtitle="What You Get" title="Brand Support" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {supports.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="group rounded-2xl border border-border bg-card p-6 text-center shadow-warm transition-all hover:-translate-y-1 hover:shadow-gold">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-gold transition-transform group-hover:scale-110">
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

        {/* Investment */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle subtitle="Investment Details" title="Investment Structure" />
            <div className="grid gap-6 md:grid-cols-3">
              {investments.map((inv, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-warm">
                    <h3 className="font-display text-lg font-bold text-foreground">{inv.label}</h3>
                    <p className="mt-3 text-3xl font-bold text-gradient-gold">{inv.value}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{inv.note}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal delay={0.3}>
              <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6">
                <h4 className="font-display text-lg font-bold text-foreground">Important Notes</h4>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-muted-foreground">
                  <li>Total investment ranges from ₹12–18 Lakhs depending on location and size</li>
                  <li>ROI expected within 12–18 months</li>
                  <li>Agreement period: 5 years (renewable)</li>
                  <li>Area requirement: 300–600 sq ft</li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision */}
        <section className="bg-gradient-coffee py-20 md:py-28">
          <div className="container mx-auto px-4 text-center md:px-8">
            <ScrollReveal>
              <Eye className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h2 className="font-display text-3xl font-bold text-cream md:text-4xl">Our Vision</h2>
              <p className="mx-auto mt-4 max-w-2xl text-cream/70">
                To establish CafeBeats as India's most loved café brand with 500+ outlets by 2028, 
                creating thousands of jobs and building a community of coffee enthusiasts.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Form */}
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4 md:px-8">
            <SectionTitle subtitle="Get In Touch" title="Franchise Inquiry" description="Fill out the form below and our team will get back to you within 24 hours." />
            <motion.form
              onSubmit={handleSubmit}
              className="mx-auto max-w-2xl space-y-5 rounded-2xl border border-border bg-card p-8 shadow-warm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="grid gap-5 md:grid-cols-2">
                {[
                  { key: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { key: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
                  { key: "email", label: "Email", type: "email", placeholder: "you@example.com" },
                  { key: "city", label: "City", type: "text", placeholder: "Your city" },
                ].map((f) => (
                  <div key={f.key}>
                    <label className="mb-1.5 block text-sm font-medium text-foreground">{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      required
                      value={form[f.key as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Investment Budget</label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  required
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                >
                  <option value="">Select budget range</option>
                  <option value="10-15">₹10–15 Lakhs</option>
                  <option value="15-20">₹15–20 Lakhs</option>
                  <option value="20+">₹20+ Lakhs</option>
                </select>
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-foreground">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about yourself..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gradient-coffee px-8 py-3.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-gold"
              >
                <Send className="h-4 w-4" /> Submit Inquiry
              </motion.button>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default FranchisePage;
