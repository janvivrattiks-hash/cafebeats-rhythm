import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <img src="/banner-3.webp" alt="Contact Us" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70" />
        <div className="container relative z-10 mx-auto px-4 text-center md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-white"
          >
            <h1 className="font-display text-4xl font-bold text-white md:text-6xl uppercase tracking-wider">Contact Us</h1>
            <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">We're here to help and answer any question you might have. We look forward to hearing from you.</p>
          </motion.div>
        </div>
      </section>

      <main className="py-20">
        <section className="container mx-auto px-4 md:px-8">
          <div className="mb-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-3xl md:text-5xl font-bold mb-6 text-foreground"
            >
              Get In <span className="text-gradient-accent">Touch</span>
            </motion.h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="bg-card p-8 rounded-3xl shadow-warm border border-border/50">
                <h3 className="font-display text-2xl font-bold mb-8">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-premium p-3 rounded-2xl">
                      <MapPin className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Our Location</h4>
                      <p className="text-muted-foreground">G-11 Blue Stone Building, Shyamdham MandirChowk, Sarthana Jakat Naka, Surat, Gujarat 395013</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-premium p-3 rounded-2xl">
                      <Phone className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone Number</h4>
                      <p className="text-muted-foreground">+91 99245 74894</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-premium p-3 rounded-2xl">
                      <Mail className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Address</h4>
                      <p className="text-muted-foreground">info@cafebeats.in</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/cafebeats.india/profilecard/?igsh=MW54dGJldTJscWhsOQ" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-gradient-premium hover:text-white transition-all duration-300">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com/cafebeats.restaurant" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-gradient-premium hover:text-white transition-all duration-300">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="h-[300px] w-full bg-card rounded-3xl overflow-hidden shadow-warm transition-all duration-500 border border-border/50">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14875.947687777123!2d72.894858406842!3d21.23236718749165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0454de94c5a45%3A0xf682be781d2bad16!2sCafe%20Beats%20Restaurant!5e0!3m2!1sen!2sin!4v1773332653132!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card p-8 md:p-12 rounded-3xl shadow-warm border border-border/50 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-premium opacity-10 rounded-bl-full -mr-10 -mt-10" />

              <h3 className="font-display text-2xl font-bold mb-8">Send Us a Message</h3>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <Input placeholder="John Doe" className="bg-background/50 border-border focus:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <Input type="email" placeholder="john@example.com" className="bg-background/50 border-border focus:ring-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <Input placeholder="How can we help?" className="bg-background/50 border-border focus:ring-accent" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <Textarea placeholder="Type your message here..." className="min-h-[150px] bg-background/50 border-border focus:ring-accent" />
                </div>

                <Button className="w-full bg-gradient-premium hover:shadow-lg text-white font-bold py-6 rounded-2xl group transition-all">
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
