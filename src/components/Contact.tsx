import { useState, useEffect, useRef, FormEvent } from "react";
import { Mail, Phone, MapPin, Globe, Send, Clock, ListFilter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  selectedProduct: string;
}

interface SubmittedRequest {
  id: string;
  timestamp: string;
  name: string;
  email: string;
  company: string;
  country: string;
  product: string;
  message: string;
  status: string;
}

export default function Contact({ selectedProduct }: ContactProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [product, setProduct] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submissionHistory, setSubmissionHistory] = useState<SubmittedRequest[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const productInputRef = useRef<HTMLInputElement>(null);

  // Set selected product from prop when selected
  useEffect(() => {
    if (selectedProduct) {
      setProduct(selectedProduct);
      if (productInputRef.current) {
        productInputRef.current.focus();
      }
    }
  }, [selectedProduct]);

  // Load quote history from local storage on load
  useEffect(() => {
    const saved = localStorage.getItem("jasmine_advisory_quotes");
    if (saved) {
      try {
        setSubmissionHistory(JSON.parse(saved));
      } catch (err) {
        console.error("Error loading quote history", err);
      }
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email || !company || !country || !product) {
      return;
    }

    setIsSubmitting(true);

    // Simulate API gateway roundtrip
    setTimeout(() => {
      const newSubmission: SubmittedRequest = {
        id: "JA-" + Math.floor(100000 + Math.random() * 900000),
        timestamp: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        name,
        email,
        company,
        country,
        product,
        message,
        status: "PROCESSING",
      };

      const updatedHistory = [newSubmission, ...submissionHistory];
      setSubmissionHistory(updatedHistory);
      localStorage.setItem("jasmine_advisory_quotes", JSON.stringify(updatedHistory));

      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset form fields
      setName("");
      setEmail("");
      setCompany("");
      setCountry("");
      setProduct("");
      setMessage("");

      // Clear success banner after some time
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-32 bg-[#050816] relative overflow-hidden border-t border-zinc-900/60">
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-blue-500/5 glow-orb" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Block */}
        <div className="text-left mb-20 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-950 border border-white/5 text-zinc-400 mb-4">
            <span className="font-mono text-[9px] tracking-widest uppercase">Inquiry Desk</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight leading-none">
            Request a Quotation.
          </h2>
          <p className="mt-4 text-zinc-400 text-sm font-light leading-relaxed">
            Connect directly with our trade facilitation desk. We assist with quotation parameters, sourcing requests, and corporate paperwork for registered buyers.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official corporate details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-8 rounded-[24px] border border-white/5 relative bg-zinc-950/40">
              <span className="font-mono text-[8px] tracking-[0.15em] text-zinc-500 block uppercase mb-6">
                Headquarters Location
              </span>
              
              <h3 className="text-xl font-bold text-white tracking-tight mb-8">
                Jasmine Advisory <span className="text-zinc-500 font-light">Sdn Bhd</span>
              </h3>

              <div className="space-y-6 text-zinc-400 text-xs font-light">
                {/* Address block */}
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block">HQ Address</span>
                    <p className="leading-relaxed text-zinc-300">
                      Block G-2-5, Boulevard Business Park<br />
                      Off Jalan Kuching<br />
                      51200 Kuala Lumpur, Malaysia
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-start space-x-3.5">
                  <Phone className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block">Direct Telephone</span>
                    <a href="tel:+60129819919" className="block font-mono text-white hover:text-blue-400 transition-colors font-semibold">
                      +60129819919
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3.5">
                  <Mail className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block">General Enquiry Email</span>
                    <a href="mailto:info@jasmineadvisory.com" className="block font-mono text-white hover:text-blue-400 transition-colors font-semibold">
                      info@jasmineadvisory.com
                    </a>
                  </div>
                </div>

                {/* Web Domain */}
                <div className="flex items-start space-x-3.5">
                  <Globe className="w-4 h-4 text-zinc-600 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <span className="font-mono text-[8px] uppercase tracking-widest text-zinc-500 block">Official Website</span>
                    <a href="https://jasmineadvisory.com" target="_blank" rel="noreferrer" className="block font-mono text-white hover:text-blue-400 transition-colors">
                      www.jasmineadvisory.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* View history trigger (if quotes exist in storage) */}
            {submissionHistory.length > 0 && (
              <div className="glass-panel p-4 rounded-xl border border-white/5 text-center">
                <button
                  id="btn-toggle-history"
                  onClick={() => setShowHistory(!showHistory)}
                  className="font-mono text-[9px] font-semibold tracking-widest text-zinc-400 uppercase hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto cursor-pointer"
                >
                  <ListFilter className="w-3.5 h-3.5" />
                  {showHistory ? "Hide active tickets" : `View active tickets (${submissionHistory.length})`}
                </button>
              </div>
            )}
          </div>

          {/* Right Column: Dynamic Form or History Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {showHistory && submissionHistory.length > 0 ? (
                /* ================= SOURCING INQUIRY HISTORY PANEL ================= */
                <motion.div
                  key="history-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-panel p-8 rounded-[32px] border border-white/5 bg-zinc-950/40"
                >
                  <div className="flex items-center justify-between mb-6 border-b border-zinc-900 pb-4">
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Submitted Enquiries
                    </h3>
                    <button
                      id="btn-back-to-form"
                      onClick={() => setShowHistory(false)}
                      className="font-mono text-[9px] font-bold tracking-widest text-blue-400 hover:text-white uppercase transition-colors"
                    >
                      New Inquiry
                    </button>
                  </div>

                  <div className="space-y-4 max-h-[380px] overflow-y-auto pr-2">
                    {submissionHistory.map((req) => (
                      <div key={req.id} className="p-4 rounded-2xl bg-zinc-950 border border-white/5 space-y-3">
                        <div className="flex items-center justify-between font-mono text-[8px]">
                          <span className="text-zinc-400 font-bold">{req.id}</span>
                          <span className="text-zinc-600">{req.timestamp}</span>
                        </div>
                        
                        <div>
                          <h4 className="text-xs font-bold text-white">{req.product}</h4>
                          <p className="text-[10px] text-zinc-500 font-light mt-0.5">
                            Destined for {req.company} • {req.country}
                          </p>
                        </div>

                        {req.message && (
                          <p className="text-[11px] text-zinc-500 italic">
                            "{req.message}"
                          </p>
                        )}

                        <div className="flex items-center gap-1.5 font-mono text-[8px] bg-zinc-900 px-2 py-0.5 rounded w-fit text-zinc-400 font-bold border border-white/5">
                          <Clock className="w-2.5 h-2.5 text-blue-400 animate-pulse" />
                          <span className="uppercase tracking-wider">
                            {req.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ) : (
                /* ================= STANDARD INQUIRY FORM ================= */
                <motion.div
                  key="form-panel"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="glass-panel p-8 sm:p-10 rounded-[32px] border border-white/5 bg-zinc-950/40"
                >
                  <h3 className="text-sm font-bold text-white mb-8 uppercase tracking-wider">
                    Request for Quotation (RFQ)
                  </h3>

                  {/* Submission success alert banner */}
                  {submitSuccess && (
                    <div className="mb-6 p-4 rounded-2xl bg-zinc-900/40 border border-emerald-500/20 text-emerald-400 flex items-start gap-3">
                      <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5 animate-pulse" />
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider">Inquiry Sent Successfully</h4>
                        <p className="text-[11px] mt-0.5 font-light leading-relaxed text-zinc-400">
                          Your sourcing inquiry has been logged. Our trading desk is scheduled to review your requirements and respond within 24 business hours.
                        </p>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Name input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-semibold">
                          Your Name *
                        </label>
                        <input
                          id="input-rep-name"
                          type="text"
                          required
                          placeholder="Representative full name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/5 focus:border-white/15 focus:ring-1 focus:ring-white/10 text-white text-xs placeholder-zinc-700 outline-none transition-all"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-semibold">
                          Your Email *
                        </label>
                        <input
                          id="input-rep-email"
                          type="email"
                          required
                          placeholder="name@corporation.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/5 focus:border-white/15 focus:ring-1 focus:ring-white/10 text-white text-xs placeholder-zinc-700 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Company input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-semibold">
                          Company Name *
                        </label>
                        <input
                          id="input-rep-company"
                          type="text"
                          required
                          placeholder="Full corporation name"
                          value={company}
                          onChange={(e) => setCompany(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/5 focus:border-white/15 focus:ring-1 focus:ring-white/10 text-white text-xs placeholder-zinc-700 outline-none transition-all"
                        />
                      </div>

                      {/* Country input */}
                      <div className="space-y-1.5">
                        <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-semibold">
                          Destination Country *
                        </label>
                        <input
                          id="input-rep-country"
                          type="text"
                          required
                          placeholder="Discharge Port Country"
                          value={country}
                          onChange={(e) => setCountry(e.target.value)}
                          className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/5 focus:border-white/15 focus:ring-1 focus:ring-white/10 text-white text-xs placeholder-zinc-700 outline-none transition-all"
                        />
                      </div>
                    </div>

                    {/* Product of Interest */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-semibold">
                        Commodity of Interest *
                      </label>
                      <input
                        id="input-rep-product"
                        ref={productInputRef}
                        type="text"
                        required
                        placeholder="e.g. EN590 Diesel, ICUMSA 45 Sugar, Urea Sourcing"
                        value={product}
                        onChange={(e) => setProduct(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 focus:border-white/20 text-white text-xs placeholder-zinc-700 outline-none transition-all"
                      />
                    </div>

                    {/* Message / Specifications */}
                    <div className="space-y-1.5">
                      <label className="font-mono text-[9px] uppercase tracking-widest text-zinc-500 block font-semibold">
                        Additional Information / Specifications
                      </label>
                      <textarea
                        id="input-rep-message"
                        rows={4}
                        placeholder="Please specify target monthly volumes, preferred Incoterms (FOB/CIF), destination ports, and any particular quality standards required."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/5 focus:border-white/15 focus:ring-1 focus:ring-white/10 text-white text-xs placeholder-zinc-700 outline-none transition-all resize-none"
                      ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                      id="btn-submit-quotation"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl bg-white hover:bg-zinc-100 text-black font-semibold text-xs tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(255,255,255,0.15)] shadow-[0_4px_12px_rgba(255,255,255,0.05)] flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:pointer-events-none disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Clock className="w-4 h-4 animate-spin text-black" />
                          SENDING ENQUIRY...
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          Submit Sourcing Inquiry
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
