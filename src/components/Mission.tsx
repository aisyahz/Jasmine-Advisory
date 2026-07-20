import { motion } from "motion/react";
import { ShieldCheck, Globe, Scale, Handshake, DollarSign, Truck } from "lucide-react";

export default function Mission() {
  const missionCards = [
    {
      title: "Optimized Sourcing",
      description: "Rigorous algorithmic vetting and on-site assays to guarantee physical commodities match grade specs.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Unified Trade Network",
      description: "A secure, direct-matching ledger of vetted sovereign buyers and top-tier primary producers.",
      icon: <Globe className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Immutable Compliance",
      description: "Adhering to strict international trade regulation models with complete visibility at every route node.",
      icon: <Scale className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Dynamic Allocation",
      description: "Securing stable, multi-decade resource pools to sustain sovereign and commercial demands.",
      icon: <Handshake className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Arbitrage Minimization",
      description: "Origin-direct relationships and optimized freight booking to eliminate broker margin bloat.",
      icon: <DollarSign className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Autonomous Logistics",
      description: "Synchronized transit streams, from port customs automation to real-time vessel telemetry.",
      icon: <Truck className="w-5 h-5 text-blue-400" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="py-32 bg-[#050816] relative overflow-hidden border-t border-zinc-900/60">
      {/* Visual background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.03),transparent_40%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-left mb-20 max-w-xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/5 text-zinc-400 mb-4"
          >
            <span className="font-mono text-[9px] tracking-widest uppercase">Operational Architecture</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none"
          >
            Built for velocity & scale.
          </motion.h2>
        </div>

        {/* Mission Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {missionCards.map((card, idx) => (
            <motion.div
              id={`mission-card-${idx}`}
              key={idx}
              variants={cardVariants}
              className="glass-panel p-8 rounded-[24px] border border-white/5 hover:border-white/10 bg-zinc-950/30 glass-panel-hover flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="space-y-6">
                <div className="p-3 bg-zinc-900 w-fit rounded-xl border border-white/5 group-hover:bg-zinc-850 transition-colors duration-300">
                  {card.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {card.title}
                </h3>
                
                <p className="text-sm text-zinc-400 font-light leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Decorative indexing */}
              <div className="mt-8 pt-4 border-t border-zinc-900/60 flex justify-between items-center text-[10px] font-mono">
                <span className="text-zinc-600 uppercase tracking-widest">Protocol Node</span>
                <span className="text-zinc-500 font-bold">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
