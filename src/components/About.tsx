import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Shield, Anchor } from "lucide-react";

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section id="about" className="py-32 sm:py-40 bg-[#050816] relative overflow-hidden" ref={containerRef}>
      {/* Background Orbs */}
      <div className="absolute right-[-10%] top-1/4 w-[500px] h-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-1/4 w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Asymmetrical 2-Column Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Stunning Cinematic Image of Global Shipping Containers */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 opacity-30 group-hover:opacity-50 blur-xl transition-all duration-700" />
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 bg-[#0F172A] shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
                alt="Global maritime shipping containers and port logistics operations"
                className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter brightness-[0.8] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Right Column: Premium Typography and Storytelling Text */}
          <div className="lg:col-span-6 space-y-10">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A]/80 border border-white/5 text-zinc-400 text-xs"
              >
                <span className="font-mono text-[9px] tracking-widest uppercase text-blue-400">Institutional Sourcing</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight"
              >
                Connecting origins <br />
                <span className="text-zinc-500">to discharge terminals.</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-zinc-400 text-sm sm:text-base font-light leading-relaxed"
            >
              <p>
                <strong className="text-white font-medium">Jasmine Advisory Sdn Bhd</strong> is a professional export facilitation and physical commodity trade execution house headquartered in Kuala Lumpur, Malaysia. 
              </p>
              <p>
                We coordinate freight logistics, transshipments, and vessel operations across key global trade routes. Our direct networks with refineries, producers, and agricultural associations enable efficient trade facilitation without multi-tiered intermediary overheads.
              </p>
            </motion.div>

            {/* Core Values / Competencies Indicators (Monochromatic & Clean) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 gap-x-8 gap-y-6 pt-8 border-t border-zinc-900"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Anchor className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold text-white tracking-wider uppercase">Logistics Security</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal font-light">
                  Direct laycan coordination and secure vessel chartering.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-cyan-500" />
                  <span className="text-xs font-bold text-white tracking-wider uppercase">Structured Trade</span>
                </div>
                <p className="text-xs text-zinc-500 leading-normal font-light">
                  Documentary letter of credit and compliance validation.
                </p>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
