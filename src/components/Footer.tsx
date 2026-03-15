import { Link } from "react-router-dom";
import { Coffee, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img src="/logo.png" alt="CafeBeats Logo" className="h-8 md:h-10 w-auto object-contain" />
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Where Coffee Meets Rhythm. Premium café experience with handcrafted beverages and delicious food.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="https://www.facebook.com/cafebeats.restaurant" target="_blank" rel="noopener noreferrer" className="rounded-full border-white/20 border p-2.5 transition-all hover:border-accent hover:bg-accent/10">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://www.instagram.com/cafebeats.india/profilecard/?igsh=MW54dGJldTJscWhsOQ" target="_blank" rel="noopener noreferrer" className="rounded-full border-white/20 border p-2.5 transition-all hover:border-accent hover:bg-accent/10">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:justify-self-center">
            <h4 className="mb-4 font-display text-lg font-semibold">Quick Links</h4>
            {[
              { label: "Home", path: "/" },
              { label: "About Us", path: "/about" },
              { label: "Our Menu", path: "/menu" },
              { label: "Franchise", path: "/franchise" },
              { label: "Our Stores", path: "/stores" },
              { label: "Contact Us", path: "/contact" },
            ].map((link) => (
              <Link key={link.path} to={link.path} className="mb-2 block text-sm text-white/70 transition-colors hover:text-accent">
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="lg:justify-self-end">
            <h4 className="mb-4 font-display text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-3"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" /> G-11 Blue Stone Building, Shyamdham MandirChowk, Sarthana Jakat Naka, Surat, Gujarat 395013</div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent" /> 
                <a href="tel:+919924574894" className="transition-colors hover:text-accent">+91 99245 74894</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent" /> 
                <a href="mailto:info@cafebeats.in" className="transition-colors hover:text-accent">info@cafebeats.in</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          © {new Date().getFullYear()} CafeBeats. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
