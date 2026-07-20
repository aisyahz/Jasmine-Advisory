import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";

interface ProductsProps {
  onInquire: (productName: string) => void;
}

const CATEGORIES = [
  {
    id: "petroleum",
    title: "Petroleum Products",
    subtitle: "Refined Fuel & Petroleum Sourcing",
    description: "Coordination of high-grade petroleum hydrocarbons, refined diesel, and aviation fuels to key global trade lanes with absolute quality inspection.",
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "EN590 Diesel (10PPM)", spec: "Ultra-low sulphur diesel conforming to Euro standards." },
      { name: "Jet A1 Aviation Fuel", spec: "Commercial aviation turbine fuel matching standard international specifications." },
      { name: "Liquefied Natural Gas (LNG)", spec: "Liquefied natural gas shipments managed via certified ocean carriers." },
      { name: "Liquefied Petroleum Gas (LPG)", spec: "Propane-butane industrial mixture for energy and power distribution." },
      { name: "Crude Oil (Brent / Sweet)", spec: "Light sweet and medium sour grades sourced from established production facilities." },
      { name: "Bitumen (Pen 60/70)", spec: "Asphalt formulations for civil highway and road paving projects." }
    ]
  },
  {
    id: "fertilizers",
    title: "Fertilizers",
    subtitle: "Essential Nutrients & Soil Inputs",
    description: "Bulk supply and distribution of essential soil nutrients and agricultural chemical inputs to sustain robust agricultural yields.",
    image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Urea (Granular & Prilled)", spec: "Nitrogen 46% min agricultural grade for direct soil application." },
      { name: "Diammonium Phosphate (DAP)", spec: "High-concentration fertilizer supplying phosphorus and nitrogen." },
      { name: "Potassium Chloride (MOP)", spec: "Premium muriate of potash for crop resistance and strength." },
      { name: "Monoammonium Phosphate (MAP)", spec: "Water-soluble fertilizer ideal for diverse soil conditions." }
    ]
  },
  {
    id: "agriculture",
    title: "Agricultural Commodities",
    subtitle: "Staple Crops & Grain Distribution",
    description: "Sourcing and distribution of primary food grains and staple agricultural stocks to sustain international consumer demand.",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Premium Grains & Rice", spec: "Thai Jasmine, Basmati, Yellow Corn (Maize), and Non-GMO Soybean." },
      { name: "Refined White Sugar (ICUMSA 45)", spec: "High-purity refined cane sugar for large-scale food processing." },
      { name: "Yellow Corn / Maize", spec: "Animal feed and human grade grain matching export standards." },
      { name: "Non-GMO Soybean", spec: "Sourced from established agricultural estates with verified quality." }
    ]
  },
  {
    id: "edible-oils",
    title: "Edible Oils and Spices",
    subtitle: "Refined Oils & Organic Condiments",
    description: "Reliable distribution of premium vegetable cooking oils and essential spices sourced directly from origin processors.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "RBD Palm Olein & Cooking Oils", spec: "High-grade refined vegetable oils direct from established ASEAN mills." },
      { name: "Coconut Oil (Crude & RBD)", spec: "Refined and crude coconut oils for cosmetic and food applications." },
      { name: "Premium Black Pepper", spec: "High-density black pepper matching international export specifications." },
      { name: "Direct-Origin Spices", spec: "Green Cardamom, Turmeric, and Zanzibar Cloves sourced at origin." }
    ]
  },
  {
    id: "metals",
    title: "Metals and Minerals",
    subtitle: "Industrial Minerals & Metal Cathodes",
    description: "Connecting smelting centers and mining resources to industrial manufacturing hubs with premium ores and cathode products.",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Copper Cathodes", spec: "Grade A high-purity copper cathodes for electrical and manufacturing use." },
      { name: "Aluminium Ingots", spec: "Primary high-purity casting alloys for industrial and structural design." },
      { name: "High-Grade Iron Ore", spec: "Hematite and magnetite ores optimized for furnace production." },
      { name: "Chrome Ore", spec: "Metallurgical and chemical grades for stainless steel alloying." },
      { name: "Industrial Quartz", spec: "High-silica raw materials for high-end glass and silicon manufacturing." }
    ]
  },
  {
    id: "poultry",
    title: "Frozen Poultry",
    subtitle: "Halal & HACCP Cold-Chain Sourcing",
    description: "Logistical coordination and supply of high-grade frozen poultry items, compliant with international food safety standards.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop",
    items: [
      { name: "Frozen Whole Chicken", spec: "Halal-certified griller specifications, cleanly packed and quick-frozen." },
      { name: "Frozen Chicken Breast", spec: "Boneless, skinless single fillets optimized for industrial processors." },
      { name: "Frozen Chicken Wings", spec: "Standard export-grade multi-joint wing portions." },
      { name: "Frozen Chicken Drumsticks", spec: "Portion-controlled cuts shipped in temperature-regulated containers." },
      { name: "Frozen Chicken Feet & Paws", spec: "Grade A washed, processed and yellow skin-free specifications." }
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
            <span className="font-mono text-[9px] tracking-widest uppercase text-blue-400">Our Products</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-bold text-white tracking-tight leading-none">
            Commodity Portfolios.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm sm:text-base font-light leading-relaxed">
            We coordinate international supply and logistics across six primary commodity categories. Every transaction is subject to verified independent quality assays prior to dispatch.
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
                      <div key={i} className="space-y-1 group/item cursor-default">
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-blue-500 group-hover/item:text-cyan-400 transition-colors duration-300 shrink-0" />
                          <span className="text-xs font-bold text-zinc-300 group-hover/item:text-white uppercase tracking-wider transition-colors duration-300">
                            {item.name}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 group-hover/item:text-zinc-400 font-light leading-normal pl-6 transition-colors duration-300">
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
                      className="inline-flex items-center gap-2 font-sans text-xs font-semibold tracking-wider text-blue-400 hover:text-white uppercase transition-colors cursor-pointer"
                    >
                      Product Enquiry{" "}
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
