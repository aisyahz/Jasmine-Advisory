import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Network", href: "#network" },
    { label: "Why Us", href: "#why-us" },
    { label: "Process", href: "#trade-process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const offset = 100; // Offset for floating header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Floating Header */}
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6`}
      >
        <div
          className={`mx-auto max-w-7xl transition-all duration-500 rounded-2xl ${
            isScrolled
              ? "glass-panel shadow-[0_12px_40px_-12px_rgba(0,0,0,0.8)] border-white/10 py-3 px-6"
              : "bg-transparent border-b border-transparent py-4 px-4"
          }`}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo - Futuristic Tech Minimalist */}
            <a
              id="brand-logo-nav"
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center space-x-3 group"
            >
              <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-white text-black font-sans font-bold text-sm tracking-tighter transition-all duration-300 group-hover:bg-zinc-200">
                J
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-black"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-[0.2em] text-white uppercase transition-colors duration-300 group-hover:text-zinc-200">
                  Jasmine
                </span>
                <span className="font-mono text-[8px] tracking-[0.18em] text-zinc-500 uppercase">
                  Advisory
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1.5 p-1 rounded-full bg-[#0F172A]/80 border border-white/5 backdrop-blur-xl">
              {navItems.map((item) => (
                <a
                  id={`nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="font-sans text-[11px] font-medium tracking-wider text-zinc-400 hover:text-white transition-all duration-200 px-4 py-1.5 rounded-full hover:bg-white/5"
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Desktop CTA Action Button */}
            <div className="hidden md:block">
              <button
                id="btn-nav-quotation"
                onClick={onQuoteClick}
                className="relative px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-black font-sans text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] cursor-pointer"
              >
                Get Quote <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button
                id="btn-mobile-menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-zinc-400 hover:text-white focus:outline-none transition-colors rounded-lg bg-zinc-900/60 border border-white/5"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              id="mobile-drawer"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-2 mx-auto max-w-7xl"
            >
              <div className="glass-panel rounded-2xl px-5 py-6 space-y-3 shadow-2xl border-white/10 bg-zinc-950/95">
                {navItems.map((item) => (
                  <a
                    id={`mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block font-sans text-xs font-medium tracking-wider text-zinc-400 hover:text-white transition-colors py-3 px-2 rounded-xl hover:bg-white/5"
                  >
                    {item.label}
                  </a>
                ))}
                <button
                  id="btn-mobile-quotation"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full mt-4 py-3 rounded-xl bg-white hover:bg-zinc-100 text-black font-sans text-xs font-semibold tracking-wide text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Get Quote <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
