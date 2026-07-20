import { useState, useEffect, MouseEvent } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  onQuoteClick: () => void;
}

export default function Navbar({ onQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Our Products", href: "#products" },
    { label: "Global Network", href: "#network" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Trade Process", href: "#trade-process" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple, performant dynamic active section detection
      const sections = navItems.map((item) => item.href.slice(1));
      let currentSection = "home";

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            currentSection = section;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on load to configure initial values
    handleScroll();
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
            {/* Brand Logo - Premium Double-Layered Geometric Emblem */}
            <a
              id="brand-logo-nav"
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center space-x-3.5 group"
            >
              <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-white/10 transition-all duration-300 group-hover:border-blue-500/40 shadow-inner overflow-hidden">
                {/* Custom Vector Badge matching browser favicon */}
                <svg className="w-5 h-5 text-white transition-transform duration-500 group-hover:rotate-45" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 12 L88 50 L50 88 L12 50 Z" stroke="url(#navG1)" strokeWidth="4" strokeLinejoin="round" fill="none" />
                  <path d="M50 24 L76 50 L50 76 L24 50 Z" fill="url(#navG2)" />
                  <circle cx="50" cy="50" r="6" fill="#22d3ee" />
                  <defs>
                    <linearGradient id="navG1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                    <linearGradient id="navG2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59,130,246,0.5)" />
                      <stop offset="100%" stopColor="rgba(34,211,238,0.2)" />
                    </linearGradient>
                  </defs>
                </svg>
                {/* Small indicator light */}
                <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"></span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-[0.22em] text-white uppercase transition-colors duration-300 group-hover:text-blue-400">
                  Jasmine
                </span>
                <span className="font-mono text-[8px] tracking-[0.24em] text-zinc-500 uppercase font-semibold">
                  Advisory
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1 p-1 rounded-full bg-[#0F172A]/85 border border-white/5 backdrop-blur-xl">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    id={`nav-link-${item.label.toLowerCase().replace(" ", "-")}`}
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`font-sans text-[11px] font-medium tracking-wider transition-all duration-300 px-3.5 py-1.5 rounded-full ${
                      isActive
                        ? "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTA Action Button */}
            <div className="hidden md:block">
              <button
                id="btn-nav-quotation"
                onClick={onQuoteClick}
                className="relative px-4 py-2 rounded-xl bg-white hover:bg-zinc-100 text-black font-sans text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all duration-300 shadow-[0_4px_12px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:scale-[1.02] cursor-pointer"
              >
                Request a Quotation <ArrowRight className="w-3.5 h-3.5" />
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
                {navItems.map((item) => {
                  const isActive = activeSection === item.href.slice(1);
                  return (
                    <a
                      id={`mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block font-sans text-xs font-medium tracking-wider transition-all duration-200 py-3 px-3 rounded-xl ${
                        isActive
                          ? "bg-white/10 text-white font-semibold border-l-2 border-blue-500 pl-4"
                          : "text-zinc-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <button
                  id="btn-mobile-quotation"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onQuoteClick();
                  }}
                  className="w-full mt-4 py-3 rounded-xl bg-white hover:bg-zinc-100 text-black font-sans text-xs font-semibold tracking-wide text-center transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  Request a Quotation <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
