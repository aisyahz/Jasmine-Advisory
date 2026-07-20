import { motion } from "motion/react";
import { Layers, ShieldCheck, RefreshCw, DollarSign, Award, Anchor } from "lucide-react";

export default function WhyUs() {
  const bentoItems = [
    {
      title: "Unified Trade Facilitation",
      description: "Our experience covers refined fuels, fertilizers, agricultural grains, edible oils, metal minerals, and frozen poultry under one reliable trade facilitation house.",
      icon: <Layers className="w-5 h-5 text-blue-400" />,
      gridClass: "md:col-span-2",
      badge: "Integrated Services"
    },
    {
      title: "Third-Party Inspections",
      description: "Complete documentary transparency with independent quality checks and grade verification by globally recognized inspectors.",
      icon: <ShieldCheck className="w-5 h-5 text-cyan-400" />,
      gridClass: "md:col-span-1",
      badge: "Verified Assay"
    },
    {
      title: "Direct Producer Connections",
      description: "By sourcing directly from primary producers, refineries, and agricultural collectives, we minimize multi-tier intermediary overheads.",
      icon: <DollarSign className="w-5 h-5 text-cyan-400" />,
      gridClass: "md:col-span-1",
      badge: "Direct Sourced"
    },
    {
      title: "Experienced Logistics",
      description: "Professional ocean cargo coordination, container slots booking, and customs processing across prime shipping corridors.",
      icon: <Anchor className="w-5 h-5 text-blue-400" />,
      gridClass: "md:col-span-2",
      badge: "Freight Operations"
    },
    {
      title: "Structured Risk Mitigation",
      description: "We manage and reduce transaction risks by adhering to strict compliance, structured trade documentation, and trustworthy shipping channels.",
      icon: <RefreshCw className="w-5 h-5 text-blue-400" />,
      gridClass: "md:col-span-1",
      badge: "Secure Trade"
    },
    {
      title: "Incoterms Alignment",
      description: "Every contract operates strictly in accordance with recognized International Chamber of Commerce (ICC) Incoterms.",
      icon: <Award className="w-5 h-5 text-cyan-400" />,
      gridClass: "md:col-span-2",
      badge: "ICC Compliant"
    }
  ];

  return (
    <section id="why-us" className="py-32 sm:py-40 bg-[#050816] relative overflow-hidden border-t border-zinc-900/60">
      {/* Subtle glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.02),transparent_40%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-24 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A]/85 border border-white/5 text-zinc-400 mb-6">
            <span className="font-mono text-[9px] tracking-widest uppercase text-blue-400">Strategic Advantage</span>
          </div>
          
          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-none">
            Why commercial partners <br />
            <span className="text-zinc-500">choose us.</span>
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            We provide the logistical stability, documentary transparency, and operational care required by industrial buyers and commercial conglomerates.
          </p>
        </div>

        {/* Premium Bento Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item, idx) => (
            <motion.div
              id={`why-bento-card-${idx}`}
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative rounded-[24px] bg-[#0F172A]/40 hover:bg-[#0F172A]/70 border border-white/5 hover:border-white/10 p-8 sm:p-10 transition-all duration-500 flex flex-col justify-between hover:translate-y-[-4px] overflow-hidden ${item.gridClass}`}
            >
              {/* Subtle card glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 rounded-full bg-blue-500/[0.02] group-hover:bg-blue-500/[0.04] blur-2xl transition-all duration-500" />
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#0F172A] rounded-xl border border-white/5 group-hover:border-white/10 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="font-mono text-[8px] tracking-[0.2em] text-zinc-500 uppercase font-bold">
                    {item.badge}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {item.title}
                </h3>
              </div>

              <div className="mt-6 relative z-10">
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional certification stamp */}
        <div className="mt-24 border-t border-zinc-900/60 pt-12 text-center">
          <p className="font-mono text-[9px] tracking-[0.25em] text-zinc-600 uppercase">
            ESTABLISHED COMPLIANCE • SECURE TRANSACTION CHANNELS • INTERNATIONAL INCOTERMS COMPLIANT
          </p>
        </div>

      </div>
    </section>
  );
}
