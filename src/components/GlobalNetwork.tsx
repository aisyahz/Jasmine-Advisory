import { useState } from "react";
import { Globe, ShieldAlert, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NetworkHub {
  id: string;
  name: string;
  coordinates: { x: number; y: number };
  role: string;
  commodities: string;
  portStatus: string;
}

const HUBS: NetworkHub[] = [
  {
    id: "malaysia",
    name: "Malaysia (Kuala Lumpur)",
    coordinates: { x: 750, y: 310 },
    role: "Central Routing Node & ASEAN Distribution Hub",
    commodities: "Petroleum, Fertilizers, Edible Oils, Metal Products",
    portStatus: "Port Klang Terminal - Online",
  },
  {
    id: "singapore",
    name: "Singapore Hub",
    coordinates: { x: 765, y: 325 },
    role: "Global Marine Bunkering & Financial Clearing Desk",
    commodities: "Aviation Fuel, EN590 Diesel, LPG/LNG, Financial Trade Execution",
    portStatus: "PSA Singapore - High Volume Terminal",
  },
  {
    id: "uae",
    name: "UAE (Dubai/Abu Dhabi)",
    coordinates: { x: 580, y: 220 },
    role: "Middle East Sourcing & Energy Logistics Desk",
    commodities: "Crude Oil, Aviation Fuels, Sulphur, Urea, Bitumen",
    portStatus: "Fujairah & Jebel Ali Terminals",
  },
  {
    id: "china",
    name: "China (Shanghai/Beijing)",
    coordinates: { x: 795, y: 175 },
    role: "East Asia Trade Desk & Commodity Ingestion Hub",
    commodities: "Metals & Minerals, Iron Ore, Copper Cathodes, Edible Oils",
    portStatus: "Shanghai Port - Active Discharge",
  },
  {
    id: "india",
    name: "India (Mumbai)",
    coordinates: { x: 670, y: 240 },
    role: "South Asian Agricultural & Fertilizers Sourcing Centre",
    commodities: "NPK Compound, Spices, Pulses, Frozen Poultry",
    portStatus: "Nhava Sheva Port - Active Sourcing",
  },
  {
    id: "europe",
    name: "Europe (Rotterdam/London)",
    coordinates: { x: 480, y: 110 },
    role: "North Sea Transit Office & Quality Standard Verification",
    commodities: "Biofuels (UCO), Crude Oil Derivatives, Premium Metals",
    portStatus: "Port of Rotterdam - Active Transshipment",
  },
  {
    id: "usa",
    name: "USA (Houston/New York)",
    coordinates: { x: 220, y: 160 },
    role: "Americas Energy Desk & Agricultural Export Desk",
    commodities: "Petroleum Coke, Coal, Yellow Corn, Soybean, Chemicals",
    portStatus: "Port of Houston - Active Loading",
  },
  {
    id: "africa",
    name: "Africa Network Hub",
    coordinates: { x: 500, y: 340 },
    role: "Pan-African Mineral Sourcing & Ingestion Terminal",
    commodities: "Chrome Ore, Iron Ore, Quartz, Spices, Raw Agricultural Goods",
    portStatus: "Durban & strategic West-African Gateways",
  },
];

export default function GlobalNetwork() {
  const [hoveredHub, setHoveredHub] = useState<NetworkHub | null>(null);
  const [selectedHub, setSelectedHub] = useState<NetworkHub>(HUBS[0]);

  return (
    <section id="network" className="py-32 bg-[#050816] relative overflow-hidden border-t border-zinc-900/60">
      {/* Background decoration elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.02),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/5 text-zinc-400">
              <span className="font-mono text-[9px] tracking-widest uppercase">Global Ledger</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
              The routing network.
            </h2>

            <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed max-w-lg">
              Jasmine Advisory coordinates heavy freight transshipments and maritime logistics via strategically synchronized trading outposts, ensuring zero-latency supply stability.
            </p>
          </div>

          <div className="lg:col-span-6 lg:pl-12 grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 lg:pt-8 border-t lg:border-t-0 lg:border-l border-zinc-900">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Globe className="w-4 h-4 text-zinc-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider">Direct Origin</span>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Direct partnerships with sovereign state-owned entities.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Cpu className="w-4 h-4 text-zinc-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Dynamic Routing</span>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Real-time re-routing of dry cargo vessels to bypass shipping bottlenecks.
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-white">
                <ShieldAlert className="w-4 h-4 text-zinc-500" />
                <span className="text-xs font-bold uppercase tracking-wider">Risk Mitigation</span>
              </div>
              <p className="text-xs text-zinc-500 font-light leading-relaxed">
                Standard hedging and SGS verification models built into every transaction block.
              </p>
            </div>
          </div>
        </div>

        {/* Dynamic SVG Map Presentation and Detail Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Area: Large Interactive SVG World Map */}
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

                {/* Draw Trade connection pathways */}
                <g stroke="rgba(255, 255, 255, 0.1)" strokeWidth="0.8" strokeDasharray="3,3" className="animate-[dash_40s_linear_infinite]">
                  <path d="M750,310 Q615,260 580,220" /> {/* KL to UAE */}
                  <path d="M750,310 Q630,175 480,110" /> {/* KL to Europe */}
                  <path d="M750,310 Q772,240 795,175" /> {/* KL to China */}
                  <path d="M580,220 Q400,190 220,160" /> {/* UAE to USA */}
                  <path d="M480,110 Q350,130 220,160" /> {/* Europe to USA */}
                  <path d="M580,220 Q540,280 500,340" /> {/* UAE to Africa */}
                  <path d="M750,310 Q710,275 670,240" /> {/* KL to India */}
                </g>

                {/* Render glowing node rings & markers */}
                {HUBS.map((hub) => {
                  const isHovered = hoveredHub?.id === hub.id;
                  const isSelected = selectedHub.id === hub.id;
                  return (
                    <g
                      key={hub.id}
                      className="cursor-pointer"
                      onMouseEnter={() => setHoveredHub(hub)}
                      onMouseLeave={() => setHoveredHub(null)}
                      onClick={() => setSelectedHub(hub)}
                    >
                      {/* Interactive click catchment area */}
                      <circle cx={hub.coordinates.x} cy={hub.coordinates.y} r="18" fill="transparent" />
                      
                      {/* Pulsing ring */}
                      <circle
                        cx={hub.coordinates.x}
                        cy={hub.coordinates.y}
                        r={isSelected ? "11" : isHovered ? "8" : "5"}
                        fill="transparent"
                        stroke={isSelected ? "#3b82f6" : "#27272a"}
                        strokeWidth="1.5"
                        className="animate-ping origin-center"
                        style={{ animationDuration: isSelected ? "2.5s" : "4s" }}
                      />
                      
                      {/* Core point */}
                      <circle
                        cx={hub.coordinates.x}
                        cy={hub.coordinates.y}
                        r={isSelected ? "4.5" : isHovered ? "3.5" : "2.5"}
                        fill={isSelected ? "#ffffff" : "#52525b"}
                        className="transition-all duration-300"
                      />

                      {/* Floating tooltip labels on map */}
                      <text
                        x={hub.coordinates.x}
                        y={hub.coordinates.y - 12}
                        textAnchor="middle"
                        className={`font-mono text-[8px] uppercase tracking-widest font-semibold fill-zinc-300 transition-opacity duration-300 pointer-events-none ${
                          isSelected || isHovered ? "opacity-100" : "opacity-0"
                        }`}
                        style={{
                          textShadow: "0 2px 4px rgba(0,0,0,0.9)",
                        }}
                      >
                        {hub.name.split(" ")[0]}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 items-center justify-center border-t border-zinc-900 pt-4 font-mono text-[9px] tracking-[0.2em] text-zinc-500 uppercase">
              <span>● MULTI-MODAL ROUTING CORE</span>
              <span>● LIQUID & BULK CONTAINER ARRAYS</span>
              <span>● SGS VERIFIED NODES</span>
            </div>
          </div>

          {/* Right Area: Interactive Hub details information card */}
          <div className="lg:col-span-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedHub.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="glass-panel p-8 rounded-[24px] border border-white/5 relative"
              >
                <span className="font-mono text-[9px] tracking-widest text-zinc-500 block uppercase mb-1">
                  Active Routing Terminal
                </span>
                
                <h3 className="text-xl font-bold text-white tracking-tight mb-4">
                  {selectedHub.name}
                </h3>

                <div className="space-y-6 pt-4 border-t border-zinc-900">
                  <div>
                    <span className="font-mono text-[8px] tracking-widest text-zinc-500 uppercase block mb-1">Operational Role</span>
                    <p className="text-sm text-zinc-400 font-light">
                      {selectedHub.role}
                    </p>
                  </div>

                  <div>
                    <span className="font-mono text-[8px] tracking-widest text-zinc-500 uppercase block mb-1.5">Commodities Manifested</span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedHub.commodities.split(", ").map((item, idx) => (
                        <span key={idx} className="font-mono text-[8px] bg-zinc-900 px-2 py-0.5 rounded text-zinc-300 font-medium">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-900 flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                    <span className="font-mono text-[8px] tracking-widest text-zinc-500 uppercase font-medium">
                      {selectedHub.portStatus}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Quick guide text */}
            <div className="mt-4 p-4 border border-dashed border-zinc-900 rounded-2xl text-center">
              <p className="font-mono text-[8px] tracking-wider text-zinc-600 uppercase">
                *Inspect strategic nodes by clicking interactive pulse markers.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
