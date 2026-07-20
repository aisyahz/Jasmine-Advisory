import { MouseEvent } from "react";
import { Check, ShieldAlert } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
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
    <footer className="bg-[#050816] border-t border-zinc-900/60 text-zinc-500 font-sans text-xs">
      
      {/* Upper Footer Segment */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Column 1: Brand Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-gradient-to-br from-[#0F172A] to-[#1E293B] border border-white/10 shadow-inner">
                <svg className="w-4 h-4 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 12 L88 50 L50 88 L12 50 Z" stroke="url(#footG1)" strokeWidth="4" strokeLinejoin="round" fill="none" />
                  <circle cx="50" cy="50" r="8" fill="#22d3ee" />
                  <defs>
                    <linearGradient id="footG1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#22d3ee" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="text-sm font-bold tracking-[0.2em] text-white uppercase transition-colors duration-300 group-hover:text-blue-400">
                Jasmine Advisory
              </span>
            </div>
            
            <p className="text-xs text-zinc-500 font-light leading-relaxed max-w-sm">
              Jasmine Advisory Sdn Bhd is a premium global physical commodity trading and international export facilitation house headquartered in Kuala Lumpur, Malaysia.
            </p>

            <div className="font-mono text-[8px] tracking-[0.2em] text-zinc-600 uppercase pt-2">
              Kuala Lumpur • Global Sourcing Networks
            </div>
          </div>

          {/* Column 2: Core Solutions (Requested Footer Tags) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-xs font-light text-zinc-500">
              <li className="flex items-center space-x-2">
                <Check className="w-3 h-3 text-zinc-600 shrink-0" />
                <span>Global Commodity Sourcing</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3 h-3 text-zinc-600 shrink-0" />
                <span>Export Facilitation & Verification</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3 h-3 text-zinc-600 shrink-0" />
                <span>Logistics &amp; Maritime Coordination</span>
              </li>
              <li className="flex items-center space-x-2">
                <Check className="w-3 h-3 text-zinc-600 shrink-0" />
                <span>Independent Assay Grade Verification</span>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-[10px] font-mono tracking-wider uppercase">
              <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="hover:text-white transition-colors">Home</a>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-white transition-colors">About</a>
              <a href="#products" onClick={(e) => handleNavClick(e, "#products")} className="hover:text-white transition-colors">Products</a>
              <a href="#network" onClick={(e) => handleNavClick(e, "#network")} className="hover:text-white transition-colors">Network</a>
              <a href="#why-us" onClick={(e) => handleNavClick(e, "#why-us")} className="hover:text-white transition-colors">Why Us</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>

        </div>
      </div>

      {/* Compliance / Disclaimer Ribbon */}
      <div className="bg-[#0F172A]/40 border-t border-zinc-900/60 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-start gap-3 text-[10px] text-zinc-600 leading-relaxed font-sans">
          <ShieldAlert className="w-4 h-4 text-zinc-700 shrink-0 mt-0.5" />
          <p>
            <strong>Regulatory Standard:</strong> Jasmine Advisory Sdn Bhd strictly enforces AML (Anti-Money Laundering) and KYC (Know Your Customer) compliance parameters under the regulatory rules of the International Chamber of Commerce (ICC). We do not coordinate shipping schedules without verified financial instruments (SBLC, DLC, MT103) issued by authorized Tier-1 international banking institutions.
          </p>
        </div>
      </div>

      {/* Bottom Legal Ribbon */}
      <div className="bg-[#050816] py-6 border-t border-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[8px] text-zinc-600 uppercase tracking-widest text-center sm:text-left">
          <span>
            © {currentYear} Jasmine Advisory Sdn Bhd. All Rights Reserved.
          </span>
          <div className="flex gap-6">
            <span>Co. Reg: Malaysia Co. Registry</span>
            <span>Kuala Lumpur Base</span>
          </div>
        </div>
      </div>

    </footer>
  );
}
