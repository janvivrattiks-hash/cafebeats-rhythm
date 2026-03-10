import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="bg-gradient-coffee text-cream">
    <div className="container mx-auto px-4 py-16 md:px-8">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="mb-4 flex items-center gap-2">
            <Coffee className="h-7 w-7 text-gold" />
            <span className="font-display text-2xl font-bold">CafeBeats</span>
          </div>
          <p className="text-sm leading-relaxed text-cream/70">
            Where Coffee Meets Rhythm. Premium café experience with handcrafted beverages and delicious food.
          </p>
          <div className="mt-6 flex gap-4">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="rounded-full border border-cream/20 p-2.5 transition-all hover:border-gold hover:bg-gold/10">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
          {[
            { label: "Home", path: "/" },
            { label: "About Us", path: "/about" },
            { label: "Our Menu", path: "/menu" },
            { label: "Franchise", path: "/franchise" },
            { label: "Our Stores", path: "/stores" },
          ].map((link) => (
            <Link key={link.path} to={link.path} className="mb-2 block text-sm text-cream/70 transition-colors hover:text-gold">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-4 font-display text-lg font-semibold">Contact Us</h4>
          <div className="space-y-3 text-sm text-cream/70">
            <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" /> 123 Coffee Street, Café Lane, Mumbai, India</div>
            <div className="flex items-center gap-3"><Phone className="h-4 w-4 shrink-0 text-gold" /> +91 98765 43210</div>
            <div className="flex items-center gap-3"><Mail className="h-4 w-4 shrink-0 text-gold" /> hello@cafebeats.in</div>
          </div>
        </div>

        {/* Hours */}
        <div>
          <h4 className="mb-4 font-display text-lg font-semibold">Opening Hours</h4>
          <div className="space-y-2 text-sm text-cream/70">
            <p>Monday – Friday: 8AM – 10PM</p>
            <p>Saturday – Sunday: 9AM – 11PM</p>
            <p className="mt-4 text-gold">Happy Hours: 3PM – 5PM Daily</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-cream/10 pt-6 text-center text-sm text-cream/50">
        © {new Date().getFullYear()} CafeBeats. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
