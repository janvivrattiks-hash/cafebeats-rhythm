import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Coffee } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Our Menu", path: "/menu" },
  { label: "Franchise", path: "/franchise" },
  { label: "Our Stores", path: "/stores" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setIsOpen(false), [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-card/95 shadow-warm backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <Coffee className="h-8 w-8 text-accent" />
          <span className="font-display text-2xl font-bold text-foreground">
            Cafe<span className="text-gradient-gold">Beats</span>
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium tracking-wide transition-colors hover:text-accent ${
                location.pathname === link.path ? "text-accent" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/franchise"
            className="rounded-full bg-gradient-coffee px-6 py-2.5 font-body text-sm font-semibold text-primary-foreground transition-all hover:shadow-gold"
          >
            Start Franchise
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="text-foreground lg:hidden">
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-card/98 backdrop-blur-lg lg:hidden"
          >
            <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-body text-base font-medium transition-colors hover:text-accent ${
                    location.pathname === link.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/franchise"
                className="mt-2 inline-block rounded-full bg-gradient-coffee px-6 py-2.5 text-center font-body text-sm font-semibold text-primary-foreground"
              >
                Start Franchise
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
