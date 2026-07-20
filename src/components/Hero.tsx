import { ArrowRight, ChevronDown } from "lucide-react";
import { motion } from "motion/react";

interface HeroProps {
  onQuoteClick: () => void;
  onProductsClick: () => void;
}

export default function Hero({ onQuoteClick, onProductsClick }: HeroProps) {
  // Trust indicators below the hero
  const trustIndicators = [
    { label: "Global Partners", value: "120+" },
    { label: "Sovereign Countries", value: "25+" },
    { label: "Operational Guarantee", value: "Reliable Supply" },
    { label: "Compliance Assured", value: "Verified Trade" },
  ];

  // Grayscale international industry standards and certificates
  const certifications = [
    {
      name: "SGS",
      title: "Assay & Cargo Inspection",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 12 3 3 5-5" />
          <path d="M12 2v20M2 12h20" strokeWidth="0.5" strokeDasharray="2,2" />
        </svg>
      )
    },
    {
      name: "ISO 9001",
      title: "Quality Management System",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      )
    },
    {
      name: "ICC INCOTERMS",
      title: "Governing Trade Protocol",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12M6 12h12" />
          <path strokeLinecap="round" strokeLinejoin="round" d="m8 8 8 8M16 8l-8 8" strokeWidth="1" strokeDasharray="1,1" />
        </svg>
      )
    },
    {
      name: "HACCP SYSTEM",
      title: "Food Safety Certified",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      name: "GAFTA REGISTERED",
      title: "Grain & Feed Trade Assoc.",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-1.5 1.5-3 3-3 5.5s1.5 4.5 3 5.5c1.5-1 3-3 3-5.5S13.5 4.5 12 3z" />
        </svg>
      )
    },
    {
      name: "LME STANDARDS",
      title: "London Metal Exchange Grade",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M7 8h10M7 12h10M7 16h10" />
        </svg>
      )
    },
    {
      name: "FOSFA MEMBER",
      title: "Oils, Seeds & Fats Federation",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 17C12 17 15 13.5 15 11C15 9 13.5 8 12 8C10.5 8 9 9 9 11C9 13.5 12 17 12 17Z" />
        </svg>
      )
    },
    {
      name: "TIC COUNCIL",
      title: "Independent Quality Testing",
      icon: (
        <svg className="w-5 h-5 text-zinc-500 group-hover:text-cyan-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 0 0-3.7-3.7 48.656 48.656 0 0 0-7.324 0 4.006 4.006 0 0 0-3.7 3.7C4.547 9.547 4.5 10.768 4.5 12s.047 2.453.138 3.662a4.006 4.006 0 0 0 3.7 3.7 48.656 48.656 0 0 0 7.324 0 4.006 4.006 0 0 0 3.7-3.7c.092-1.209.138-2.43.138-3.662z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      )
    }
  ];

  const duplicatedCertifications = [...certifications, ...certifications];

  return (
    <section
      id="home"
      className="relative min-h-screen w-full bg-[#050816] overflow-hidden flex flex-col justify-between"
    >
      {/* Cinematic Fullscreen Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=2000&auto=format&fit=crop"
          alt="LNG tanker vessel traversing the global maritime lanes"
          className="w-full h-full object-cover scale-105 filter brightness-[0.35] contrast-[1.05]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients to seamlessly blend with the dark luxury design */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/90 via-[#050816]/30 to-transparent" />
        
        {/* Subtle grid pattern overlay for high-end feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      </div>

      {/* Hero Content Space (Massive Whitespace & Premium Typography) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow flex items-center pt-36 pb-12">
        <div className="max-w-4xl space-y-8 text-left">
          
          {/* Elite Trading Desk Status Pill */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F172A]/80 border border-white/5 text-zinc-400 backdrop-blur-md"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
            </span>
            <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-semibold text-zinc-300">
              International Commerce Desk
            </span>
          </motion.div>

          {/* Large Typography Headline */}
          <div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.05]"
            >
              Global Commodity <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Trading.
              </span>{" "}
              <br className="hidden sm:inline" />
              <span className="text-zinc-300 font-light text-4xl sm:text-6xl lg:text-7xl">
                Trusted Worldwide.
              </span>
            </motion.h1>
          </div>

          {/* Short elegant subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-zinc-400 text-sm sm:text-lg lg:text-xl font-light leading-relaxed max-w-2xl"
          >
            Connecting international buyers with verified global suppliers across energy, agriculture and industrial commodities. Backed by rigorous quality assay logs and Tier-1 shipping corridors.
          </motion.p>

          {/* Premium Call to Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button
              id="hero-btn-request-quote"
              onClick={onQuoteClick}
              className="px-8 py-4 rounded-xl bg-white hover:bg-zinc-100 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer flex items-center gap-2.5"
            >
              Request Quotation
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>

            <button
              id="hero-btn-view-products"
              onClick={onProductsClick}
              className="px-8 py-4 rounded-xl bg-[#0F172A]/80 hover:bg-[#1E293B] text-white border border-white/5 hover:border-white/10 font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:scale-[1.02] cursor-pointer backdrop-blur-md"
            >
              View Products
            </button>
          </motion.div>

        </div>
      </div>

      {/* Trust Indicators Bar Below the Hero */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-[#050816]/95 border-t border-white/5 pt-10 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
          {/* Grid Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            {trustIndicators.map((indicator, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + idx * 0.1, ease: "easeOut" }}
                className="flex flex-col space-y-1 text-left border-l border-zinc-800/60 pl-6"
              >
                <span className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
                  {indicator.label}
                </span>
                <span className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {indicator.value}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Animated Grayscale Certification Logos */}
          <div className="border-t border-zinc-900/60 pt-10">
            <div className="text-left mb-6">
              <span className="font-mono text-[9px] tracking-[0.25em] text-zinc-500 uppercase block font-semibold">
                Governed by International Standards
              </span>
            </div>
            
            <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
              <motion.div 
                className="flex gap-16 whitespace-nowrap w-max py-2"
                animate={{ x: [0, "-50%"] }}
                transition={{
                  ease: "linear",
                  duration: 40,
                  repeat: Infinity,
                }}
              >
                {duplicatedCertifications.map((cert, idx) => (
                  <div key={idx} className="inline-flex items-center gap-4 group cursor-pointer select-none">
                    <div className="text-zinc-600 group-hover:text-white transition-colors duration-300">
                      {cert.icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="font-mono text-[11px] font-bold text-zinc-400 group-hover:text-blue-400 tracking-wider transition-colors duration-300">
                        {cert.name}
                      </span>
                      <span className="text-[9px] text-zinc-600 group-hover:text-zinc-400 tracking-tight transition-colors duration-300">
                        {cert.title}
                      </span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
