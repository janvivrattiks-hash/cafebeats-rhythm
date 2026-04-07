import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send, Instagram, Facebook } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";


const ContactPage = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <img src="/banner-5.webp" alt="Contact Us" className="absolute inset-0 h-full w-full object-cover" />
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
                      <p className="text-muted-foreground">
                        ICON RIO<br />
                        707- 7 th floor<br />
                        CAFEBEATS IND PVT LTD<br />
                        PIPLOD<br />
                        SURAT
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-premium p-3 rounded-2xl">
                      <Phone className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Phone Number</h4>
                      <p className="text-muted-foreground">
                        <a href="tel:+919924574894" className="hover:text-accent transition-colors">+91 99245 74894</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-premium p-3 rounded-2xl">
                      <Mail className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Email Address</h4>
                      <p className="text-muted-foreground">
                        <a href="mailto:Cafebeats2018@gmail.com" className="hover:text-accent transition-colors">Cafebeats2018@gmail.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex gap-4">
                    <a href="https://www.instagram.com/cafebeats.india/profilecard/?igsh=MW54dGJldTJscWhsOQ" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-black hover:text-white transition-all duration-300">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="https://www.facebook.com/share/18Tnmm6ycu/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-secondary hover:bg-black hover:text-white transition-all duration-300">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
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

              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  const formData = new FormData(e.currentTarget);
                  const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                    target_email: "info@cafebeats.n"
                  };

                  try {
                    const response = await fetch('/webhook/contact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data),
                    });

                    if (response.ok) {
                      setIsSuccess(true);
                      toast({
                        title: "Message Sent!",
                        description: "Your message has been received. We'll get back to you soon.",
                      });
                      (e.target as HTMLFormElement).reset();
                    } else {
                      throw new Error('Failed to send message');
                    }
                  } catch (error) {
                    toast({
                      variant: "destructive",
                      title: "Error",
                      description: "Something went wrong. Please try again later.",
                    });
                  } finally {
                    setIsSubmitting(false);
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name</label>
                    <input name="name" required placeholder="John Doe" className="flex h-12 w-full rounded-xl border border-border bg-background/50 px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email Address</label>
                    <input name="email" type="email" required placeholder="john@example.com" className="flex h-12 w-full rounded-xl border border-border bg-background/50 px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Subject</label>
                  <input name="subject" required placeholder="How can we help?" className="flex h-12 w-full rounded-xl border border-border bg-background/50 px-4 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message</label>
                  <textarea name="message" required placeholder="Type your message here..." className="flex min-h-[150px] w-full rounded-xl border border-border bg-background/50 px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center w-full bg-gradient-premium hover:shadow-lg text-white font-bold py-6 rounded-2xl group transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      Sending...
                      <Loader2 className="ml-2 h-4 w-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </>
                  )}
                </button>
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
