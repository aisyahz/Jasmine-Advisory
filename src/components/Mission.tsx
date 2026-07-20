import { motion } from "motion/react";
import { ShieldCheck, Globe, Scale, Handshake, DollarSign, Truck } from "lucide-react";

export default function Mission() {
  const missionCards = [
    {
      title: "Quality Assurance",
      description: "We coordinate independent testing and assays by globally recognized inspectors to verify exact cargo grades and quality.",
      icon: <ShieldCheck className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Global Supply Sourcing",
      description: "Sourcing from established refineries, producers, and agricultural collectives across major maritime shipping corridors.",
      icon: <Globe className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Regulatory Compliance",
      description: "Strictest adherence to international trade laws, local customs regulations, and standard INCOTERMS frameworks.",
      icon: <Scale className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Direct Relations",
      description: "Fostering direct commercial alignment with primary producers to ensure supply stability and reliable planning.",
      icon: <Handshake className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Cost Optimization",
      description: "Streamlining logistics routes and utilizing direct supplier networks to eliminate unnecessary intermediary margins.",
      icon: <DollarSign className="w-5 h-5 text-blue-400" />,
    },
    {
      title: "Logistics Coordination",
      description: "Professional management of ocean freight operations, customs documentation, and scheduled port deliveries.",
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
            <span className="font-mono text-[9px] tracking-widest uppercase">Vision and Mission</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none"
          >
            Delivering stability &amp; supply integrity.
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
                <span className="text-zinc-600 uppercase tracking-widest">Operational Pillar</span>
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
