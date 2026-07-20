import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Mission from "./components/Mission";
import Products from "./components/Products";
import GlobalNetwork from "./components/GlobalNetwork";
import WhyUs from "./components/WhyUs";
import TradeProcess from "./components/TradeProcess";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedInquiryProduct, setSelectedInquiryProduct] = useState("");

  const handleInquiryRequest = (productName: string) => {
    setSelectedInquiryProduct(productName);
    
    // Smooth scroll down to contact section
    const target = document.querySelector("#contact");
    if (target) {
      const offset = 80; // offset for sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const scrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Premium Startup Preloader */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader key="loader" onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Frame */}
      {!isLoading && (
        <motion.div
          id="app-main-frame"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-[#050816] text-zinc-100 font-sans antialiased selection:bg-white selection:text-black min-h-screen"
        >
          {/* Header Navigation */}
          <Navbar onQuoteClick={() => scrollToSection("#contact")} />

          {/* Fully Featured Landing Page */}
          <main>
            {/* Fullscreen Hero Segment */}
            <Hero
              onQuoteClick={() => scrollToSection("#contact")}
              onProductsClick={() => scrollToSection("#products")}
            />

            {/* Corporate Profile and Core Statistics */}
            <About />

            {/* Core Mission Directives */}
            <Mission />

            {/* Commodity Solutions Portfolio Catalog */}
            <Products onInquire={handleInquiryRequest} />

            {/* Geographical Footprint Interactive Map */}
            <GlobalNetwork />

            {/* Why Jasmine Advisory Strategic Factors */}
            <WhyUs />

            {/* Horizontal/Vertical Incoterms Pipeline Timeline */}
            <TradeProcess />

            {/* Direct Inquiry Contact Desk Form */}
            <Contact selectedProduct={selectedInquiryProduct} />
          </main>

          {/* Footnotes, compliances and copyrights */}
          <Footer />

          {/* Scroll to top floating controller */}
          <ScrollToTop />
        </motion.div>
      )}
    </>
  );
}
