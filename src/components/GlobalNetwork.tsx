import { useState } from "react";
import { Globe, Shield, Anchor } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TradeRegion {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  role: string;
  commodities: string;
}

const REGIONS: TradeRegion[] = [
  {
    id: "apac",
    name: "Asia-Pacific Corridors",
    coordinates: { x: 750, y: 310 },
    role: "Trade facilitation lanes connecting major refineries, agricultural cooperatives, and edible oil processing mills across the ASEAN region.",
    commodities: "Petroleum Products, Edible Oils, Agricultural Grains, Frozen Poultry",
  },
  {
    id: "mideast",
    name: "Middle East & South Asia",
    coordinates: { x: 620, y: 230 },
    role: "Primary sourcing pathways for mineral sulfur, petrochemicals, nitrogenous fertilizers, and traditional organic spices.",
    commodities: "Crude Derivatives, Chemical Fertilizers, Spices",
  },
  {
    id: "europe",
    name: "European Trade Routes",
    coordinates: { x: 480, y: 130 },
    role: "Established maritime routes coordinating premium grade refined metals and mineral ores matching strict industrial specifications.",
    commodities: "Refined Metals, Mineral Ores, Energy Stocks",
  },
  {
    id: "americas",
    name: "Pan-American Sourcing",
    coordinates: { x: 220, y: 180 },
    role: "Facilitating the export and shipment coordination of large-scale agricultural grain stocks and industrial ores.",
    commodities: "Agricultural Commodities, Iron Ore, Minerals",
  }
];

