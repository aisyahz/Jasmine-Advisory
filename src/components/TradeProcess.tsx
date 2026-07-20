import { useState, ReactNode } from "react";
import { FileText, FileSpreadsheet, FileCheck, Landmark, Compass, Ship, CheckCircle, ArrowRight, CornerDownRight } from "lucide-react";
import { motion } from "motion/react";

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  details: string;
  icon: ReactNode;
}

const STEPS: ProcessStep[] = [
  {
    step: 1,
    title: "LOI or ICPO Submission",
    description: "Buyer issues formal Letter of Intent or Irrevocable Corporate Purchase Order.",
    details: "Must be issued on official buyer letterhead with complete corporate registration logs, target assays, destination ports (FOB/CIF), and banking coordinates.",
    icon: <FileText className="w-4 h-4 text-blue-400" />,
  },
  {
    step: 2,
    title: "Commercial Offer",
    description: "Seller issues Full Corporate Offer (FCO) with clear price metrics.",
    details: "Includes pricing index alignment (e.g., Platts index formulas), loading parameters, laycan windows, and escrow transactional guides.",
    icon: <FileSpreadsheet className="w-4 h-4 text-blue-400" />,
  },
  {
    step: 3,
    title: "SPA Agreement",
    description: "Both counterparties execute the final Sales and Purchase Agreement.",
    details: "The SPA contract is lodged in the respective trade clearing banks, detailing the full shipping timeline, performance bond guarantees, and penalty parameters.",
    icon: <FileCheck className="w-4 h-4 text-blue-400" />,
  },
  {
    step: 4,
    title: "Payment Instrument",
    description: "Buyer issues mutually agreed trade finance instruments (LC / SBLC).",
    details: "Operationalized through an Irrevocable, Transferable or Non-Transferable, Documented Letter of Credit (DLC) or Standby Letter of Credit (SBLC) from a Tier-1 international bank.",
    icon: <Landmark className="w-4 h-4 text-blue-400" />,
  },
  {
    step: 5,
    title: "SGS Assay Inspection",
    description: "Independent quality and quantity inspections at loading terminal.",
    details: "Full chemical assay, mineral quality, or moisture tests are conducted by independent surveyors (such as SGS, Saybolt, or Intertek) at loading berths.",
    icon: <Compass className="w-4 h-4 text-blue-400" />,
  },
  {
    step: 6,
    title: "Vessel Shipment",
    description: "Cargo is loaded, vessel charters are finalized, and transponders are activated.",
    details: "Bill of Lading (B/L) issued, Certificates of Origin finalized, and marine tracking protocols set. Sea transit commences immediately.",
    icon: <Ship className="w-4 h-4 text-blue-400" />,
  },
  {
    step: 7,
    title: "Final Delivery",
    description: "Vessel arrives, discharges cargo, and final clearing payment is released.",
    details: "Upon destination port discharge, a short inspection dipping is completed, customs cleared, and banking funds are immediately released via telegraphic transfer (MT103).",
    icon: <CheckCircle className="w-4 h-4 text-blue-400" />,
  },
];

export default function TradeProcess() {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <section id="trade-process" className="py-32 bg-[#050816] relative overflow-hidden border-t border-zinc-900/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left mb-20 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/5 text-zinc-400 mb-4">
            <span className="font-mono text-[9px] tracking-widest uppercase">Transaction Stages</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
            Our Trade Process.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm font-light">
            We operate under strict, standardized procedural steps to guarantee compliance, clear banking records, and reliable execution.
          </p>
        </div>

        {/* Horizontal Timeline (Desktop Only) */}
        <div className="hidden lg:block relative mb-16 px-4">
          {/* Connecting line */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-zinc-900 -translate-y-1/2 z-0"></div>
          
          <div className="relative z-10 flex justify-between">
            {STEPS.map((step) => {
              const isActive = activeStep === step.step;
              return (
                <button
                  id={`process-step-indicator-${step.step}`}
                  key={step.step}
                  onClick={() => setActiveStep(step.step)}
                  className="flex flex-col items-center focus:outline-none cursor-pointer group"
                  style={{ width: "12%" }}
                >
                  {/* Step Bubble */}
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 relative ${
                      isActive
                        ? "bg-zinc-900 border-white/25 text-white scale-110 shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                        : "bg-black border-white/5 text-zinc-500 group-hover:border-white/15 group-hover:text-zinc-200"
                    }`}
                  >
                    {step.icon}
                    
                    {/* Index Badge */}
                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-zinc-900 border border-white/10 font-mono text-[8px] text-zinc-300 flex items-center justify-center font-bold">
                      {step.step}
                    </span>
                  </div>

                  <span
                    className={`mt-4 font-mono text-[9px] tracking-wider uppercase text-center font-semibold transition-colors duration-200 ${
                      isActive ? "text-white" : "text-zinc-600 group-hover:text-zinc-400"
                    }`}
                  >
                    Step {step.step}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Staggered Vertical List (Mobile/Tablet Only) */}
        <div className="lg:hidden space-y-3 mb-10">
          {STEPS.map((step) => {
            const isActive = activeStep === step.step;
            return (
              <button
                id={`process-mobile-step-${step.step}`}
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`w-full text-left p-4 rounded-2xl border flex items-center justify-between transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-zinc-900 border-white/10 text-white"
                    : "bg-zinc-950/40 border-white/5 text-zinc-400 hover:bg-zinc-900"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center shrink-0">
                    <span className="font-mono text-[10px] text-white font-bold">{step.step}</span>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                      {step.title}
                    </h4>
                    <p className="text-[10px] text-zinc-500 line-clamp-1">{step.description}</p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
              </button>
            );
          })}
        </div>

        {/* Step Detail Explanation Panel */}
        <div className="glass-panel p-8 sm:p-12 rounded-[32px] border border-white/5 relative bg-zinc-950/40">
          <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            {/* Step indicator large */}
            <div className="md:col-span-3 flex flex-col justify-between h-full md:border-r border-zinc-900 pb-6 md:pb-0 md:pr-10">
              <div>
                <span className="font-mono text-3xl font-bold text-zinc-600 block leading-none mb-1">
                  STAGE {String(activeStep).padStart(2, "0")}
                </span>
                <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500">
                  Process Stage
                </span>
              </div>
              <div className="mt-8 hidden md:block">
                <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl w-fit">
                  {STEPS[activeStep - 1].icon}
                </div>
              </div>
            </div>

            {/* Step detailed text */}
            <div className="md:col-span-9 pl-0 md:pl-6 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {STEPS[activeStep - 1].title}
              </h3>
              
              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                {STEPS[activeStep - 1].description}
              </p>

              <div className="mt-6 pt-6 border-t border-zinc-900/60 space-y-2">
                <div className="flex items-center space-x-2 text-white">
                  <CornerDownRight className="w-3.5 h-3.5 text-zinc-500" />
                  <span className="font-mono text-[9px] uppercase tracking-widest font-semibold text-zinc-400">Compliance Directives</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-500 font-light leading-relaxed pl-5">
                  {STEPS[activeStep - 1].details}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Instruction helper */}
        <div className="mt-6 p-4 border border-dashed border-zinc-900 rounded-2xl text-center">
          <p className="font-mono text-[8px] tracking-wider text-zinc-600 uppercase">
            *Typical transaction cycle averages 14-30 standard business days.
          </p>
        </div>

      </div>
    </section>
  );
}
