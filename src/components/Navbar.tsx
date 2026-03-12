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
  { label: "Contact Us", path: "/contact" },
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
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 shadow-warm backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-2">
            <img src="/logo.png" alt="CafeBeats Logo" className="h-10 md:h-12 w-auto object-contain" />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => {
              const isActive = link.path === "/" 
                ? location.pathname === "/" 
                : location.pathname.startsWith(link.path);
              
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-body text-sm tracking-wide transition-all duration-300 hover:text-accent ${
                    isActive ? "text-accent font-bold" : "text-white font-medium"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute -bottom-1.5 left-0 h-1 w-full rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile toggle */}
          <button onClick={() => setIsOpen(!isOpen)} className="text-white lg:hidden">
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
              className="overflow-hidden bg-black/95 backdrop-blur-lg lg:hidden"
            >
              <div className="container mx-auto flex flex-col gap-4 px-4 py-8">
                {navLinks.map((link) => {
                  const isActive = link.path === "/" 
                    ? location.pathname === "/" 
                    : location.pathname.startsWith(link.path);
                  
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center gap-3 font-display text-2xl font-bold transition-all duration-300 ${
                        isActive 
                          ? "text-accent pl-6 border-l-4 border-accent bg-accent/5 py-2" 
                          : "text-white/70 pl-0 py-2 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Fixed right-side CTA */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
        <Link
          to="/franchise"
          className="flex flex-col items-center justify-center gap-1 bg-gradient-premium px-3 py-5 rounded-l-2xl shadow-2xl hover:px-5 transition-all duration-300 group"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          <span className="font-display text-sm font-bold text-white tracking-widest rotate-180 group-hover:tracking-[0.2em] transition-all duration-300">
            Start Franchise ✦
          </span>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