export default function GlobalNetwork() {
  const [hoveredRegion, setHoveredRegion] = useState<TradeRegion | null>(null);
  const [selectedRegion, setSelectedRegion] = useState<TradeRegion>(REGIONS[0]);

  return (
    <section id="network" className="py-32 bg-[#050816] relative overflow-hidden border-t border-zinc-900/60">
      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/5 text-zinc-400">
              <span className="font-mono text-[9px] tracking-widest uppercase">Global Sourcing</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
              Global Network.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-lg">
              Jasmine Advisory coordinates the logistics, transshipment, and shipping of physical commodities across primary trade corridors, establishing solid bridges between quality origins and industrial discharge terminals.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 lg:pt-8 border-t lg:border-t-0 lg:border-l border-zinc-900">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-4 h-4 text-zinc-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Direct Origin</span>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Direct connections with registered producers and cooperatives worldwide.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Anchor className="w-4 h-4 text-zinc-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Logistics Coordination</span>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Expert maritime freight management and customs coordination.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-4 h-4 text-zinc-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Assay Validation</span>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Facilitating independent quality inspections prior to cargo dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Subtle Map Presentation and Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Area: Visual Map Representation (Subtle, No Fake Live Tracking) */}
          <div className="lg:col-span-8 bg-zinc-950/40 rounded-[28px] border border-white/5 p-4 sm:p-8 relative overflow-hidden">
            <div className="relative aspect-[2/1] w-full min-h-[300px]">
              <svg
                id="world-map-svg"
                viewBox="0 0 1000 500"
                className="w-full h-full text-zinc-900 fill-none stroke-zinc-900"
                strokeWidth="0.8"
              >
                {/* World Map Gridded projection backing */}
                <g strokeDasharray="1,6" strokeWidth="0.3" className="text-zinc-800">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <line key={i} x1="0" y1={(i + 1) * 50} x2="1000" y2={(i + 1) * 50} />
                  ))}
                  {Array.from({ length: 19 }).map((_, i) => (
                    <line key={i} x1={(i + 1) * 50} y1="0" x2={(i + 1) * 50} y2="500" />
                  ))}
                </g>

                {/* Draw Trade connection pathways (purely visual representation) */}
                <g stroke="rgba(255, 255, 255, 0.08)" strokeWidth="0.8" strokeDasharray="4,4">
                  <path d="M750,310 Q685,270 620,230" /> {/* APAC to Mideast */}
                  <path d="M750,310 Q615,220 480,130" /> {/* APAC to Europe */}
                  <path d="M620,230 Q420,205 220,180" /> {/* Mideast to Americas */}
                  <path d="M480,130 Q350,155 220,180" /> {/* Europe to Americas */}
                </g>

                {/* Render nodes & markers */}
                {REGIONS.map((region) => {
                  const isHovered = hoveredRegion?.id === region.id;
                  const isSelected = selectedRegion.id === region.id;
                  return (
                    <g
                      key={region.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredRegion(region)}
                      onMouseLeave={() => setHoveredRegion(null)}
                      onClick={() => setSelectedRegion(region)}
                    >
                      {/* Interactive click catchment area */}
                      <circle cx={region.coordinates.x} cy={region.coordinates.y} r="18" fill="transparent" />
                      
                      {/* Pulsing Aura */}
                      <circle
                        cx={region.coordinates.x}
                        cy={region.coordinates.y}
                        r={isSelected ? "15" : "10"}
                        fill={isSelected ? "rgba(59, 130, 246, 0.22)" : "rgba(34, 211, 238, 0.08)"}
                        className="animate-pulse"
                        style={{
                          transformOrigin: `${region.coordinates.x}px ${region.coordinates.y}px`,
                        }}
                      />
                      
                      {/* Ring */}
                      <circle
                        cx={region.coordinates.x}
                        cy={region.coordinates.y}
                        r={isSelected ? "10" : isHovered ? "8" : "5"}
                        fill="transparent"
                        stroke={isSelected ? "#22d3ee" : isHovered ? "#3b82f6" : "rgba(255,255,255,0.15)"}
                        strokeWidth="1.5"
                        className="transition-all duration-300"
                      />
                      
                      {/* Core point */}
                      <circle
                        cx={region.coordinates.x}
                        cy={region.coordinates.y}
                        r={isSelected ? "4.5" : isHovered ? "3.5" : "2.5"}
                        fill={isSelected ? "#ffffff" : isHovered ? "#22d3ee" : "#94a3b8"}
                        className="transition-all duration-300"
                      />

                      {/* Floating labels */}
                      <text
                        x={region.coordinates.x}
                        y={region.coordinates.y - 12}
                        textAnchor="middle"
                        className={`font-mono text-[8px] uppercase tracking-widest font-semibold fill-zinc-300 transition-opacity duration-300 pointer-events-none ${
                          isSelected || isHovered ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          textShadow: "0 2px 4px rgba(0,0,0,0.9)",
                        }}
                      >
                        {region.name.split(" ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 items-center justify-center border-t border-zinc-900 pt-4 font-mono text-[9px] tracking-[0.2em] text-zinc-500 uppercase">
              <span>● GLOBAL TRANSIT LANES</span>
              <span>● MULTI-COMMODITY FACILITATION</span>
              <span>● INDEPENDENT QUALITY INSPECTION</span>
            </div>
          </div>

          {/* Right Area: Interactive Corridor details information card */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRegion.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-8 rounded-[24px] border border-white/5 relative"
              >
                <span className="font-mono text-[9px] tracking-widest text-zinc-500 block uppercase mb-1">
                  Verified Commodity Corridor
                </span>
                
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  {selectedRegion.name}
                </h3>

                <div className="space-y-6 pt-4 border-t border-zinc-900">
                  <div>
                    <span className="font-mono text-[8px] tracking-widest text-zinc-500 uppercase block mb-1">Scope of Facilitation</span>
                    <p className="text-sm text-zinc-400 font-light">
                      {selectedRegion.role}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] tracking-widest text-zinc-500 uppercase block mb-1.5">Primary Commodities</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedRegion.commodities.split(", ").map((item, idx) => (
                        <span key={idx} className="font-mono text-[8px] bg-zinc-900 px-2 py-0.5 rounded text-zinc-300 font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick guide text */}
            <div className="mt-4 p-4 border border-dashed border-zinc-900 rounded-2xl text-center">
              <p className="font-mono text-[8px] tracking-wider text-zinc-600 uppercase">
                *Click on the pulsing map markers to view commodity corridor scopes.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
