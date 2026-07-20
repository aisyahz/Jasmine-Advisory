import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface ProductsProps {
  onInquire: (productName: string) => void;
}

const CATEGORIES = [
  {
    id: "energy",
    title: "Energy & Petroleum",
    subtitle: "High-Calorific Hydrocarbons",
    description: "Sourcing and transport of high-grade petroleum hydrocarbons, alternative energy, and industrial coal to key global trade lanes with absolute regulatory and quality verification.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "EN590 Diesel (10PPM)", spec: "Ultra-low sulphur diesel compliant with Euro 6 standard." },
      { name: "Jet A1 Aviation Fuel", spec: "Commercial aviation turbine fuel matching DEF STAN 91-091." },
      { name: "Liquefied Natural Gas (LNG)", spec: "Cryogenic natural gas shipments for state utility grids." },
      { name: "Liquefied Petroleum Gas (LPG)", spec: "Propane-butane industrial mixture for localized power." },
      { name: "Crude Oil (SGP / Brent)", spec: "Light sweet and medium sour grades directly from origin wells." },
      { name: "Bitumen (Pen 60/70)", spec: "Asphalt formulations for large-scale highway infrastructure." }
    ]
  },
  {
    id: "agriculture",
    title: "Agriculture & Fertilizers",
    subtitle: "Sovereign Food Security & Soil Nutrients",
    description: "Bulk distribution of primary fertilizers and essential food commodities. Sustaining food supply systems and agricultural yield optimization through secure, verified logistics.",
    image: "https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Urea (Granular & Prilled)", spec: "Nitrogen 46% min agricultural grade for fertilizer formulation." },
      { name: "Diammonium Phosphate (DAP)", spec: "Concentrated phosphorus and nitrogen source for robust root systems." },
      { name: "Premium Grains & Rice", spec: "Thai Jasmine, Basmati, Yellow Corn (Maize), and Non-GMO Soybean." },
      { name: "Refined White Sugar (ICUMSA 45)", spec: "High-purity refined sugar for food processing conglomerates." },
      { name: "Edible & Palm Oils (RBD)", spec: "Cooking oils and industrial baking fats direct from ASEAN mills." },
      { name: "Direct-Origin Spices", spec: "Green Cardamom, Black Pepper (550GL min), Turmeric, and Zanzibar Cloves." }
    ]
  },
  {
    id: "metals",
    title: "Metals & Minerals",
    subtitle: "Primary Smelting & Industrial Ores",
    description: "Connecting smelting centers to manufacturing hubs with high-grade metal cathodes and essential mineral ores. Sourced from verified LME-registered producers.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Copper Cathodes", spec: "Grade A 99.99% purity, LME registered for wire and electronics." },
      { name: "Aluminium Ingots", spec: "Primary high-purity casting grades for automotive and aerospace." },
      { name: "Iron Ore", spec: "High-grade hematite and magnetite fines for modern blast furnaces." },
      { name: "Structural Steel Products", spec: "Reinforcement rebar, steel billet, and wire rod solutions." },
      { name: "Chrome Ore", spec: "Metallurgical and chemical grades for stainless steel alloying." },
      { name: "Industrial Quartz", spec: "High-silica glass and smelting raw quartz with minimal impurities." }
    ]
  },
  {
    id: "poultry",
    title: "Cold-Chain Logistics",
    subtitle: "Halal Certified Frozen Poultry",
    description: "Sovereign distribution of HACCP and Halal-certified frozen poultry items, managed via temperature-controlled maritime reefers to ensure absolute freshness.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Frozen Whole Chicken", spec: "Halal griller specification, giblets included or excluded." },
      { name: "Frozen Chicken Breast", spec: "Boneless, skinless single fillet optimized for food processing." },
      { name: "Frozen Chicken Wings", spec: "3-joint standard export specification matching high grade standards." },
      { name: "Frozen Chicken Drumsticks", spec: "Individually quick frozen (IQF) deep chill portions." },
      { name: "Frozen Chicken Feet & Paws", spec: "Grade A washed, outer yellow skin and black spot free." }
    ]
  }
];

export default function Products({ onInquire }: ProductsProps) {
  return (
    <section id="products" className="py-32 sm:py-40 bg-[#050816] relative overflow-hidden border-t border-zinc-900/60">
      {/* Background visual details */}
      <div className="absolute right-0 top-1/3 w-[500px] h-[500px] rounded-full bg-blue-500/[0.02] blur-[140px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/3 w-[400px] h-[400px] rounded-full bg-cyan-500/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header Block */}
        <div className="text-left mb-24 sm:mb-32 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F172A]/85 border border-white/5 text-zinc-400 mb-6">
            <span className="font-mono text-[9px] tracking-widest uppercase text-blue-400">Spec Registry</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-none">
            Sought commodities.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            We operate rigorous logistics structures across four primary commodity portfolios. Each transaction is verified by SGS assay logs prior to boarding.
          </p>
        </div>

        {/* Premium Storytelling Alternating Portfolio Sections */}
        <div className="space-y-40 sm:space-y-52">
          {CATEGORIES.map((category, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={category.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Image Block: alternating left/right layout */}
                <div
                  className={`lg:col-span-6 relative group ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-tr from-blue-500/5 to-cyan-500/5 opacity-40 blur-xl group-hover:opacity-60 transition-all duration-700" />
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-white/5 bg-[#0F172A] shadow-2xl">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-[1.5s] ease-out filter brightness-[0.75] contrast-[1.05]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>

                {/* Information Block */}
                <div
                  className={`lg:col-span-6 space-y-8 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="font-mono text-[9px] tracking-widest text-zinc-500 uppercase block font-medium">
                      {category.subtitle}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
                    {category.description}
                  </p>

                  {/* List of Products (Elegant layout, not cards) */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 pt-6 border-t border-zinc-900/60">
                    {category.items.map((item, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0" />
                          <span className="text-xs font-bold text-white uppercase tracking-wider">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 font-light leading-normal pl-6">
                          {item.spec}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Call to action button */}
                  <div className="pt-6">
                    <button
                      id={`btn-learn-more-${category.id}`}
                      onClick={() => onInquire(category.items[0].name)}
                      className="inline-flex items-center gap-2 font-mono text-[10px] font-bold tracking-widest text-blue-400 hover:text-white uppercase transition-colors cursor-pointer"
                    >
                      Inquire Sector Specifications{" "}
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
